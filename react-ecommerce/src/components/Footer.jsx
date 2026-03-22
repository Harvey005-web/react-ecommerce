import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="custom-footer mt-5">
            <div className="container-fluid px-4 py-5">
                <div className="row gy-4">

                    {/* Brand Column */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <div className="footer-logo-mark"><i className="fa-brands fa-gripfire"></i></div>
                            <h5 className="mb-0 fw-bold text-white">AURA DISTRICT</h5>
                        </div>
                        <p className="footer-desc">
                            Your go-to destination for premium streetwear, casual fits, and lifestyle clothing.
                            We curate the freshest drops from local and international brands — so you can
                            dress with confidence every day.
                        </p>
                        {/* Social icons */}
                        <div className="d-flex gap-3 mt-3">
                            <a href="https://www.facebook.com/harvey.espenilla" className="social-icon" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/harvsss___/?hl=en" className="social-icon" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="social-icon" aria-label="TikTok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="#" className="social-icon" aria-label="Twitter/X">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <h6 className="footer-heading">Quick Links</h6>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/policy">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <h6 className="footer-heading">Categories</h6>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/T-shirts">T-Shirts</Link></li>
                            <li><Link to="/Pants">Pants</Link></li>
                            <li><Link to="/Shoes">Shoes</Link></li>
                            <li><Link to="/Hoodies & Jackets">Hoodies & Jackets</Link></li>
                            <li><Link to="/Headwears">Headwear</Link></li>
                            <li><Link to="/Accessories">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-6">
                        <h6 className="footer-heading">Contact Us</h6>
                        <ul className="list-unstyled footer-contact">
                            <li>
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Sampaloc Manila, PH
                            </li>
                            <li>
                                <i className="fas fa-phone me-2"></i>
                                +63 951 970 0340
                            </li>
                            <li>
                                <i className="fas fa-envelope me-2"></i>
                                rvy.espenilla005@gmail.com
                            </li>
                            <li>
                                <i className="fas fa-clock me-2"></i>
                                Mon – Sat: 9:00 AM – 7:00 PM
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom text-center py-3">
                <small>
                    &copy; 2026 <strong>AURA DISTRICT</strong>. All rights reserved. &nbsp;|&nbsp;
                    Designed with <i className="fas fa-heart text-danger"></i> in the Philippines.
                </small>
            </div>
        </footer>
    );
};

export default Footer;

{/** 
const Footer = () => {
    return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
        <p>&copy; 2026 My E-Commerce Store. All rights reserved.</p>
    <div>
        <i className="fab fa-facebook fa-lg mx-2"></i>
        <i className="fab fa-twitter fa-lg mx-2"></i>
        <i className="fab fa-instagram fa-lg mx-2"></i>
    </div>
    </footer>
    );
};

export default Footer;
*/}