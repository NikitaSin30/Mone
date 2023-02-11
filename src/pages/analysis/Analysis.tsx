import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { Context } from 'shared/context/context';
import { GlobalContext } from 'shared/context/context';
import Modal from 'widgets/modals/Modal';
import { CategoriesStore } from 'shared/store/CategoriesStore';
import FormModalCategories from 'features/add-categories/FormModalCategories';
import ErrorModal from 'widgets/modals/ErrorModal';


function Analysis(): React.ReactElement {
    const [isModalActive,setIsModalActive] = React.useState<boolean>(false);
    const [err, setErr] = React.useState<boolean>(false);
    const context = useContext<GlobalContext>(Context);
    const { categories } = CategoriesStore;
    const isCategories = categories.length > 0 ? true : false;


    function onChangeActive() {
        setIsModalActive(prev => !prev);
    }

    function onChangeErr() {
        setErr((prev) => !prev);
    }

    return context.isLogin ? (
        <section className=" flex  flex-col flex-1 ">
            <div className=" flex gap-2  flex-col flex-1 ">
                <div className="h-1/2 text-black bg-white rounded-md shadow-lg  py-2 px-1">
                    <h2 className="text-center text-xl font-semibold">Графики анализа</h2>
                </div>
                <div className="flex-1 h-1/2 flex flex-col text-black bg-white rounded-md shadow-lg  py-2 px-1">
                    <h2 className="text-center text-xl font-semibold">Ваши категории</h2>
                    <div className="flex-1 flex">
                        <ul className="flex flex-wrap flex-col gap-2 w-full pt-2 ">
                            {isCategories
                  && categories.map((categorie, index) => {
                      return (
                          <li
                              className="flex-none max-h-[40px] flex px-4 py-2 text-white bg-slate-900  items-center
                          justify-between rounded-md shadow-lg"
                              key={index}
                          >
                              <h2 className="font-semibold text-md">{categorie}</h2>
                              <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                              </span>
                          </li>
                      );
                  })}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={onChangeActive} className="rounded-full overflow-hidden hover:scale-110 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Modal isActive={isModalActive} onChangeActive={onChangeActive}>
                {err ? (
                    <ErrorModal onChangeActive={onChangeActive} onChangeErr={onChangeErr}>
                        <h2 className="text-xl font-bold text-center">
                Категрии должны быть уникальны <br /> Попробуйте ещё раз
                        </h2>
                    </ErrorModal>
                ) : (
                    <FormModalCategories onChangeActive={onChangeActive} onChangeErr={onChangeErr} />
                )}
            </Modal>
        </section>
    ) : (
        <Navigate to="/login" />
    );
}

export default Analysis;
