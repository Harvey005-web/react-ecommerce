import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { toggleWishlist, isWishlisted, toggleCompare, isInCompare, addToRecentlyViewed } = useContext(AppContext);

    const wishlisted = isWishlisted(product.id);
    const inCompare = isInCompare(product.id);

    return (
        <div className="card h-100 shadow-sm product-card">
            {/* Image wrapper */}
            <div className="product-img-wrapper position-relative">
                {product.discount && (
                    <div className="sale-badge">-{product.discount}%</div>
                )}

                {/* Wishlist button */}
                <button
                    className={`wishlist-btn ${wishlisted ? "active" : ""}`}
                    onClick={() => toggleWishlist(product)}
                    title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                    <i className={`${wishlisted ? "fas" : "far"} fa-heart`}></i>
                </button>

                <Link
                    to={`/product/${product.id}`}
                    onClick={() => addToRecentlyViewed(product)}
                >
                    <img
                        src={product.image}
                        className="card-img-top product-img"
                        alt={product.name}
                    />
                </Link>
            </div>

            <div className="card-body d-flex flex-column">
                <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none text-body"
                    onClick={() => addToRecentlyViewed(product)}
                >
                    <h6 className="card-title">{product.name}</h6>
                </Link>

                {/* Star rating */}
                <div className="mb-2 text-warning">
                    {[...Array(5)].map((_, index) => (
                        <i key={index} className={`fa-star ${index < product.rating ? "fas" : "far"} fa`}></i>
                    ))}
                </div>

                {/* Price */}
                <div className="mb-2">
                    <span className="text-muted text-decoration-line-through me-2">
                        ₱{product.oldPrice?.toLocaleString()}
                    </span>
                    <span className="fw-bold text-danger">
                        ₱{product.price?.toLocaleString()}
                    </span>
                </div>

                {/* Add to Cart */}
                <button
                    className="btn btn-primary mt-auto mb-2"
                    onClick={() => addToCart(product)}
                >
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                </button>

                {/* Compare toggle */}
                <button
                    className={`btn btn-sm ${inCompare ? "btn-warning" : "btn-outline-secondary"}`}
                    onClick={() => toggleCompare(product)}
                >
                    <i className="fas fa-balance-scale me-1"></i>
                    {inCompare ? "Remove Compare" : "Compare"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

{/** 
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
    //Get addToCart from global context
    const { addToCart } = useContext(CartContext);

    return (
        <div className="card h-100 shadow-sm">
            {/* Image wrapper for zoom and badge *
            <div className="product-img-wrapper">
                {/*Sale badge *
                {product.discount && (
                    <div className="sale-badge">-{product.discount}%</div>
                )}

            <img 
                src={product.image}
                className="card-img-top product-img"
                alt={product.name}
                />
            </div>
        
        <div className="card-body d-flex flex-column">
            <h6 className="card-title">{product.name}</h6>
            
            {/* Star rating *
            <div className="mb-2 text-warning">
                {[...Array(5)].map((star, index) => (
                    <i key={index} className={`fa-star ${index < product.rating ? 'fas' : 'far'} fa`}></i>
                ))}
            </div>
            
            {/*Price section *
            <div className="mb-2">
                <span className="text-muted text-decoration-line-through me-2">
                    ₱{product.oldPrice}
                </span> 
                <span className="fw-bold text-danger">
                    ₱{product.price}
                </span>
            </div>

            {/* When clicked, send this product to App.jsx *
            <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
            <i className="fas fa-shopping-cart me-2"></i>
                Add to Cart
            </button>

        </div>
    </div>
    );
};

export default ProductCard;
*/}