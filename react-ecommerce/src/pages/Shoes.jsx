import ProductCard from "../components/ProductCard";
import Sidebar from '../components/Sidebar';

const products = [
    {
        name: "Camel Crown",
        oldPrice: 3000,
        price: 2500,
        discount: 10,
        rating: 5,
        image: "/src/assets/images/productpic/s1.png"
    },
    {
        name: "New Balance 1906L",
        oldPrice: 2000,
        price: 1800,
        discount: 10,
        rating: 5,
        image: "/src/assets/images/productpic/s2.png"
    },
    {
        name: "Camel Crescent Dexter",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/s3.png"
    },
    {
        name: "Nike Air Max 95",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/s4.png"
    },
    {
        name: "BOLIII vintage cowhide",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/s5.png"
    },
    {
        name: "MSTR Co. Kutsu",
        oldPrice: 2000,
        price: 1800,
        discount: 10,
        rating: 5,
        image: "/src/assets/images/productpic/s6.png"
    },
    {
        name: "SABA Titan PRO Ice",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/s7.png"
    },
    {
        name: "SABA Cookie Zenix",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/s8.png"
    },
    {
        name: "Adidas Yeezy Boost 350 V2",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/s9.png"
    }
    
];

const Shoes = () => {
    return (
        <div className="container">
            <div className="row">

            {/* Sidebar */}
            <div className="col-lg-2 col-md-3 mb-4">
                <Sidebar />
            </div>

            {/* Products */}
            <div className="col-lg-10 col-md-9">
                <h2 className="mb-3">T-shirts</h2>

                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

    );
};

export default Shoes;