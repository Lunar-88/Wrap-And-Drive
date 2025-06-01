
function Header() {

    return (
        <header className="header">
            <div className="logo">
                <img src="logo1.png" alt="Logo"/>
            </div>
            <nav className="nav" >
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