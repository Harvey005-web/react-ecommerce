import ProductCard from "../components/ProductCard";
import Sidebar from '../components/Sidebar';

const products = [
    {
        name: "Apple Watch Series 10",
        oldPrice: 10000,
        price: 8000,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/a1.png"
    },
    {
        name: "Casio Analog Steel Date 38mm Stainless Steel Band",
        oldPrice: 3000,
        price: 2700,
        discount: 10,
        rating: 5,
        image: "/src/assets/images/productpic/a2.png"
    },
    {
        name: "Chrome Hearts Cross Bracelet",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/a3.png"
    },
    {
        name: "Lucca Sunglass",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/a4.png"
    },
    {
        name: "Chrome Hearts cross ball-chain pendant",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/a5.png"
    },
    {
        name: "LUCCE DIANA™ Earrings Round Diamond",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/a6.png"
    },
    {
        name: "KENBO Y2K Sunglasses Wrap Around Futuristic Sunglasses",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/a7.png"
    },
    {
        name: "Chrome Hearts Foti Harris pendant necklace",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/a8.png"
    },
    {
        name: "Lacoste Metropole Bracelet",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/a9.png"
    }
    
];

const Accessories = () => {
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

export default Accessories;