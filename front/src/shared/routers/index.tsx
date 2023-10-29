import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { Root } from './Root'

import { Main } from '../../modules/main'
import { Profile } from '../../modules/profile'
import { ShopList } from '../../modules/shopList'
import { Analysis } from '../../modules/analysis'
import { Registration } from '../../modules/registration'
import { Authorization } from '../../modules/authorization'

import * as URL from './path'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={URL.BASIC} element={<Root />}>
      <Route index element={<Main />} />
      <Route path={URL.ACCOUNT} element={<Profile />} />
      <Route path={URL.ANALYSIS} element={<Analysis />} />
      <Route path={URL.SHOPLIST} element={<ShopList />} />
      <Route path={URL.LOGIN} element={<Authorization />} />
      <Route path={URL.REGISTRATION} element={<Registration />} />
    </Route>
  )
)
