import { Link } from 'react-router-dom';



const Notebook = () => {


    return (
        <div className="flex  flex-1 items-center justify-center w-6/6 h-6/6 gap-2 md:gap-3">
            <Link
                to="/notebook/shoplist"
                className="w-1/3 h-16 bg-slate-900 flex  items-center font-extrabold justify-center cursor-pointer rounded-md
            hover:border-solid hover:border-4  hover:border-slate-900 hover:text-orange-900 hover:bg-white"
            >
          ShopList
            </Link>
            <Link
                to="/notebook/todo"
                className="w-1/3 h-16 bg-slate-900 flex  items-center font-extrabold justify-center cursor-pointer rounded-md
            hover:border-solid hover:border-4  hover:border-slate-900 hover:text-orange-900 hover:bg-white"
            >
          ToDo
            </Link>

        </div>
    );
};

export default Notebook;
