import { IDeleteModal } from './interfaces/interfaces';
import { CloseIcon } from './assets/CloseIcon';



export const DeleteModal = (props:IDeleteModal) => {
    const { switchShowModal, onSuccesDelete, categorie, id } = props;


    return (
        <div className="w-full  h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center" onClick={switchShowModal}>
            <div
                className="flex flex-1 w-100 gap-4 flex-col  bg text-white bg-slate-900 py-6 px-8 rounded-md shadow-lg md:w-1/2 text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end">
                    <button onClick={switchShowModal} className="rounded-full w-6 h-6 overflow-hidden hover:scale-110">
                        {CloseIcon}
                    </button>
                </div>
                <h2>
            Удалить категорию <b>{categorie}</b> ?
                </h2>
                <button
                    onClick={() => onSuccesDelete(id)}
                    className="text-center hover:bg-slate-900 hover:text-white border-solid border-2
             border-white text-black bg-white rounded-md shadow-lg"
                >
            Да
                </button>
                <button
                    onClick={switchShowModal}
                    className="text-center hover:bg-slate-900 hover:text-white border-solid border-2
             border-white text-black bg-white rounded-md shadow-lg"
                >
            Нет
                </button>
            </div>
        </div>
    );
};
