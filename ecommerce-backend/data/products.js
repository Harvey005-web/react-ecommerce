
const products = [
    {
        id: 1,
        name: "THE HUNDRED PERCENT 'TEAR MAGAZINE' BOXY CROP",
        oldPrice: 1100,
        price: 900,
        discount: 15,
        rating: 5,
        category: "T-shirts",
        image: "../images/productpic/t1.png"
    },
    {
        id: 2,
        name: "Degraded V3",
        oldPrice: 1500,
        price: 1200,
        discount: 20,
        rating: 5,
        category: "Pants",
        image: "../images/productpic/p1.png"
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
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj3.png"
    },
    {
        id: 5,
        name: "New Balance 1906L",
        oldPrice: 2000,
        price: 1800,
        discount: 10,
        rating: 5,
        category: "Shoes",
        image: "/images/productpic/s2.png"
    },
    {
        id: 6,
        name: "Coziest® 'Bone' Denim Pants",
        oldPrice: 2500,
        price: 2125,
        discount: 15,
        rating: 5,
        category: "Pants",
        image: "/images/productpic/p4.png"
    },
    {
        id: 7,
        name: "MSTR CO. - SECTION COLLECTION 'FUTURE' T-Shirt",
        oldPrice: 1000,
        price: 850,
        discount: 15,
        rating: 5,
        category: "T-shirts",
        image: "/images/productpic/t2.png"
    },
    {
        id: 8,
        name: "Casio Analog Steel Date 38mm Stainless Steel Band",
        oldPrice: 3000,
        price: 2700,
        discount: 10,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a2.png"
    },
    {
        id: 9,
        name: "New Era New York Yankees Contrast OTC Strap Back Cap",
        oldPrice: 2400,
        price: 2112,
        discount: 12,
        rating: 5,
        category: "Headwears",
        image: "/images/productpic/h1.png"
    },
    {
        id: 10,
        name: "CLASSIC ZIP HOODIE IN IRON PAISLEY",
        oldPrice: 2800,
        price: 2100,
        discount: 25,
        rating: 5,
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj1.png"
    },
    {
        id: 11,
        name: "Apple Watch Series 10",
        oldPrice: 10000,
        price: 8000,
        discount: 20,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a1.png"
    },
    {
        id: 12,
        name: "New York Yankees Authentic On-Field 59Fifty Navy Fitted",
        oldPrice: 2900,
        price: 2465,
        discount: 15,
        rating: 5,
        category: "Headwears",
        image: "/images/productpic/h2.png"
    },
    {
        id: 13,
        name: "Tribal Men Tshirt Roundneck (Trucker/Regular Fit)",
        oldPrice: 0,
        price: 950,
        rating: 4,
        category: "T-shirts",
        image: "/images/productpic/t3.png"
    },
    {
        id: 14,
        name: "Camel Crescent Dexter",
        oldPrice: 0,
        price: 1699,
        rating: 5,
        category: "Shoes",
        image: "/images/productpic/s3.png"
    },
    {
        id: 15,
        name: "Double Zip Crop Plain Hoodie",
        oldPrice: 0,
        price: 2499,
        rating: 5,
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj2.png"
    },
    {
        id: 16,
        name: "Degraded V1",
        oldPrice: 0,
        price: 1999,
        rating: 4,
        category: "Pants",
        image: "/images/productpic/p3.png"
    },
    {
        id: 17,
        name: "Chrome Hearts Cross Bracelet",
        oldPrice: 0,
        price: 15799,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a3.png"
    },
    {
        id: 18,
        name: "Cana Reversible Bucket Hat",
        oldPrice: 0,
        price: 3290,
        rating: 4,
        category: "Headwears",
        image: "/images/productpic/h3.png"
    },
    {
        id: 19,
        name: "HGHMNDS ONLINE - SURF TURF SHIRT",
        oldPrice: 0,
        price: 899,
        rating: 4,
        category: "T-shirts",
        image: "/images/productpic/t4.png"
    },
    {
        id: 20,
        name: "Nike Air Max 95",
        oldPrice: 0,
        price: 4399,
        rating: 5,
        category: "Shoes",
        image: "/images/productpic/s4.png"
    },
    {
        id: 21,
        name: "Degraded V2",
        oldPrice: 0,
        price: 2199,
        rating: 5,
        category: "Pants",
        image: "/images/productpic/p2.png"
    },
    {
        id: 22,
        name: "'FLOW'BOMBER JACKET IN WOODLAND CAMO",
        oldPrice: 0,
        price: 2699,
        rating: 5,
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj4.png"
    },
    {
        id: 23,
        name: "Lucca Sunglass",
        oldPrice: 0,
        price: 1899,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a4.png"
    },
    {
        id: 24,
        name: "Carhartt Rib Knit Cuffed Beanie",
        oldPrice: 0,
        price: 3299,
        rating: 5,
        category: "Headwears",
        image: "/images/productpic/h4.png"
    },
    {
        id: 25,
        name: "Dwnby Script Society street pulse collection",
        oldPrice: 0,
        price: 860,
        rating: 5,
        category: "T-shirts",
        image: "/images/productpic/t5.png"
    },
    {
        id: 26,
        name: "BOLIII vintage cowhide",
        oldPrice: 0,
        price: 1690,
        rating: 5,
        category: "Shoes",
        image: "/images/productpic/s5.png"
    },
    {
        id: 27,
        name: "Coziest® 'Real Tree' Sweatpants",
        oldPrice: 0,
        price: 1399,
        rating: 5,
        category: "Pants",
        image: "/images/productpic/p5.png"
    },
    {
        id: 28,
        name: "Krown Manila Zip Up Hoodie",
        oldPrice: 0,
        price: 1889,
        rating: 5,
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj5.png"
    },
    {
        id: 29,
        name: "Chrome Hearts cross ball-chain pendant",
        oldPrice: 0,
        price: 25499,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a5.png"
    },
    {
        id: 30,
        name: "All Terrain Camp Hat",
        oldPrice: 0,
        price: 1270,
        rating: 5,
        category: "Headwears",
        image: "/images/productpic/h5.png"
    },
    {
        id: 31,
        name: "DEGRADED 'DG's BASIC COLORS'",
        oldPrice: 0,
        price: 599,
        rating: 5,
        category: "T-shirts",
        image: "/images/productpic/t6.png"
    },
    {
        id: 32,
        name: "MSTR Co. Kutsu",
        oldPrice: 0,
        price: 1850,
        rating: 5,
        category: "Shoes",
        image: "/images/productpic/s6.png"
    },
    {
        id: 33,
        name: "Coziest® 'Classic' Sweatpants",
        oldPrice: 0,
        price: 1650,
        rating: 5,
        category: "Pants",
        image: "/images/productpic/p6.png"
    },
    {
        id: 34,
        name: "Prettiest® DENIM JACKET (BLUE)",
        oldPrice: 0,
        price: 2669,
        rating: 5,
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj6.png"
    },
    {
        id: 35,
        name: "LUCCE DIANA™ Earrings Round Diamond",
        oldPrice: 0,
        price: 25900,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a6.png"
    },
    {
        id: 36,
        name: "Lacoste Wool Black Flat Cap'",
        oldPrice: 0,
        price: 4295,
        rating: 4,
        category: "Headwears",
        image: "/images/productpic/h6.png"
    },
    {
        id: 37,
        name: "'FADED CAVIAR' MOCK NECK TEE",
        oldPrice: 0,
        price: 999,
        rating: 5,
        category: "T-shirts",
        image: "/images/productpic/t7.png"
    },
    {
        id: 38,
        name: "SABA Titan PRO Ice",
        oldPrice: 0,
        price: 1299,
        rating: 4,
        category: "Shoes",
        image: "/images/productpic/s7.png"
    },
    {
        id: 39,
        name: "HIKE PANTS IN WOODLAND CAMO",
        oldPrice: 0,
        price: 759,
        rating: 4,
        category: "Pants",
        image: "/images/productpic/p7.png"
    },
    {
        id: 40,
        name: "Varsity Jacket",
        oldPrice: 0,
        price: 499,
        rating: 3,
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj7.png"
    },
    {
        id: 41,
        name: "KENBO Y2K Sunglasses Wrap Around Futuristic Sunglasses",
        oldPrice: 0,
        price: 1669,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a7.png"
    },
    {
        id: 42,
        name: "Kangol Cotton Twill Army Cap Black Flexfit",
        oldPrice: 0,
        price: 3295,
        rating: 4,
        category: "Headwears",
        image: "/images/productpic/h7.png"
    },
    {
        id: 43,
        name: "Prettiest® 'MOTOSPORT' CLASSIC TEE",
        oldPrice: 0,
        price: 979,
        rating: 5,
        category: "T-shirts",
        image: "/images/productpic/t8.png"
    },
    {
        id: 44,
        name: "SABA Cookie Zenix",
        oldPrice: 0,
        price: 1399,
        rating: 4,
        category: "Shoes",
        image: "/images/productpic/s8.png"
    },
    {
        id: 45,
        name: "HGHMNDS ONLINE - EUPHORIA PANTS (BLACK)",
        oldPrice: 0,
        price: 1940,
        rating: 5,
        category: "Pants",
        image: "/images/productpic/p8.png"
    },
    {
        id: 46,
        name: "RED MEDIEVAL WEAR CONFIDENCE HOODIE POLAR FLEECE",
        oldPrice: 0,
        price: 2799,
        rating: 5,
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj8.png"
    },
    {
        id: 47,
        name: "Chrome Hearts Foti Harris pendant necklace",
        oldPrice: 0,
        price: 27999,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a8.png"
    },
    {
        id: 48,
        name: "Capslab Chupa Chups Red/White/Blue A-Frame Trucker",
        oldPrice: 0,
        price: 2095,
        rating: 5,
        category: "Headwears",
        image: "/images/productpic/h8.png"
    },
    {
        id: 49,
        name: "Coziest® 'Butterfly' Box Tee",
        oldPrice: 0,
        price: 979,
        rating: 5,
        category: "T-shirts",
        image: "/images/productpic/t9.png"
    },
    {
        id: 50,
        name: "Adidas Yeezy Boost 350 V2",
        oldPrice: 0,
        price: 3899,
        rating: 5,
        category: "Shoes",
        image: "/images/productpic/s9.png"
    },
    {
        id: 51,
        name: "HGHMNDS CLO. - THORN ABSTRACT PANTS",
        oldPrice: 0,
        price: 2399,
        rating: 5,
        category: "Pants",
        image: "/images/productpic/p9.png"
    },
    {
        id: 52,
        name: "SOURCE WORLDWIDE ICON PULLOVER HOODIE",
        oldPrice: 0,
        price: 1599,
        rating: 5,
        category: "Hoodies & Jackets",
        image: "/images/productpic/hj9.png"
    },
    {
        id: 53,
        name: "Lacoste Metropole Bracelet",
        oldPrice: 0,
        price: 12699,
        rating: 5,
        category: "Accessories",
        image: "/images/productpic/a9.png"
    },
    {
        id: 54,
        name: "Stetson Cotton Olive Docker",
        oldPrice: 0,
        price: 1785,
        rating: 4,
        category: "Headwears",
        image: "/images/productpic/h9.png"
    },
    {
        id: 55,
        name: "Sandugo Canvas Shoes",
        oldPrice: 0,
        price: 1399,
        rating: 4,
        category: "Shoes",
        image: "/images/productpic/img5.png"
    },

   
    
];

module.exports = products;