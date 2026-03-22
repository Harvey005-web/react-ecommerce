import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/categories")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch categories");
                return res.json();
            })
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const linkClass = ({ isActive }) =>
        `list-group-item list-group-item-action border-1 ${
            isActive ? "bg-primary text-white fw-semibold" : "bg-light text-dark"
        }`;

    return (
        <aside className="bg-light p-3">
            <h5>Categories</h5>
            <div className="list-group list-group-flush">

                {loading && <p>Loading categories...</p>}
                {error && <p className="text-danger">Error: {error}</p>}

                {!loading && !error && categories.map((category) => (
                    <NavLink
                        key={category}
                        to={`/${category.toLowerCase()}`}
                        className={linkClass}
                    >
                        {category}
                    </NavLink>
                ))}

            </div>
        </aside>
    );
};

export default Sidebar;


                