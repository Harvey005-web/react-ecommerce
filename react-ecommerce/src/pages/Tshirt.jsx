import ProductCard from "../components/ProductCard";
import Sidebar from '../components/Sidebar';

const products = [
    {
        name: "THE HUNDRED PERCENT 'TEAR MAGAZINE' BOXY CROP",
        oldPrice: 1100,
        price: 900,
        discount: 15,
        rating: 5,
        image: "/src/assets/images/productpic/t1.png"
    },
    {
        name: "MSTR CO. - SECTION COLLECTION 'FUTURE' T-Shirt",
        oldPrice: 1000,
        price: 850,
        discount: 15,
        rating: 5,
        image: "/src/assets/images/productpic/t2.png"
    },
    {
        name: "Tribal Men Tshirt Roundneck (Trucker/Regular Fit)",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/t3.png"
    },
    {
        name: "HGHMNDS ONLINE - SURF TURF SHIRT",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/t4.png"
    },
    {
        name: "Dwnby Script Society street pulse collection",
        oldPrice: 2000,
        price: 1399,
        discount: 30,
        rating: 5,
        image: "/src/assets/images/productpic/t5.png"
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
        name: "'FADED CAVIAR' MOCK NECK TEE",
        oldPrice: 2000,
        price: 1499,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/productpic/t7.png"
    },
    {
        name: "Prettiest® 'MOTOSPORT' CLASSIC TEE",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/t8.png"
    },
    {
        name: "Coziest® 'Butterfly' Box Tee",
        oldPrice: 1000,
        price: 799,
        discount: 20,
        rating: 5,
        image: "/src/assets/images/productpic/t9.png"
    }
    
];

const Tshirt = () => {
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

export default Tshirt;