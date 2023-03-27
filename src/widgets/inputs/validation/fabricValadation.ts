import * as Validation from './constans/constansValidation';
import * as CASE from './constans/constans';


export const createValidation = (typeCase: string) => {

    switch (typeCase) {
        case CASE.EMAIL:
            return {
                type       : 'email',
                validation : Validation.VALIDATION_EMAIL,
            };
        case CASE.PASSWORD:
            return {
                type       : 'password',
                validation : Validation.VALIDATION_PASSWORD,
            };
        case CASE.COUNTRY:
            return {
                type       : 'text',
                validation : Validation.VALIDATION_COUNTRY,
            };
        case CASE.NICKNAME:
            return {
                type       : 'text',
                validation : Validation.VALIDATION_NICKNAME,
            };
        case CASE.NUMBER:
            return {
                type       : 'number',
                validation : Validation.VALIDATION_NUMBER,
            };
        case CASE.TEXT_RUS:
            return {
                type       : 'text',
                validation : Validation.VALIDATION_STRING,
            };

    }
};
