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



export const VALIDATION_EMAIL  = {
    required  : 'Обязательное Поле',
    minLength : {
        value   : 5,
        message : 'Минимум 5 символов',
    },
    pattern : {
        value   : /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        message : 'Используйте латиницу',
    },

};

export const VALIDATION_PASSWORD = {
    required  : 'Обязательное Поле',
    minLength : {
        value   : 6,
        message : 'Минимум 6 символов',
    },
    pattern : {
        value   : /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
        message : 'Введите латиницу разных регистров и число',
    },
};

export const VALIDATION_NICKNAME = {
    required  : 'Укажите nickname',
    minLength : {
        value   : 5,
        message : 'Минимум 5 символов',
    },
    pattern : {
        value   : /[A-Za-z]{5}/,
        message : 'Используйте латиницу',
    },
};

export const VALIDATION_COUNTRY = {
    required  : 'Укажите стране',
    minLength : {
        value   : 2,
        message : 'Минимум 2 символа',
    },
    pattern : {
        value   : /[А-Яа-я]{3}/,
        message : 'Используйте кириллицу',
    },
};

export const VALIDATION_SELECT = {
    required : true,
};
