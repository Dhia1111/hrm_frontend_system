
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Services } from "../../assets/Data/Services";
import { useTranslation } from "react-i18next";
import styles from "./Admine.module.css"
import { useEffect } from "react";
export default function Admine(){

const   Navigate=useNavigate()
    useEffect(()=>{

     Navigate("EmployeesManagment", { replace: true })

    },[]);

 const {t} = useTranslation();

 return <div className={styles.Admine}>

<div className={styles.Container}>
    <h3 className={styles.Title}>{t("Services")}</h3>
 <ul className={styles.List}>
    
    { Services.map(s=><li key={s.id}><Link className={styles.Link} to={"/Admine/"+s.key}>{t(s.key)}</Link></li>)}



 </ul>
</div>
   
    <Outlet/>

</div>

}



export function Loader(){
}