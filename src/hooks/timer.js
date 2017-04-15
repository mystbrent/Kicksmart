function timerHook(db) {
    return async function execute(hookDetails) {
        const prop = hookDetails.type === 'before' ? 'data' : 'result';
        const collecion = hookDetails.path.split('/')[1];
        if(hookDetails[prop] instanceof Array) {
            // hookDetails[prop].forEach(res => console.log(res.hasExpired(), ' has it?'));
            const expiredReservations = hookDetails[prop].filter(res => res.hasExpired());
            expiredReservations.forEach(async (reservation) => {
               await db.collection(collecion).remove({name : reservation.name});
            });
        }
        else if (hookDetails[prop] instanceof Object) {
            if (hookDetails[prop].hasExpired()) {
                await db.collection('reservations').remove({name : hookDetails[prop].name});
            }
        }
        return hookDetails;
    }
}

export default timerHook;