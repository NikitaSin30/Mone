import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { Context } from 'shared/context/context';
import { GlobalContext } from 'shared/context/context';
import Categories from 'widgets/categories/Categories';

function Analysis(): React.ReactElement {
    const { isLogin } = useContext<GlobalContext>(Context);

    return isLogin ? (
        <section className=" flex  flex-col flex-1 ">
            <div className=" flex gap-2  flex-col flex-1 ">
                <div className="h-1/2 text-black bg-white rounded-md shadow-lg  py-2 px-1">
                    <h2 className="text-center text-xl font-semibold">Графики анализа</h2>
                </div>
                <Categories/>
            </div>
        </section>
    ) : (
        <Navigate to="/login" />
    );
}

export default Analysis;
