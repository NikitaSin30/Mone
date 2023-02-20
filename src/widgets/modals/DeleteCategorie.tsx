
import { IDeleteModal } from './interfaces/interfaces';

export const DeleteModal = (props:IDeleteModal) => {
    const { onChangeActive, onSuccesDelete, categorie,id } = props;


    return (
        <div
            className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2 text-center"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-end">
                <button onClick={onChangeActive} className="rounded-full overflow-hidden hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <h2>
          Удалить категорию <b> {categorie}</b> ?
            </h2>
            <button
                onClick={() => onSuccesDelete(id)}
                className="text-center hover:bg-slate-900 hover:text-white border-solid border-2
             border-white text-black bg-white rounded-md shadow-lg"
            >
          Да
            </button>
            <button
                onClick={onChangeActive}
                className="text-center hover:bg-slate-900 hover:text-white border-solid border-2
             border-white text-black bg-white rounded-md shadow-lg"
            >
          Нет
            </button>
        </div>
    );
};
