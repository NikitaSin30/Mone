import Categories from 'widgets/categories/Categories';
import { AnalysisGraphs } from 'widgets/analysisGraphs/AnalysisGraphs';



const Analysis = () => {

    return (
        <section className=" flex  flex-col flex-1 ">
            <div className=" flex gap-2  flex-col flex-1 ">
                <AnalysisGraphs/>
                <Categories/>
            </div>
        </section>
    );
};

export default Analysis;
