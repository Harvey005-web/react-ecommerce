import ProductCard from "../components/ProductCard";
import Sidebar from '../components/Sidebar';

const products = [
    {
        name: "New Era New York Yankees Contrast OTC Strap Back Cap",
        oldPrice: 2400,
        price: 2112,
        discount: 12,
        rating: 5,
        image: "/src/assets/images/productpic/h1.png"
    },
    {
        name: "New York Yankees Authentic On-Field 59Fifty Navy Fitted",
        oldPrice: 2900,
        price: 2465,
        discount: 15,
        rating: 5,
        image: "/src/assets/images/productpic/h2.png"
    },
    {
        name: "Cana Reversible Bucket Hat",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/h3.png"
    },
    {
        name: "Carhartt Rib Knit Cuffed Beanie",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/h4.png"
    },
    {
        name: "All Terrain Camp Hat",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/h5.png"
    },
    {
        name: "Lacoste Wool Black Flat Cap'",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/h6.png"
    },
    {
        name: "Kangol Cotton Twill Army Cap Black Flexfit",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/h7.png"
    },
    {
        name: "Capslab Chupa Chups Red/White/Blue A-Frame Trucker",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/h8.png"
    },
    {
        name: "Stetson Cotton Olive Docker",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/h9.png"
    }
    
];

const Headwear = () => {
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

export default Headwear;