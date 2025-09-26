
import NavBar from "../NavBar/NavBar"
import { Outlet } from "react-router-dom"
export default function PresenceManagment(){
       

          return <div style={{display:"flex", flexFlow:"column"}}>

    <NavBar Links={[{Title:"Precence List",Value:"/Admine/PresenceManagment"},{Title:"Add Recored",Value:"/Admine/PresenceManagment/AddPresnece"}]}/>
    <Outlet/>
    </div>
    

}