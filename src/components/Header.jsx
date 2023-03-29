import React from "react"
import pdf from "/public/RaresCV.pdf"

export default function Header() {

    function close() {
        document.body.classList.remove("nav-open")
    }


    function toggle() {
        document.body.classList.toggle("nav-open")
    }


    return (
        <header>
            <button className="nav_toggle" id="nav-toggle" aria-label="toggle navigation" onClick={toggle}>
                <span className="hamburger"></span>
            </button>

            <nav className="nav">
                <ul className="nav_list">
                    <li className="nav_item"><a href={pdf} download className="nav_link" onClick={close}>RESUME</a></li>
                    <li className="nav_item"><a href="#services" className="nav_link" onClick={close}>SERVICES</a></li>
                    <li className="nav_item"><a href="#about" className="nav_link" onClick={close}>ABOUT</a></li>
                    <li className="nav_item"><a href="#work" className="nav_link" onClick={close}>PROJECTS</a></li>
                    <li className="nav_item"><a href="#contact" className="nav_link" onClick={close}>CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}