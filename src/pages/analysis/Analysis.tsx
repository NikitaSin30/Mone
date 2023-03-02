import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { Context } from 'shared/context/context';
import { GlobalContext } from 'shared/context/context';
import Categories from 'widgets/categories/Categories';
import { AnalysisGraphs } from 'widgets/analysisGraphs/AnalysisGraphs';

function Analysis(): React.ReactElement {
    const { isLogin } = useContext<GlobalContext>(Context);

    return isLogin ? (
        <section className=" flex  flex-col flex-1 ">
            <div className=" flex gap-2  flex-col flex-1 ">
                <AnalysisGraphs/>
                <Categories/>
            </div>
        </section>
    ) : (
        <Navigate to="/login" />
    );
}

export default Analysis;
