import { IInput } from './intrfaces/interfaces';



export const InputMoney = (props:IInput) => {
    const { register, labelTitle } = props;

    return (
        <>
            <input
                className=" flex-1 w-full placeholder-slate-900 text-black font-semibold rounded-md shadow-lg px-2 py-1"
                type="number"
                {...register(labelTitle, {
                    required  : 'Обязательное Поле',
                    minLength : {
                        value   : 3,
                        message : 'Минимум 3 символа',
                    },
                    pattern : {
                        value   : /^\s*[\d]+(?:,[\d]+)?\s*$/,
                        message : 'Используйте только цифры',
                    },
                })}
            />
        </>
    );
};
