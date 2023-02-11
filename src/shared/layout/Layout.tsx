import { Outlet } from 'react-router-dom';
import AppBar from '../../widgets/appBar/AppBar';

function Layout(): React.ReactElement {
    return (
        <>
            <div className="wrapper flex gap-3 flex-col max-w-full">
                <main className="flex-1 flex  max-w-full gap-2 bg-slate-300 md:gap-3">
                    <AppBar></AppBar>

                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default Layout;
