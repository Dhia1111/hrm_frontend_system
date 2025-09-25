
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function EmployeesManagment(){

    return <div style={{display:"flex", flexFlow:"column"}}>
    
    <NavBar Links={[{Title:"EmployeesList",Value:"/Admine/EmployeesManagment"},{Title:"AddEmployee",Value:"/Admine/EmployeesManagment/AddEmployee"}]}/>
    <Outlet/>
    
    </div>
}