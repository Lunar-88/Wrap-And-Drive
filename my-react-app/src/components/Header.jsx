
import React, { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <header>
            <div className="logo">
                <img src="LOGO.png" alt="Logo"/>
            </div>

            <button className="hamburger" arial-label="Toggle navigation" onClick={toggleMenu}>
                &#9776;
            </button>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

        </header>
    )

}

export default Header;