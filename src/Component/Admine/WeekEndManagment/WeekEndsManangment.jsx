import NavBar from "../NavBar/NavBar"
import { Outlet } from "react-router-dom"
export default function WeekEndsManagment(){
       

          return <div style={{display:"flex", flexFlow:"column"}}>

    <NavBar Links={[{Title:"UsersList",Value:"/Admine/UsersManagment"},{Title:"AddUser",Value:"/Admine/UsersManagment/AddUser"}]}/>
    <Outlet/>
    </div>
    

}