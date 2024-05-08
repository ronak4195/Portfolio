import React from 'react'
import './css/RespNavbar.css'
import { Link } from 'react-router-dom'

export const RespNavbar = () => {
    const [menu, setMenu] = React.useState("HOME");
    return (
        <div >
            <nav className="respNavbar" >
                <Link to="/" className="link" style={{ color: menu === "HOME" ? "cyan" : "#e3f2fd"}} onClick={() => setMenu("HOME")}>
                    Home
                </Link>
                <Link to="/work"  className="link"  style={{ color: menu === "Work" ? "cyan" : "#e3f2fd"}} onClick={() => setMenu("Work")}>
                    Work
                </Link>
                <Link to="/contact"  className="link"  style={{ color: menu === "Contact" ? "cyan" : "#e3f2fd"}} onClick={() => setMenu("Contact")}>
                    Contact
                </Link>
                <Link to="/blog"  className="link"  style={{ color: menu === "Blog" ? "cyan" : "#e3f2fd"}} onClick={() => setMenu("Blog")}>
                    Blog
                </Link>
            </nav>
        </div>
    )
}
