import { JSX } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import "./app.css";
import LogIn from "./Component/LogIn/LogIn.tsx";
import Main from "./Component/Main/Main.tsx";
import Admine, { Loader } from "./Component/Admine/Admine.jsx";
import EmployeesManagment from "./Component/Admine/EmpoyeesManagement/EmployeesManagment.jsx";
import EmployeesList from "./Component/Admine/EmpoyeesManagement/EmployeesList/EmployeesList.jsx";
import {Loader as AdmineLoader}from "../src/Component/Admine/Admine.jsx"

const key = import.meta.env.VITE_REACT_ASYNCFUSION_KEY;
 // Define router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Main />} />
      <Route path="LogIn" element={<LogIn/>}/>
      <Route path="Admine" element={<Admine/>} loader={AdmineLoader}>
      <Route path="EmployeesManagment" element={<EmployeesManagment/>}>
      <Route index={true} element={<EmployeesList/>}/>
 
       </Route>
      </Route>

    </Route>
  )
);

export default function App() {
  
  registerLicense(key)

  return <RouterProvider router={router} />;
}
