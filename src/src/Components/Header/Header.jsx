import s from "./Header.module.css"
import { NavLink, Routes, Route } from "react-router-dom"

import heard from "../../img/SaveIcons/heart-unactive.png"
import heard_active from "../../img/SaveIcons/heard-active.png"

const Header = () => {
    return(
        <header className = {s.header}>
            <div to = "/" className={s.info}>
                <img src="https://img.icons8.com/fluency/80/80/christmas-candy.png" className={s.img} alt="" />
                <div className={s.data}>
                    <NavLink to = "/">
                        <h1 className={s.h1}>Candy House</h1>
                        <p className={s.p}>Любимий магазин солодощей усього Львову</p>
                    </NavLink>
                </div>
            </div>
            <nav className={s.nav}>
                <NavLink to = "/saved">
                    <Routes>
                        <Route path = "/saved" element = {<img src={heard_active} alt="" />} />
                        <Route path = "/*" element = {<img src={heard} alt="" />} />
                    </Routes>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header