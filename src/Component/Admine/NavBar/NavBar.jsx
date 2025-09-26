import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faUser } from "@fortawesome/free-solid-svg-icons";
import Styles from "./NavBar.module.css"
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";



export default function NavBar({Links=[{Title:"",Value:""}]}){

 const {t} = useTranslation();

return<div className={Styles.Container}>

<ul className={Styles.List}> 
{
    Links.map((l,i)=><li key={i}><Link to={l.Value}>{t(l.Title)}</Link></li>)     
}    
</ul>

<div className={Styles.AccountLanguageContainer}>
<div className={Styles.LanguageContainer}>
    
 
<select name="" id="" hidden={false} onChange={e=>{changeLanguage(e.target.value); }}>
        <option value="en">English</option>
     <option value="fr">français</option>

    </select>
    
    </div>
<Link><FontAwesomeIcon icon={faUser}/></Link>
</div>
    </div>

    
}