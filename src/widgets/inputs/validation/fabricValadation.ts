import * as Valadation from './constansValidation';



export const createValatation = (typeCase: string) => {

    switch (typeCase) {
        case 'email':
            return {
                type       : 'text',
                validation : Valadation.VALIDATION_EMAIL,
            };
        case 'password':
            return {
                type       : 'password',
                valadation : Valadation.VALIDATION_PASSWORD,
            };
        case 'country':
            return {
                type       : 'text',
                valadation : Valadation.VALIDATION_COUNTRY,
            };
        case 'nickname':
            return {
                type       : 'text',
                label      : 'nickname',
                valadation : Valadation.VALIDATION_NICKNAME,
            };
        case 'number':
            return {
                type       : 'number',
                valadation : Valadation.VALIDATION_NUMBER,
            };
        case 'textRus':
            return {
                type       : 'text',
                valadation : Valadation.VALIDATION_STRING,
            };

    }
};
