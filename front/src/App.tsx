import { RouterProvider } from "react-router-dom";
import { router } from './shared/routers';

function App() {

  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
