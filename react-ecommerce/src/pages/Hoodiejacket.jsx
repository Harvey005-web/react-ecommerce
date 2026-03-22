import ProductCard from "../components/ProductCard";
import Sidebar from '../components/Sidebar';

const products = [
    {
        name: "Prettiest® 'Y2' HOODIE (SAGE)",
        oldPrice: 2200,
        price: 1800,
        discount: 18,
        rating: 5,
        image: "/src/assets/images/productpic/hj3.png"
    },
    {
        name: "CLASSIC ZIP HOODIE IN IRON PAISLEY",
        oldPrice: 2800,
        price: 2100,
        discount: 25,
        rating: 5,
        image: "/src/assets/images/productpic/hj1.png"
    },
    {
        name: "Double Zip Crop Plain Hoodie",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/hj2.png"
    },
    {
        name: "'FLOW'BOMBER JACKET IN WOODLAND CAMO",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/hj4.png"
    },
    {
        name: "Krown Manila Zip Up Hoodie",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/hj5.png"
    },
    {
        name: "Prettiest® DENIM JACKET (BLUE)",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/hj6.png"
    },
    {
        name: "Varsity Jacket",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/hj7.png"
    },
    {
        name: "RED MEDIEVAL WEAR CONFIDENCE HOODIE POLAR FLEECE",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/hj8.png"
    },
    {
        name: "SOURCE WORLDWIDE ICON PULLOVER HOODIE",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/hj9.png"
    }
    
];

const Hoodiejacket = () => {
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

export default Hoodiejacket;