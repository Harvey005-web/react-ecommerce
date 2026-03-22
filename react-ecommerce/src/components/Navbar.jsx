import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const { wishlist, compareList } = useContext(AppContext);
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* ── Desktop Navbar ── */}
            <nav className="navbar navbar-expand-lg navbar-dark custom-navbar d-none d-lg-block shadow-sm">
                <div className="container-fluid px-4">
                    <NavLink className="navbar-brand fw-bold" to="/">
                        <i className="fas fa-tshirt me-2"></i>AURA DISTRICT
                    </NavLink>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {[
                                { to: "/", label: "Home" },
                                { to: "/products", label: "Products" },
                                { to: "/blog", label: "Blog" },
                                { to: "/about", label: "About" },
                                { to: "/contact", label: "Contact" },
                                { to: "/policy", label: "Terms" },
                            ].map(({ to, label }) => (
                                <li className="nav-item" key={to}>
                                    <NavLink
                                        to={to}
                                        end={to === "/"}
                                        className={({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Icons */}
                        <div className="d-flex align-items-center gap-3">
                            {/* Wishlist */}
                            <NavLink to="/wishlist" className="nav-link text-white position-relative" title="Wishlist">
                                <i className="fas fa-heart fs-5"></i>
                                {wishlist.length > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>
                                        {wishlist.length}
                                    </span>
                                )}
                            </NavLink>

                            {/* Compare */}
                            {compareList.length > 0 && (
                                <NavLink to="/compare" className="nav-link text-white position-relative" title="Compare">
                                    <i className="fas fa-balance-scale fs-5"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark" style={{ fontSize: "10px" }}>
                                        {compareList.length}
                                    </span>
                                </NavLink>
                            )}

                            {/* Cart */}
                            <NavLink className="nav-link text-white position-relative" to="/cart">
                                <i className="fa fa-shopping-cart fs-5"></i>
                                {totalQty > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>
                                        {totalQty}
                                    </span>
                                )}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── Mobile Bottom Navbar ── */}
            <nav className="navbar fixed-bottom mobile-bottom-nav border-top d-lg-none shadow-lg">
                <div className="container-fluid d-flex justify-content-around text-center">
                    {[
                        { to: "/", icon: "fa-home", label: "Home" },
                        { to: "/products", icon: "fa-box", label: "Products" },
                        { to: "/wishlist", icon: "fa-heart", label: "Wishlist", badge: wishlist.length },
                        { to: "/cart", icon: "fa-shopping-cart", label: "Cart", badge: totalQty },
                    ].map(({ to, icon, label, badge }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "mobile-nav-link active text-decoration-none"
                                    : "mobile-nav-link text-decoration-none"
                            }
                        >
                            <div className="position-relative d-inline-block">
                                <i className={`fa ${icon} fs-5`}></i>
                                {badge > 0 && (
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                        style={{ fontSize: "9px" }}
                                    >
                                        {badge}
                                    </span>
                                )}
                            </div>
                            <div style={{ fontSize: "11px" }}>{label}</div>
                        </NavLink>
                    ))}

                    {/* Burger button as 5th tab */}
                        <button
                        className="mobile-nav-link border-0 bg-transparent"
                        onClick={() => setMenuOpen(prev => !prev)}
                        >
                    <div>
                        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} fs-5`}></i>
                    </div>
                        <div style={{ fontSize: "11px" }}>Menu</div>
                    </button>
                </div>
            </nav>
                    {/* ── Mobile Drawer ── */}
                <div className={`mobile-drawer ${menuOpen ? "mobile-drawer-open" : ""}`}>
                <ul className="list-unstyled mb-0">
                {[
                    { to: "/about",   icon: "fa-info-circle",   label: "About" },
                    { to: "/blog",    icon: "fa-newspaper",     label: "Blog" },
                    { to: "/contact", icon: "fa-phone",         label: "Contact" },
                    { to: "/policy",  icon: "fa-file-alt",      label: "Terms & Conditions" },
                    { to: "/compare", icon: "fa-balance-scale", label: "Compare" },
                ].map(({ to, icon, label }) => (
                    <li key={to}>
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        `mobile-drawer-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setMenuOpen(false)}
                    >
                    <i className={`fas ${icon} me-3`}></i>{label}
                </NavLink>
                </li>
         ))}
        </ul>
        </div>

                {menuOpen && (
                    <div
                        className="mobile-drawer-backdrop"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}





        </>
    );
};

export default Navbar;



{/** 
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {

    const { cart } = useContext(CartContext);
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <>
            {/*=======================Desktop Navbar========================== *
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-none d-lg-block shadow-sm">
        <div className="container">
            <NavLink className="navbar-brand" to="/">E-Shop
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink  to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Home 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/products" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                           Products 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/blog" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Blog 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/about" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            About 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/contact" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Contact 
                        </NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink  to="/policy" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Terms & Conditions 
                        </NavLink>
                    </li>


                </ul>
                
                <form className="d-flex me-5" role="search">
                    <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>    
              
                
                <li className="nav-item" style={{ listStyle: 'none' }}>
                        <NavLink className="nav-link text-white" to="/cart">
                        <i className="fa fa-shopping-cart my-2"></i>
                        <span className="badge bg-danger ms-2">
                            ({cart.reduce((sum, item) => sum + item.qty, 0)})
                        </span>
                        </NavLink>    
                    </li>   
            </div>
        </div>
    </nav>
    {/*=======================Mobile Bottom Navbar========================== *
        <nav className="navbar fixed-bottom bg-light border-top d-lg-none shadow-lg">
            <div className="container-fluid d-flex justify-content-around text-center">

            {/* Home *
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive
                    ? "text-primary text-decoration-none"
                    : "text-dark text-decoration-none"
            }
            >
                <div>
                    <i className="fa fa-home fs-5"></i>
                    <div style={{ fontSize: "12px" }}>Home</div>
                </div>
            </NavLink>

             {/* Products *
            <NavLink
                to="/products"
                className={({ isActive }) =>
                    isActive
                    ? "text-primary text-decoration-none"
                    : "text-dark text-decoration-none"
            }
            >
                <div>
                    <i className="fa fa-box fs-5"></i>
                    <div style={{ fontSize: "12px" }}>Products</div>
                </div>
            </NavLink>

            {/* Cart *
            <NavLink
                to="/cart"
                className={({ isActive }) =>
                    isActive
                    ? "text-primary text-decoration-none position-relative"
                    : "text-dark text-decoration-none position-relative"
            }
            >
                <div className="position-relative">
                    <i className="fa fa-shopping-cart fs-5"></i>

                    {totalQty > 0 && (
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            style={{ fontSize: "10px" }}
                        >
                            {totalQty}
                        </span>
                    )}

                    <div style={{ fontSize: "12px" }}>Cart</div>
                </div>
            </NavLink>

            {/* About *
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive
                    ? "text-primary text-decoration-none"
                    : "text-dark text-decoration-none"
            }
            >
                <div>
                    <i className="fa fa-info-circle fs-5"></i>
                    <div style={{ fontSize: "12px" }}>About</div>
                </div>
            </NavLink>

            {/* Contact *
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive
                    ? "text-primary text-decoration-none"
                    : "text-dark text-decoration-none"
            }
            >
                <div>
                    <i className="fa fa-phone fs-5"></i>
                    <div style={{ fontSize: "12px" }}>Contact</div>
                </div>
            </NavLink>

            </div>
        </nav>
</>
    );

};

export default Navbar;
*/}