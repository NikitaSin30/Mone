export const VALIDATION_NUMBER = {
    required  : 'Обязательное Поле',
    minLength : {
        value   : 3,
        message : 'Минимум 3 символа',
    },
    valueAsNumber : true,
};


export const VALIDATION_STRING = {
    required  : 'Обязательное Поле',
    minLength : {
        value   : 3,
        message : 'Минимум 3 символа',
    },
    pattern : {
        value   : /[А-Яа-я]/,
        message : 'Используйте только кирилицу',
    },
};
