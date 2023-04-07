import * as Validation from './constans/constansValidation';
import * as CASE from './constans';


export const createValidation = (typeCase: string) => {

    switch (typeCase) {
        case CASE.CASE_TYPE_EMAIL:
            return {
                type       : 'email',
                validation : Validation.VALIDATION_EMAIL,
            };
        case CASE.CASE_TYPE_PASSWORD:
            return {
                type       : 'password',
                validation : Validation.VALIDATION_PASSWORD,
            };
        case CASE.CASE_TYPE_COUNTRY:
            return {
                type       : 'text',
                validation : Validation.VALIDATION_COUNTRY,
            };
        case CASE.CASE_TYPE_NICKNAME:
            return {
                type       : 'text',
                validation : Validation.VALIDATION_NICKNAME,
            };
        case CASE.CASE_TYPE_NUMBER:
            return {
                type       : 'number',
                validation : Validation.VALIDATION_NUMBER,
            };
        case CASE.CASE_TYPE_TEXT_RUS:
            return {
                type       : 'text',
                validation : Validation.VALIDATION_STRING,
            };
        case CASE.CASE_TYPE_SELECT:
            return {
                validation : Validation.VALIDATION_SELECT,
            };
    }
};
