import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import DataPage from "../pages/DataPage";
import WelcomePage from "../pages/WelcomePage";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: paths.home,
        element: <WelcomePage/>
      },
      {
        path: paths.data,
        element: <DataPage/>
      }
    ]
  }
])