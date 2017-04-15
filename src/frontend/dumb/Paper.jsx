import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

const styles = {
    paper : {
        height: 250,
        width: 250,
        margin: 30,
        textAlign: 'center',
        display: 'inline-block',
    },
    image : {
        width : '100%',
        height : '85%',
        zIndex : 1,
    },
    contentImg : {
        position : 'absolute',
        top : 0,
        right : 0,
        zIndex : 2,
        width : '30%',
        height : 'auto',
    },
    content : {
        position : 'relative',
    }
};

const ShoesPaper = ({shoes}) => (
    
    <Link to={'/shoes/' + shoes._id} >

        <Paper style={styles.paper} zDepth={2} rounded={false} >
            <div style={styles.content}>
        <img id={shoes._id} style={styles.image} src={shoes.image} />
        {(shoes.hasPromo()) ? <img src={'/images/sale.png'} style={styles.contentImg} /> : undefined}
        <label> {shoes.name} </label>
        <br/>
        <label>Price: { shoes.getTotalPrice().toFixed(2) } </label>
        </div>
        </Paper>        

    </Link>
);

export default ShoesPaper;