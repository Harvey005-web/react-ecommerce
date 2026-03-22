import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ComparisonPage = () => {
    const { compareList, toggleCompare, clearCompare } = useContext(AppContext);
    const { addToCart } = useContext(CartContext);

    const fields = [
        { label: "Image",     render: p => <img src={p.image} alt={p.name} className="img-fluid compare-img rounded" /> },
        { label: "Name",      render: p => <strong>{p.name}</strong> },
        { label: "Category",  render: p => <span className="badge bg-secondary">{p.category}</span> },
        { label: "Price",     render: p => <span className="fw-bold text-danger">₱{p.price?.toLocaleString()}</span> },
        { label: "Old Price", render: p => <span className="text-muted text-decoration-line-through">₱{p.oldPrice?.toLocaleString()}</span> },
        { label: "Discount",  render: p => p.discount ? <span className="badge bg-danger">-{p.discount}%</span> : "—" },
        { label: "Rating",    render: p => (
            <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fa-star ${i < p.rating ? "fas" : "far"} fa`}></i>
                ))}
                <span className="text-muted ms-1">({p.rating}/5)</span>
            </div>
        )},
        { label: "Action",    render: p => (
            <button className="btn btn-primary btn-sm w-100" onClick={() => addToCart(p)}>
                <i className="fas fa-cart-plus me-1"></i> Add to Cart
            </button>
        )},
        { label: "Remove",    render: p => (
            <button className="btn btn-outline-danger btn-sm w-100" onClick={() => toggleCompare(p)}>
                <i className="fas fa-times me-1"></i> Remove
            </button>
        )},
    ];

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold mb-0">
                    <i className="fas fa-balance-scale me-2"></i>Compare Products
                </h2>
                {compareList.length > 0 && (
                    <button className="btn btn-outline-secondary btn-sm" onClick={clearCompare}>
                        <i className="fas fa-trash me-1"></i> Clear All
                    </button>
                )}
            </div>

            {compareList.length === 0 ? (
                <div className="text-center py-5">
                    <i className="fas fa-balance-scale fa-4x text-muted mb-3"></i>
                    <h5 className="text-muted">No products to compare</h5>
                    <p className="text-muted">Go to products and click "Compare" on up to 3 items.</p>
                    <Link to="/products" className="btn btn-primary mt-2">
                        <i className="fas fa-shopping-bag me-2"></i>Browse Products
                    </Link>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered compare-table text-center align-middle">
                        <tbody>
                            {fields.map(field => (
                                <tr key={field.label}>
                                    <th className="compare-label bg-light text-start ps-3" style={{ width: "140px" }}>
                                        {field.label}
                                    </th>
                                    {compareList.map(product => (
                                        <td key={product.id} style={{ minWidth: "200px" }}>
                                            {field.render(product)}
                                        </td>
                                    ))}
                                    {/* Empty cells if fewer than 3 */}
                                    {[...Array(3 - compareList.length)].map((_, i) => (
                                        <td key={`empty-${i}`} className="text-muted compare-empty">
                                            {field.label === "Image" && (
                                                <div className="compare-empty-slot">
                                                    <Link to="/products" className="fas fa-plus-circle fa-2x text-muted"></Link>
                                                    <div className="small mt-2">Add product</div>
                                                </div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ComparisonPage;
