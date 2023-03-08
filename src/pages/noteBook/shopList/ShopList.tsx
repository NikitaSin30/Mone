import React from 'react';
import { GlobalContext } from 'shared/context/context';
import { Context } from 'shared/context/context';
import { Navigate } from 'react-router';
import { observer } from 'mobx-react-lite';



export const ShopList:React.FC = observer(() => {
    const { isLogin } = React.useContext<GlobalContext>(Context);

    if (!isLogin) return <Navigate to="/login" />;

    return (
        <div className="flex-1 h-3/3  bg-white max-h-[300px] rounded-md shadow-lg">Список покупок</div>
    );
});
