import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const featuredProducts = [
    {
        id: 1,
        name: "THE HUNDRED PERCENT 'TEAR MAGAZINE' BOXY CROP",
        oldPrice: 1100,
        price: 900,
        discount: 15,
        rating: 5,
        category: "T-shirts",
        image: "/images/productpic/t1.png"
    },
    {
        id: 2,
        name: "Degraded V3",
        oldPrice: 1500,
        price: 1200,
        discount: 20,
        rating: 5,
        category: "Pants",
        image: "/images/productpic/p1.png"
    },
    {
        id: 3,
        name: "Camel Crown",
        oldPrice: 3000,
        price: 2500,
        discount: 10,
        rating: 5,
        category: "Shoes",
        image: "/images/productpic/s1.png"
    },
    {
        id: 4,
        name: "Prettiest® 'Y2' HOODIE (SAGE)",
        oldPrice: 2200,
        price: 1800,
        discount: 18,
        rating: 5,
        category: "Hoodiejacket",
        image: "/images/productpic/hj3.png"
    }
];

const Home = () => {
    const { recentlyViewed } = useContext(AppContext);

    return (
        <div>
            {/* ── Hero Carousel ── */}
            <Carousel />

            <div className="container-fluid px-4">
                {/* ── Featured Products ── */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold mb-0">
                        <i className="fas fa-fire text-danger me-2"></i>Featured Products
                    </h4>
                    <Link to="/products" className="btn btn-outline-primary btn-md">
                        View All <i className="fas fa-arrow-right ms-1"></i>
                    </Link>
                </div>

                <div className="row mb-5">
                    {featuredProducts.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 fade-in" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* ── Recently Viewed ── */}
                {recentlyViewed.length > 0 && (
                    <div className="mb-5">
                        <h4 className="fw-bold mb-3">
                            <i className="fas fa-history text-secondary me-2"></i>Recently Viewed
                        </h4>
                        <div className="row">
                            {recentlyViewed.map(product => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 fade-in" key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Store Promise Banner ── */}
                <div className="row g-3 my-4 text-center">
                    {[
                        { icon: "fa-truck", title: "Free Delivery", desc: "On orders over ₱2,000", color: "text-success" },
                        { icon: "fa-undo", title: "Easy Returns", desc: "7-day return policy", color: "text-info" },
                        { icon: "fa-shield-alt", title: "100% Authentic", desc: "Genuine products only", color: "text-warning" },
                        { icon: "fa-headset", title: "24/7 Support", desc: "We're always here", color: "text-primary" },
                    ].map(item => (
                        <div className="col-md-3 col-6" key={item.title}>
                            <div className="promise-card p-3 rounded-3 h-100">
                                <i className={`fas ${item.icon} fa-2x ${item.color} mb-2`}></i>
                                <h6 className="fw-bold mb-1">{item.title}</h6>
                                <small className="text-muted">{item.desc}</small>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Home;



{/*
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: "THE HUNDRED PERCENT 'TEAR MAGAZINE' BOXY CROP",
        oldPrice: 1100,
        price: 900,
        discount: 15,
        rating: 5,
        category: "T-shirt",
        image: "/images/productpic/t1.png"
    },
    {
        id: 2,
        name: "Degraded V3",
        oldPrice: 1500,
        price: 1200,
        discount: 20,
        rating: 5,
        category: "Pant",
        image: "/images/productpic/p1.png"
    },
    {
        id: 3,
        name: "Camel Crown",
        oldPrice: 3000,
        price: 2500,
        discount: 10,
        rating: 5,
        category: "Shoe",
        image: "/images/productpic/s1.png"
    },
    {
         id: 4,
        name: "Prettiest® 'Y2' HOODIE (SAGE)",
        oldPrice: 2200,
        price: 1800,
        discount: 18,
        rating: 5,
        category: "Hoodiejacket",
        image: "/images/productpic/hj3.png"
    }
];

const Home = () => {
    return (
        <div className='container'>
            {/* Banner 
        <img src={banner} className="img-fluid w-100 mb-4" alt="Store Banner" />
        
        <Carousel />

        <div className="d-flex justify-content-between align-items-center mb-3">     
        <h2>Featured Products</h2>
            
        <Link to="/products" className="btn btn-outline-primary">
                View More Products
        </Link>
        </div> 

        <div className="row">
            {products.map((product, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    </div>
    );
};

export default Home;
*/}