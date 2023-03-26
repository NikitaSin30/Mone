import Categories from 'widgets/categories/Categories';
import { AnalysisGraphs } from 'widgets/analysisGraphs/AnalysisGraphs';
import { Tyy } from './Tyy';


const Analysis = () => {

    return (
        <section className=" flex  flex-col flex-1 ">
            <div className=" flex gap-2  flex-col flex-1 ">
                <AnalysisGraphs/>
                <Categories/>
                <Tyy/>
            </div>
        </section>
    );
};

export default Analysis;
