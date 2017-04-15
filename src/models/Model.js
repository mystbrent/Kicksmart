import Joi from 'joi';

export default class Model {
    
    static get schema() {
        return {};
    }

    constructor(doc) {
        Object.assign(this, doc);
    }

    validate() {
        return Joi.validate(this, this.constructor.schema, {abortEarly : false});
    }

    isValid() {
        // return this.validate() === null;
        return this.validate().error === null;
    }
}