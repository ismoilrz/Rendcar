import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/logo.svg"
import { menuData } from "../constants/menuData";
import "./components.css";
import { Icons } from "../constants/Icons";

const MenuBar = () => {
    const location = useLocation();

    return (
        <div className="menu">
            <div className="menu__main">
                <Link to="/" className="logo">
                    <img src={LogoImg} alt="logo" />
                </Link>

                <div className="menubar">
                    {menuData.map((item) => {
                        const isActive = item.path === "/" 
                            ? location.pathname === "/" 
                            : location.pathname.includes(item.path);

                        return (
                            <Link
                                to={item.path}
                                key={item.key}
                                className={isActive ? "link active" : "link"}
                            >
                                <span>{item.icon}</span> 
                                <p>{item.label}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="bot">
                <Link
                    className={location.pathname.includes("/setting") ? "link active" : "link"}
                    to={"/setting"}
                >
                    <span><Icons.setting /></span>
                    <p>Setting</p>
                </Link>
            </div>
        </div>
    );
}

export default MenuBar;