import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const WishlistPage = () => {
    const { wishlist } = useContext(AppContext);

    return (
        <div className="container my-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="fw-bold mb-0">
                    <i className="fas fa-heart text-danger me-2"></i>My Wishlist
                </h2>
                <span className="badge bg-danger fs-6">{wishlist.length} item{wishlist.length !== 1 ? "s" : ""}</span>
            </div>

            {wishlist.length === 0 ? (
                <div className="text-center py-5">
                    <i className="far fa-heart fa-4x text-muted mb-3"></i>
                    <h5 className="text-muted">Your wishlist is empty</h5>
                    <p className="text-muted">Browse products and click the heart icon to save items you love.</p>
                    <Link to="/products" className="btn btn-primary mt-2">
                        <i className="fas fa-shopping-bag me-2"></i>Browse Products
                    </Link>
                </div>
            ) : (
                <div className="row">
                    {wishlist.map(product => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 fade-in" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;
