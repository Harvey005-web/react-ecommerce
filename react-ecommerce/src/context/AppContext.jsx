import { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    // ── Dark Mode ──────────────────────────────────────────────
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            localStorage.setItem("darkMode", !prev);
            return !prev;
        });
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
        //document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    // ── Wishlist ───────────────────────────────────────────────
    const [wishlist, setWishlist] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("wishlist")) || [];
        } catch { return []; }
    });

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(p => p.id === product.id);
            const updated = exists
                ? prev.filter(p => p.id !== product.id)
                : [...prev, product];
            localStorage.setItem("wishlist", JSON.stringify(updated));
            return updated;
        });
    };

    const isWishlisted = (id) => wishlist.some(p => p.id === id);

    // ── Recently Viewed ────────────────────────────────────────
    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        } catch { return []; }
    });

    const addToRecentlyViewed = (product) => {
        setRecentlyViewed(prev => {
            const filtered = prev.filter(p => p.id !== product.id);
            const updated = [product, ...filtered].slice(0, 6);
            localStorage.setItem("recentlyViewed", JSON.stringify(updated));
            return updated;
        });
    };

    // ── Comparison ─────────────────────────────────────────────
    const [compareList, setCompareList] = useState([]);

    const toggleCompare = (product) => {
        setCompareList(prev => {
            const exists = prev.find(p => p.id === product.id);
            if (exists) return prev.filter(p => p.id !== product.id);
            if (prev.length >= 3) {
                alert("You can compare up to 3 products only.");
                return prev;
            }
            return [...prev, product];
        });
    };

    const isInCompare = (id) => compareList.some(p => p.id === id);
    const clearCompare = () => {
    const confirmed = window.confirm("Are you sure you want to remove all items?");
     if (confirmed) {
        setCompareList([]);
    }
    };


    return (
        <AppContext.Provider value={{
            darkMode, toggleDarkMode,
            wishlist, toggleWishlist, isWishlisted,
            recentlyViewed, addToRecentlyViewed,
            compareList, toggleCompare, isInCompare, clearCompare
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
