import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { Context } from 'shared/context/context';
import { GlobalContext } from 'shared/context/context';
import Modal from 'features/add-categories/Modal';
import { CategoriesStore } from 'shared/store/CategoriesStore';
function Analysis(): React.ReactElement {
    const [modalActive,setModalActive] = React.useState<boolean>(false);
    const { categories } = CategoriesStore;
    const isCategories = categories.length > 0 ? true : false;

    const context = useContext<GlobalContext>(Context);

    function onChangeActive() {
        setModalActive(prev => !prev);
    }

    return context.isLogin ? (
        <section className=" flex  flex-col flex-1 ">
            <div className=" flex gap-2  flex-col flex-1 ">
                <div className="h-1/2 text-black bg-white rounded-md shadow-lg  py-2 px-1">
                    <h2 className="text-center text-lg font-semibold">Графики анализа</h2>
                </div>
                <div className="flex-1 h-1/2 flex flex-col text-black bg-white rounded-md shadow-lg  py-2 px-1">
                    <h2 className="text-center text-lg font-semibold">Ваши категории</h2>
                    <div className="flex-1 flex justify-center items-center">
                        <ul className="flex flex-wrap gap-2 w-full  ">
                            {isCategories
                  && categories.map((categorie, index) => {
                      return (
                          <li
                              className="w-1/4 flex px-4 py-2 text-white bg-slate-900  items-center
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
            <Modal active={modalActive} onChangeActive={onChangeActive}></Modal>
        </section>
    ) : (
        <Navigate to="/login" />
    );
}

export default Analysis;
