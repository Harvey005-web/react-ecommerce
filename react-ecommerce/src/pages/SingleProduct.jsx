import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AppContext } from "../context/AppContext";

const SingleProduct = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const { toggleWishlist, isWishlisted, addToRecentlyViewed, recentlyViewed } = useContext(AppContext);

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [added, setAdded] = useState(false);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch(`https://ecommerce-backend-l573.onrender.com/api/products`)
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => String(p.id) === String(id));
                setProduct(found || null);
                if (found) addToRecentlyViewed(found);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    const handleAddToCart = () => {
        for (let i = 0; i < qty; i++) addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    if (loading) return (
        <div className="container my-5 text-center">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3">Loading product...</p>
        </div>
    );

    if (!product) return (
        <div className="container my-5 text-center">
            <i className="fas fa-exclamation-circle fa-3x text-muted mb-3"></i>
            <h4>Product not found</h4>
            <Link to="/products" className="btn btn-primary mt-3">Back to Products</Link>
        </div>
    );

    const wishlisted = isWishlisted(product.id);
    const otherRecent = recentlyViewed.filter(p => p.id !== product.id);

    return (
        <div className="container my-4">

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                    <li className="breadcrumb-item">
                        <Link to={`/${product.category?.toLowerCase()}`}>{product.category}</Link>
                    </li>
                    <li className="breadcrumb-item active">{product.name}</li>
                </ol>
            </nav>

            <div className="row g-4">
                {/* Image */}
                <div className="col-md-5">
                    <div className="single-product-img-wrapper rounded overflow-hidden">
                        {product.discount && (
                            <div className="sale-badge">-{product.discount}%</div>
                        )}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid w-100 single-product-img"
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="col-md-7">
                    <span className="badge bg-secondary mb-2">{product.category}</span>
                    <h2 className="fw-bold mb-2">{product.name}</h2>

                    {/* Stars */}
                    <div className="text-warning mb-3">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fa-star ${i < product.rating ? "fas" : "far"} fa me-1`}></i>
                        ))}
                        <span className="text-muted ms-1">({product.rating}/5)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <span className="text-muted text-decoration-line-through me-3 fs-5">
                            ₱{product.oldPrice?.toLocaleString()}
                        </span>
                        <span className="fw-bold text-danger fs-3">
                            ₱{product.price?.toLocaleString()}
                        </span>
                        {product.discount && (
                            <span className="badge bg-danger ms-2">Save {product.discount}%</span>
                        )}
                    </div>

                    {/* Qty selector */}
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <label className="fw-semibold">Quantity:</label>
                        <div className="input-group" style={{ width: "130px" }}>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => setQty(q => Math.max(1, q - 1))}
                            >-</button>
                            <input
                                type="number"
                                className="form-control text-center"
                                value={qty}
                                onChange={e => setQty(Math.max(1, Number(e.target.value)))}
                                min={1}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => setQty(q => q + 1)}
                            >+</button>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="d-flex gap-2 flex-wrap">
                        <button
                            className={`btn btn-lg ${added ? "btn-success" : "btn-primary"}`}
                            onClick={handleAddToCart}
                        >
                            <i className={`fas ${added ? "fa-check" : "fa-shopping-cart"} me-2`}></i>
                            {added ? "Added!" : "Add to Cart"}
                        </button>

                        <button
                            className={`btn btn-lg ${wishlisted ? "btn-danger" : "btn-outline-danger"}`}
                            onClick={() => toggleWishlist(product)}
                        >
                            <i className={`${wishlisted ? "fas" : "far"} fa-heart me-2`}></i>
                            {wishlisted ? "Wishlisted" : "Wishlist"}
                        </button>

                        <Link to="/products" className="btn btn-lg btn-outline-secondary">
                            <i className="fas fa-arrow-left me-2"></i>Back
                        </Link>
                    </div>

                    {/* Product details info */}
                    <div className="mt-4 p-3 rounded single-product-details">
                        <div className="row g-2 small">
                            <div className="col-6">
                                <i className="fas fa-truck me-2 text-success"></i>Free delivery over ₱2,000
                            </div>
                            <div className="col-6">
                                <i className="fas fa-undo me-2 text-info"></i>7-day easy returns
                            </div>
                            <div className="col-6">
                                <i className="fas fa-shield-alt me-2 text-warning"></i>Authentic products only
                            </div>
                            <div className="col-6">
                                <i className="fas fa-store me-2 text-primary"></i>Ships from Manila
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recently Viewed */}
            {otherRecent.length > 0 && (
                <div className="mt-5">
                    <h5 className="fw-bold mb-3">
                        <i className="fas fa-history me-2"></i>Recently Viewed
                    </h5>
                    <div className="row">
                        {otherRecent.slice(0, 4).map(p => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={p.id}>
                                <Link
                                    to={`/product/${p.id}`}
                                    className="text-decoration-none"
                                    onClick={() => addToRecentlyViewed(p)}
                                >
                                    <div className="card h-100 shadow-sm recent-card">
                                        <img
                                            src={p.image}
                                            className="card-img-top"
                                            alt={p.name}
                                            style={{ height: "160px", objectFit: "cover" }}
                                        />
                                        <div className="card-body py-2">
                                            <p className="small fw-semibold mb-1 text-body">{p.name}</p>
                                            <span className="text-danger fw-bold small">₱{p.price?.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleProduct;
