import { JSX } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import "./App.css";
import LogIn from "./Component/LogIn/LogIn.tsx";
import Main from "./Component/Main/Main.tsx";
import Admine, { Loader } from "./Component/Admine/Admine.jsx";
import EmployeesManagment from "./Component/Admine/EmpoyeesManagement/EmployeesManagment.jsx";
import EmployeesList from "./Component/Admine/EmpoyeesManagement/EmployeesList/EmployeesList.jsx";
import {Loader as AdmineLoader}from "../src/Component/Admine/Admine.jsx"
import UsersManagment from "./Component/Admine/Users/UsersManangment.jsx";
import UsersList from "./Component/Admine/Users/UsersList/UsersList.jsx";

import ApsencesManagement from "./Component/Admine/AbsenceManagment/ApsenceManagment.jsx"
import ApsenceList from "./Component/Admine/AbsenceManagment/ApsenceListList/ApsenceList.jsx"

import DelayManagement from "./Component/Admine/DelayManagment/DelayManangment.jsx"
import DelayList from "./Component/Admine/DelayManagment/DelayList/DelayList.jsx"

import HolidaysManagment from "./Component/Admine/HolidaysManagment/HolidaysManagment.jsx"
import HolidaysList from "./Component/Admine/HolidaysManagment/HolidaysList/HolidaysList.jsx"

import PaymentsManagment from "./Component/Admine/PaymentManagment/PaymentsManangment.jsx"
import PaymentsList  from "./Component/Admine/PaymentManagment/PaymentsList/PaymentsList.jsx"

import PresenceManagment from "./Component/Admine/PresenceManagment/PresenceManagment.jsx"
import PresenceList from "./Component/Admine/PresenceManagment/PresneceList/PresenceList.jsx"

import WeekEndsManagment from "./Component/Admine/WeekEndManagment/WeekEndsManangment.jsx"
import WeekEndsList from "./Component/Admine/WeekEndManagment/WeekEndsList/WeekEndsList.jsx"


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

       <Route path="UsersManagment" element={<UsersManagment/>}>
        <Route index={true} element ={<UsersList/>}/>
       </Route>


       <Route path="AbsenceManagment" element={<ApsencesManagement/>}>
        <Route index={true} element ={<ApsenceList/>}/>
       </Route>

       <Route path="PresenceManagment" element={<PresenceManagment/>}>
        <Route index={true} element ={<PresenceList/>}/>
       </Route>

        <Route path="HoliDaysManagment" element={<HolidaysManagment/>}>
        <Route index={true} element ={<HolidaysList/>}/>
       </Route>

       <Route path="DelayManagment" element={<DelayManagement/>}>
        <Route index={true} element ={<DelayList/>}/>
       </Route>

       
       <Route path="PaymentManagment" element={<PaymentsManagment/>}>
        <Route index={true} element ={<PaymentsList/>}/>
       </Route>
       
       <Route path="WeekEndManagment" element={<WeekEndsManagment/>}>
        <Route index={true} element ={<WeekEndsList/>}/>
       </Route>
      
      </Route>

    </Route>
  )
);

export default function App() {
  
  registerLicense(key)

  return <RouterProvider router={router} />;
}
