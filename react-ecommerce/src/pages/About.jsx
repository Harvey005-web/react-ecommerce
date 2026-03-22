const About = () => {
    return (
        <div className="container my-5">

            {/* Hero Section */}
            <div className="about-hero rounded-4 p-5 mb-5 text-center">
                <div className="header-logo-mark mx-auto mb-3" style={{ width: "64px", height: "64px", fontSize: "28px" }}>
                    <i className="fa-brands fa-gripfire"></i>
                </div>
                <h1 className="fw-bold display-5 mb-2">About AURA DISTRICT</h1>
                <p className="lead mb-0 text-muted">
                    Premium Street &amp; Lifestyle Clothing — Born in the Philippines.
                </p>
            </div>

            <div className="row g-5 align-items-start mb-5">
                {/* Our Story */}
                <div className="col-lg-6">
                    <h3 className="fw-bold mb-3">
                        <i className="fas fa-book-open text-primary me-2"></i>Our Story
                    </h3>
                    <p>
                        AURA DISTRICT was born from a simple idea: great clothes shouldn’t cost a fortune.
                        Founded in 2026 by Harvey Espenilla, a streetwear-obsessed student in Metro Manila, it started
                        as a small online shop selling curated local and imported brands—and has since grown
                        into one of the most trusted clothing destinations in the Philippines.
                    </p>
                    <p>
                        I believe your outfit is an extension of your identity. Whether you're rocking an 
                        oversized tee on a coffee run or lacing up fresh kicks for a night out, AURA DISTRICT 
                        has the perfect fit for every moment.
                    </p>
                </div>

                {/* Mission */}
                <div className="col-lg-6">
                    <h3 className="fw-bold mb-3">
                        <i className="fas fa-bullseye text-danger me-2"></i>Our Mission
                    </h3>
                    <p>
                        Our mission is to make premium, authentic streetwear and lifestyle clothing
                        accessible to everyone — from high school students rocking their first drop
                        to seasoned collectors chasing limited releases.
                    </p>
                    <p>
                        We curate only authentic products, partner with ethical suppliers, and continuously
                        update our catalog with the freshest releases so you never miss a drop.
                    </p>
                </div>
            </div>

            {/* Values */}
            <h3 className="fw-bold text-center mb-4">What We Stand For</h3>
            <div className="row g-4 mb-5">
                {[
                    { icon: "fa-check-circle", color: "text-success", title: "Authenticity", desc: "Every product we carry is 100% authentic. No fakes, no replicas — just the real thing." },
                    { icon: "fa-heart", color: "text-danger", title: "Community", desc: "We're built by the culture, for the culture. We celebrate local talent and global streetwear." },
                    { icon: "fa-leaf", color: "text-success", title: "Sustainability", desc: "We partner with brands that prioritize responsible production and minimal environmental impact." },
                    { icon: "fa-star", color: "text-warning", title: "Quality First", desc: "We only stock pieces that pass our quality standards — built to last, made to impress." },
                ].map(v => (
                    <div className="col-md-6 col-lg-3" key={v.title}>
                        <div className="value-card text-center p-4 rounded-4 h-100 shadow-sm">
                            <i className={`fas ${v.icon} fa-2x ${v.color} mb-3`}></i>
                            <h5 className="fw-bold">{v.title}</h5>
                            <p className="text-muted small mb-0">{v.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="about-stats rounded-4 p-4 mb-5">
                <div className="row text-center">
                    {[
                        { number: "5,000+", label: "Happy Customers" },
                        { number: "300+",   label: "Products Listed" },
                        { number: "50+",    label: "Brands Carried" },
                        { number: "4.8★",   label: "Average Rating" },
                    ].map(stat => (
                        <div className="col-6 col-md-3 py-3" key={stat.label}>
                            <h2 className="fw-bold text-primary mb-1">{stat.number}</h2>
                            <p className="text-muted mb-0 small">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team / Closing */}
            <div className="text-center py-3">
                <h4 className="fw-bold mb-2">Made with ❤️ in the Philippines</h4>
                <p className="text-muted">
                    Aura District is a student-built project representing our passion for fashion, technology,
                    and Filipino hustle. Built with React, Vite, Bootstrap, and a whole lot of love.
                </p>
            </div>

        </div>
    );
};

export default About;


{/** 
const About = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8">
                    <h2>About Our Store</h2>
                    <p>
                        We provide high quality products with affordable prices.
                        This website is built using React, Vite, Bootstrap, and FontAwesome.
                    </p>
                </div>
            </div>   
        </div>
    );
};

export default About;
*/}