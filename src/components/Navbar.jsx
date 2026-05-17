import "../css/navbar.css"

import { useState } from "react"

import { HiOutlineMenuAlt3 } from "react-icons/hi"

import { IoClose } from "react-icons/io5"

export default function Navbar(){

    const [menu,setMenu] = useState(false)

    

    return(

        <nav className="navbar">

            {/* LOGO */}

            <div className="logo">

              <span><img src="/paint.jpg" alt="" width={40}/> </span> Asian Paints

            </div>

            {/* LINKS */}

            <ul className={`navLinks ${menu ? "active" : ""}`}>

                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#jobs">Jobs</a>
                </li>

                <li>
                    <a href="#benefits">Benefits</a>
                </li>

                <li>
                    <a href="#process">Process</a>
                </li>

                <li>
                    <a href="#apply">Apply</a>
                </li>

            </ul>

            {/* BUTTON */}

            <button className="navBtn">

                Join Us

            </button>

            {/* MOBILE MENU */}

            <div
                className="menuIcon"
                onClick={() => setMenu(!menu)}
            >

                {
                    menu ?

                    <IoClose />

                    :

                    <HiOutlineMenuAlt3 />
                }

            </div>

        </nav>
    )
}