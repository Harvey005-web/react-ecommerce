import ProductCard from "../components/ProductCard";
import Sidebar from '../components/Sidebar';

const products = [
    {
        name: "Degraded V3",
        oldPrice: 1500,
        price: 1200,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/p1.png"
    },
    {
        name: "Coziest® 'Bone' Denim Pants",
        oldPrice: 2500,
        price: 2125,
        discount: 15,
        rating: 5,
        image: "/src/assets/images/productpic/p4.png"
    },
    {
        name: "Degraded V1",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/p3.png"
    },
    {
        name: "Degraded V2",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/p2.png"
    },
    {
        name: "Coziest® 'Real Tree' Sweatpants",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/p5.png"
    },
    {
        name: "Coziest® 'Classic' Sweatpants",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/p6.png"
    },
    {
        name: "HIKE PANTS IN WOODLAND CAMO",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/p7.png"
    },
    {
        name: "HGHMNDS ONLINE - EUPHORIA PANTS (BLACK)",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/p8.png"
    },
    {
        name: "HGHMNDS CLO. - THORN ABSTRACT PANTS",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/p9.png"
    }
    
];

const Pants = () => {
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

export default Pants;