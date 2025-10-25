import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/logo.svg"
import { menuData } from "../constants/menuData";
import "./components.css";
import { Icons } from "../constants/Icons";

const MenuBar = () => {

    let location = useLocation()
    return(
     <div className="menu">
        <div className="menu__main">
        <a href="#" className="logo">
            <img src={LogoImg} alt="logo" />
        </a>
        <div className="menubar">
            {menuData.map((item) => (
                <Link 
                    to={item.path}
                    key={item.key}
                    className={location.pathname === item.path ? "link active" : "link"}>
                    <span>{item.icon}</span> <p>{item.label}</p>
                </Link>
            ))}    
        </div>
        </div>
        <div className="bot">
            <Link
                 className={
                    location.pathname === "/setting"
                         ? "link active"
                         : "link"
                    }
                     to={"/setting"}>
                <span>{<Icons.setting />}</span><p>Setting</p>
            </Link>
            
        </div>
    </div>
    )
}

export default MenuBar;