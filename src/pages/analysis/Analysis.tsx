import Categories from 'widgets/categories/Categories';
import { AnalysisGraphs } from 'widgets/analysisGraphs/AnalysisGraphs';
import { useToggle } from 'shared/hooks/useToggle/useToggle';
import { ContextAnalysis } from './context/context';
import { IContextAnalysis } from './context/interfaces';

const Analysis = () => {
    const { value: isModalActiveAnalysis, toggle: switchIsModalActiveAnalysis } = useToggle(false);
    const { value: isModalErrActiveAnalysis, toggle: switchIsModalErrActiveAnalysis } = useToggle(false);

    const context:IContextAnalysis = {
        isModalActiveAnalysis,
        switchIsModalActiveAnalysis,
        isModalErrActiveAnalysis,
        switchIsModalErrActiveAnalysis,
    };

    return (
        <ContextAnalysis.Provider value={context}>
            <section className=" flex  flex-col flex-1 ">
                <div className=" flex gap-2  flex-col flex-1 ">
                    <AnalysisGraphs/>
                    <Categories/>
                </div>
            </section>
        </ContextAnalysis.Provider>
    );
};

export default Analysis;
