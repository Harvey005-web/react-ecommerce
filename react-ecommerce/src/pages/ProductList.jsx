import { useEffect, useState, useRef, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";
import Sidebar from "../components/Sidebar";
import { AppContext } from "../context/AppContext";

const ITEMS_PER_PAGE = 8;

const ProductList = () => {
    const { category } = useParams();
    const { recentlyViewed } = useContext(AppContext);

    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Search, filter, sort
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("default");

    // Plain strings so the user can type freely without React clamping the value
    const [minInput, setMinInput] = useState("");
    const [maxInput, setMaxInput] = useState("");
    const [maxPrice, setMaxPrice] = useState(99999);

    // Infinite scroll
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [loadingMore, setLoadingMore] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        setVisibleCount(ITEMS_PER_PAGE);
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                const prices = data.map(p => p.price);
                const max = Math.max(...prices, 99999);
                setMaxPrice(max);
                setLoading(false);
            })
            .catch((error) => {
                console.error("API Fetch Error:", error);
                setLoading(false);
            });
    }, []);

    // Reset visible count whenever filters change
    useEffect(() => {
        setVisibleCount(ITEMS_PER_PAGE);
    }, [searchQuery, sortOption, minInput, maxInput, category]);

    // Reset all filters to defaults
    const resetFilters = () => {
        setSearchQuery("");
        setSortOption("default");
        setMinInput("");
        setMaxInput("");
    };

    const hasActiveFilters =
        searchQuery !== "" ||
        sortOption !== "default" ||
        minInput !== "" ||
        maxInput !== "";

    // Derive numeric limits — empty string = no limit applied
    const priceMin = minInput === "" ? 0 : Number(minInput);
    const priceMax = maxInput === "" ? Infinity : Number(maxInput);

    // Build filtered + sorted list
    const processedProducts = (() => {
        let list = category
            ? allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
            : allProducts;

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            list = list.filter(p =>
                p.name.toLowerCase().includes(q) ||
                (p.category && p.category.toLowerCase().includes(q))
            );
        }

        list = list.filter(p => p.price >= priceMin && p.price <= priceMax);

        switch (sortOption) {
            case "price-asc":   list = [...list].sort((a, b) => a.price - b.price); break;
            case "price-desc":  list = [...list].sort((a, b) => b.price - a.price); break;
            case "name-asc":    list = [...list].sort((a, b) => a.name.localeCompare(b.name)); break;
            case "rating-desc": list = [...list].sort((a, b) => b.rating - a.rating); break;
            default: break;
        }

        return list;
    })();

    const visibleProducts = processedProducts.slice(0, visibleCount);
    const hasMore = visibleCount < processedProducts.length;

    // Infinite scroll sentinel
    const sentinelRef = useCallback(node => {
        if (observerRef.current) observerRef.current.disconnect();
        observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setLoadingMore(true);
                setTimeout(() => {
                    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
                    setLoadingMore(false);
                }, 600);
            }
        });
        if (node) observerRef.current.observe(node);
    }, [hasMore]);

    const pageTitle = category
        ? category.charAt(0).toUpperCase() + category.slice(1)
        : "All Products";

    return (
        <div className="container-fluid px-0">
            <div className="row g-0">

                {/* Sidebar */}
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar />
                </div>

                {/* Main content */}
                <div className="col-lg-10 col-md-9 px-3">

                    {/* ── Toolbar ── */}
                    <div className="product-toolbar mb-4 p-3 rounded">
                        <div className="row gy-2 align-items-end">

                            {/* Search */}
                            <div className="col-lg-4 col-md-5">
                                <label className="form-label small fw-semibold mb-1">
                                    <i className="fas fa-search me-1"></i>Search Products
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name or category..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Sort */}
                            <div className="col-lg-3 col-md-4">
                                <label className="form-label small fw-semibold mb-1">
                                    <i className="fas fa-sort me-1"></i>Sort By
                                </label>
                                <select
                                    className="form-select"
                                    value={sortOption}
                                    onChange={e => setSortOption(e.target.value)}
                                >
                                    <option value="default">Default</option>
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                                    <option value="name-asc">Name: A to Z</option>
                                    <option value="rating-desc">Highest Rated</option>
                                </select>
                            </div>

                            {/* Price Range — free-type inputs, no clamping */}
                            <div className="col-lg-4 col-md-10">
                                <label className="form-label small fw-semibold mb-1">
                                    <i className="fas fa-filter me-1"></i>Price Range
                                </label>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">₱ Min</span>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="0"
                                            value={minInput}
                                            onChange={e => setMinInput(e.target.value)}
                                        />
                                    </div>
                                    <span className="text-muted fw-bold flex-shrink-0">—</span>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">₱ Max</span>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Any"
                                            value={maxInput}
                                            onChange={e => setMaxInput(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Reset Button */}
                            <div className="col-lg-1 col-md-2 d-flex align-items-end">
                                <button
                                    className="btn btn-outline-danger btn-sm w-100"
                                    onClick={resetFilters}
                                    disabled={!hasActiveFilters}
                                    title="Reset all filters"
                                >
                                    <i className="fas fa-rotate-left me-1"></i>Reset
                                </button>
                            </div>

                        </div>

                        {/* Result count + active filter tags */}
                        <div className="mt-2 d-flex flex-wrap align-items-center gap-2">
                            <span className="small text-muted">
                                Showing {Math.min(visibleCount, processedProducts.length)} of {processedProducts.length} products
                            </span>
                            {searchQuery && (
                                <span className="badge bg-primary d-flex align-items-center gap-1">
                                    Search: "{searchQuery}"
                                    <button
                                        className="btn-close btn-close-white"
                                        style={{ fontSize: "8px" }}
                                        onClick={() => setSearchQuery("")}
                                    ></button>
                                </span>
                            )}
                            {sortOption !== "default" && (
                                <span className="badge bg-secondary d-flex align-items-center gap-1">
                                    Sort: {sortOption}
                                    <button
                                        className="btn-close btn-close-white"
                                        style={{ fontSize: "8px" }}
                                        onClick={() => setSortOption("default")}
                                    ></button>
                                </span>
                            )}
                            {(minInput !== "" || maxInput !== "") && (
                                <span className="badge bg-success d-flex align-items-center gap-1">
                                    ₱{minInput || "0"} – ₱{maxInput || "Any"}
                                    <button
                                        className="btn-close btn-close-white"
                                        style={{ fontSize: "8px" }}
                                        onClick={() => { setMinInput(""); setMaxInput(""); }}
                                    ></button>
                                </span>
                            )}
                        </div>
                    </div>

                    <h4 className="mb-3 fw-bold">{pageTitle}</h4>

                    {/* ── Skeleton Loading ── */}
                    {loading && (
                        <div className="row">
                            {[...Array(8)].map((_, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
                                    <SkeletonCard />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ── Products Grid ── */}
                    {!loading && (
                        <>
                            {processedProducts.length === 0 ? (
                                <div className="text-center py-5">
                                    <i className="fas fa-search fa-3x text-muted mb-3"></i>
                                    <h5 className="text-muted">No products found</h5>
                                    <p className="text-muted">Try a different search term or filter.</p>
                                    {hasActiveFilters && (
                                        <button className="btn btn-outline-danger mt-2" onClick={resetFilters}>
                                            <i className="fas fa-rotate-left me-2"></i>Reset Filters
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div className="row">
                                    {visibleProducts.map(product => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 fade-in" key={product.id}>
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Skeleton for loading more */}
                            {loadingMore && (
                                <div className="row">
                                    {[...Array(4)].map((_, i) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={`more-${i}`}>
                                            <SkeletonCard />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Infinite scroll sentinel */}
                            {hasMore && <div ref={sentinelRef} style={{ height: "1px" }}></div>}

                            {!hasMore && processedProducts.length > 0 && (
                                <p className="text-center text-muted py-4">
                                    <i className="fas fa-check-circle me-2"></i>
                                    You've seen all {processedProducts.length} products!
                                </p>
                            )}
                        </>
                    )}

                    {/* ── Recently Viewed ── */}
                    {recentlyViewed.length > 0 && !loading && (
                        <div className="mt-5">
                            <h5 className="fw-bold mb-3">
                                <i className="fas fa-history me-2"></i>Recently Viewed
                            </h5>
                            <div className="row">
                                {recentlyViewed.map(product => (
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3" key={product.id}>
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProductList;
{/** 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //new
import ProductCard from "../components/ProductCard";
import Sidebar from '../components/Sidebar';

/*
const products = [
    {
        name: "THE HUNDRED PERCENT 'TEAR MAGAZINE' BOXY CROP",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/t1.png"
    },
    {
        name: "MSTR CO. - SECTION COLLECTION 'FUTURE' T-Shirt",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/t2.png"
    },
    {
        name: "Camel Crown",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/s1.png"
    },
    {
        name: "Prettiest® 'Y2' HOODIE (SAGE)",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/hj3.png"
    },
    {
        name: "MSTR Co. Kutsu",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/s6.png"
    },
    {
        name: "Degraded V2",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/p2.png"
    },
    {
        name: "DEGRADED 'DG's BASIC COLORS'",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/t6.png"
    },
    {
        name: "Camel Crescent Dexter",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/s3.png"
    },
    {
        name: "Tribal Men Tshirt Roundneck (Trucker/Regular Fit)",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/t3.png"
    },
    {
        name: "CLASSIC ZIP HOODIE IN IRON PAISLEY",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/hj1.png"
    },
    {
        name: "Degraded V1",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/p3.png"
    },
    {
        name: "HGHMNDS CLO. - THORN ABSTRACT PANTS",
        oldPrice: 2000,
        price: 1499,
        discount: 15,
        rating: 4,
        image: "/src/assets/images/productpic/p9.png"
    },
    {
        name: "Degraded V3",
        oldPrice: 1000,
        price: 799,
        discount: 10,
        rating: 5,
        image: "/src/assets/images/productpic/p1.png"
    },
    {
        name: "New Balance 1906L",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/s2.png"
    },
    {
        name: "'FLOW' BOMBER JACKET IN WOODLAND CAMO",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/hj4.png"
    },
    {
        name: "HGHMNDS ONLINE - SURF TURF SHIRT",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/t4.png"
    }
];
*

const ProductList = () => {

    const { category } = useParams(); // 👈 new

    const [allProducts, setAllProducts] = useState([]); // 👈 new

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("http://localhost:5000/api/products")
        .then((res) => res.json())
        .then((data) => {
            setAllProducts(data); // 👈 change from setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("API Fetch Error:", error);
            setLoading(false);
        });
    }, []);

     // 👇 Filter by category from URL, or show all if no category selected
    const filteredProducts = category
        ? allProducts.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
          )
        : allProducts;
    // ------------------------------------------------ 

    if (loading) {
        return <h3 className="text-center">Loading products...</h3>;
    }


    return (
        <div className="container">
            <div className="row">

            {/* Sidebar *
            <div className="col-lg-2 col-md-3 mb-4">
                <Sidebar />
            </div>

            {/* Products *
            <div className="col-lg-10 col-md-9">
                <h2 className="mb-3">
                    {category ? category.charAt(0).toUpperCase() + category.slice(1) : "All Products"}</h2> {/* 👈 dynamic title *

                <div className="row">
                   {filteredProducts.length === 0 ? (
                            <p>No products found.</p>  // 👈 handles empty results
                        ) : (
                            filteredProducts.map((product) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))
                        )}
                </div>
            </div>
        </div>
    </div>

    );
};

export default ProductList;
*/}