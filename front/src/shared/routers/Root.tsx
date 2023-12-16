import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <Link to="login">login</Link>
      <Link to="/">main</Link>

      <Outlet />
    </>
  );
};
