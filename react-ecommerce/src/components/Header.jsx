import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext);

    return (
        <header className="custom-header">
            <div className="header-inner container-fluid px-4 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    {/* Logo mark */}
                    <div className="header-logo-mark">
                        <i className="fa-brands fa-gripfire"></i>
                    </div>
                    <div>
                        <h1 className="store-title mb-0">AURA DISTRICT</h1>
                        <p className="store-subtitle mb-0">Premium Street &amp; Lifestyle Clothing</p>
                    </div>
                </div>

                {/* Dark mode toggle */}
                <button
                    className="dark-mode-toggle"
                    onClick={toggleDarkMode}
                    title="Toggle dark mode"
                    aria-label="Toggle dark mode"
                >
                    <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
                    <span className="ms-2 d-none d-md-inline">
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;












{/** 
const Header = () => {
    return (
        <header className="bg-dark text-white p-3 text-center custom-header">
            <h1 className="store-title">My E-Commerce Store</h1>
            <p className="store-subtitle">Find the best products here!</p>
        </header>
    );
};
export default Header;
*/}