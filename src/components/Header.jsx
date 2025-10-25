import { useState } from "react";
import { Icons } from "../constants/Icons";
import ProfilPage from "./profil";

const HeaderCom = () => {
    const [open, setOpen] = useState(false)
    const openProfil = () => {
        setOpen(!open)
    }

    const close = () => {
        setOpen(!open)
    }

    return (
        <>
            <header>
                <div className="search">
                    <button>🔍</button>
                    <input type="text"  placeholder="Search or type"/>
                </div>

                <div className="info">
                    <button className="not-btn">{<Icons.notIcon />}</button>

                    <button className="avatar" onClick={openProfil}>
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*6Wc2r-HNCgFP2I2DyS0K7g.jpeg" alt="avatar image" />
                    </button>
                </div>
             </header>
             {open && <ProfilPage close={close} />}
        </>
    )
}

export default HeaderCom;