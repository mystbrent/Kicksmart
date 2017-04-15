import Model from './Model';
import {describe, it, beforeEach, afterEach} from 'mocha';
import Joi from 'joi';
import chai, {should} from 'chai';

should();

describe('Model', () => {
    describe('validate', () => {
        class Dummy extends Model {
                static get schema() {
                    return {
                        //field       //rules for validation
                        enemy : Joi.string().regex(/^[A-Z ]+$/i).required(),
                        year : Joi.number().integer().min(2017).max(2020)
                    }
                }
            }
        it('returns a null error field on a valid object', () => {
            const dummy = new Dummy({enemy : 'pat'});
            should().not.exist(dummy.validate().error);
        });

        it('returns an error field on a invalid object', () => {
            const dummy = new Dummy({enemy : 'pat#'});
            should().exist(dummy.validate().error);
        });
    });
});