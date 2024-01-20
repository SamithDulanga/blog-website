
import './App.css'
import {Main} from "./main/Main.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./app-routes.tsx";

function App() {

  return (
    <>
        <RouterProvider router={router}/>
      {/*<Main/>*/}

    </>
  )
}

export default App
