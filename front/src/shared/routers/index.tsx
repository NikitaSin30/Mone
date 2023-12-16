import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Authorization } from "../../modules/authorization";
import { Main } from "../../modules/main";
import { LOGIN, REGISTRATION } from "./path";
import { Registration } from "../../modules/registration";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element={<Main />} />
//       {/*<Route path={URL.ACCOUNT} element={<Profile />} />*/}
//       {/*<Route path={URL.ANALYSIS} element={<Analysis />} />*/}
//       {/*<Route path={URL.SHOPLIST} element={<ShopList />} />*/}
//       <Route path="/login" element={<Authorization />} />
//       {/*<Route path={URL.REGISTRATION} element={<Registration />} />*/}
//     </Route>
//   )
// );

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/login',
        element: <Authorization />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      // {
      //   path: "/login",
      //   element: <Authorization />,
      // },
      // {
      //   path: "/login",
      //   element: <Authorization />,
      // },
    ],
  },
]);
