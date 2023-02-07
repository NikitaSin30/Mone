import React from "react";
import { Link } from "react-router-dom";
import { Context } from "shared/context/context";
import UserNotLogin from "widgets/appBar/UserNotLogin";
import UserLogin from "widgets/appBar/UserLogin";
import { GlobalContext } from "shared/context/context";
//
function AppBar(): React.ReactElement {
  const context = React.useContext<GlobalContext>(Context)
  return (
    <nav className="flex  max-w-full  justify-center items-start md:py-1 min-w-[50px] lg:min-w-[100px] bg-slate-900 rounded-md shadow-lg  ">
      {context.isLogin ?  <UserLogin/>:< UserNotLogin/>}
    </nav>
  );
}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>;
export default AppBar;
