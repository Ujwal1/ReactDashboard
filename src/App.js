
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";

const routes = [
  {
    path: '/',
    element:<HomePage/>,
  },
  {
    path: '/messages',
    element: <Messages/>,
  }
];

const routeConfig = createBrowserRouter(routes);

function App() {
  return (
    <>
  <div className='flex'>
    <Sidebar/>
  <RouterProvider router={routeConfig}/>
  </div>
  </>
  )
}

export default App;
