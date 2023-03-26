import * as Validation from './constansValidation';



export const createValidation = (typeCase: string) => {

    switch (typeCase) {
        case 'email':
            return {
                type       : 'email',
                validation : Validation.VALIDATION_EMAIL,
            };
        case 'password':
            return {
                type       : 'password',
                validation : Validation.VALIDATION_PASSWORD,
            };
        case 'country':
            return {
                type       : 'text',
                validation : Validation.VALIDATION_COUNTRY,
            };
        case 'nickname':
            return {
                type       : 'text',
                validation : Validation.VALIDATION_NICKNAME,
            };
        case 'number':
            return {
                type       : 'number',
                validation : Validation.VALIDATION_NUMBER,
            };
        case 'textRus':
            return {
                type       : 'text',
                validation : Validation.VALIDATION_STRING,
            };

    }
};
