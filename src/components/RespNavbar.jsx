import React from 'react'
import './css/RespNavbar.css'
import { Link } from 'react-router-dom'

export const RespNavbar = () => {
    const [menu, setMenu] = React.useState("HOME");
    return (
        <div >
            <nav className="respNavbar" >
                <Link to="/" className="link" style={{ color: menu === "HOME" ? "#DCA47D" : "#F7F7F7"}} onClick={() => setMenu("HOME")}>
                    Home
                </Link>
                <Link to="/work"  className="link"  style={{ color: menu === "Work" ? "#DCA47D" : "#F7F7F7"}} onClick={() => setMenu("Work")}>
                    Work
                </Link>
                <Link to="/contact"  className="link"  style={{ color: menu === "Contact" ? "#DCA47D" : "#F7F7F7"}} onClick={() => setMenu("Contact")}>
                    Contact
                </Link>
                <Link to="/blog"  className="link"  style={{ color: menu === "Blog" ? "#DCA47D" : "#F7F7F7"}} onClick={() => setMenu("Blog")}>
                    Blog
                </Link>
            </nav>
        </div>
    )
}
