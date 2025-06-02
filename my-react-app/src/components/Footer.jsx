import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer () {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="logo1.png" alt="Laser Wraps Logo" />
                </div>
                <div className="find-us">
                    <h3>Find Us</h3>
                    <ul>
                        <li>
                            <a href="https://maps.app.goo.gl/7FjB1nFtU1ZcBJMc8?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fas', 'location-arrow']} /> Location
                            </a>
                        </li>
                        <li>
                            <a href="tel:+254792391610">
                                <FontAwesomeIcon icon={['fas', 'phone']} /> +254 792 391 610
                            </a>
                        </li>
                        <li>
                            <a href="mailto:wrapnddrivelimited@gmail.com">
                                <FontAwesomeIcon icon={['fas', 'envelope']} /> Email
                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div className="services">
                    <h3>Services</h3>
                    <ul>
                        <li>Vinyl wraps</li>
                        <li>PPF & Ceramic coating</li>
                        <li>Detailing</li>
                        <li>Tint & face-lift</li>
                    </ul>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/wrap_n_drive?igsh=NDFqMzN5bjVidDYw" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/254792391610" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@wrap_n_drive?_t=ZM-8wrXrWZbSeT&_r=1" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'tiktok']} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="footer-bottom">
                &copy;{new Date().getFullYear()} Laser Wraps. All rights reserved.Website developed by <a href="https://wa.me/254759306105">ClickAura</a>
            </p>
        </footer>
    )

}

export default Footer
