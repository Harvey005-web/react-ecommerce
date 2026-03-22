import { Link } from 'react-router-dom';

const Policy = () => {
 return (
    <div className="container my-5">

        {/* ── Hero ── */}
        <div className="policy-hero rounded-4 p-5 mb-5 text-center">
            <i className="fas fa-file-contract fa-3x text-danger mb-3"></i>
            <h2 className="fw-bold mb-1">Policies & Terms & Conditions</h2>
            <p className="text-muted mb-0">
                Last updated: January 2026 &nbsp;|&nbsp; Please read carefully before using our store.
            </p>
        </div>

        {/* ── Sections ── */}
        <div className="row g-4">
            {[
                {
                    num: "01", icon: "fa-info-circle", title: "General Information",
                    items: [
                        "All products displayed on our website are subject to availability.",
                        "We reserve the right to update product prices, descriptions, and policies at any time without prior notice.",
                        "Colors of products may vary slightly due to lighting or screen settings.",
                    ]
                },
                {
                    num: "02", icon: "fa-credit-card", title: "Orders & Payments",
                    items: [
                        "Orders are confirmed only after full payment is received.",
                        "We accept payments through approved payment methods shown at checkout.",
                        "Once an order is placed, it cannot be modified or canceled unless stated otherwise.",
                    ]
                },
                {
                    num: "03", icon: "fa-truck", title: "Shipping & Delivery",
                    items: [
                        "Shipping fees are calculated at checkout.",
                        "Estimated delivery times may vary depending on location and courier.",
                        "We are not responsible for delays caused by couriers, weather conditions, or unforeseen circumstances.",
                        "Please ensure that your shipping details are complete and accurate.",
                    ]
                },
                {
                    num: "04", icon: "fa-undo", title: "Returns & Exchanges",
                    items: [
                        "We accept returns or exchanges only for defective or incorrect items.",
                        "Requests must be made within 7 days after receiving the item.",
                        "Items must be unused, unwashed, and in original packaging.",
                        "Sale items and clearance items are non-refundable.",
                    ]
                },
                {
                    num: "05", icon: "fa-money-bill-wave", title: "Refund Policy",
                    items: [
                        "Refunds are processed only after the returned item is inspected and approved.",
                        "Approved refunds will be issued through the original payment method.",
                        "Shipping fees are non-refundable unless the error was on our end.",
                    ]
                },
                {
                    num: "06", icon: "fa-ban", title: "Cancellations",
                    items: [
                        "Orders cannot be canceled once they have been processed or shipped.",
                        "Failure to receive or accept a delivery is not considered a valid cancellation.",
                    ]
                },
                {
                    num: "07", icon: "fa-user-shield", title: "User Responsibilities",
                    items: [
                        "Customers are responsible for providing accurate information during checkout.",
                        "Any misuse of the website, including fraudulent activity, may result in order cancellation or account suspension.",
                    ]
                },
                {
                    num: "08", icon: "fa-copyright", title: "Intellectual Property",
                    items: [
                        "All website content, including images, logos, and text, belongs to the store and may not be used without permission.",
                    ]
                },
                {
                    num: "09", icon: "fa-exclamation-triangle", title: "Limitation of Liability",
                    items: [
                        "We are not liable for indirect or incidental damages resulting from the use of our products or website.",
                    ]
                },
                {
                    num: "10", icon: "fa-sync-alt", title: "Changes to Terms",
                    items: [
                        "We reserve the right to update these Terms & Conditions at any time.",
                        "Continued use of the website means acceptance of any changes made.",
                    ]
                },
                {
                    num: "11", icon: "fa-headset", title: "Contact Information",
                    items: [
                        "For questions or concerns, please contact us through our official support channels.",
                    ]
                },
            ].map(section => (
                <div className="col-lg-6" key={section.num}>
                    <div className="policy-card h-100 p-4 rounded-4">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="policy-icon-wrap">
                                <i className={`fas ${section.icon}`}></i>
                            </div>
                            <div>
                                <span className="policy-num">{section.num}</span>
                                <h5 className="fw-bold mb-0">{section.title}</h5>
                            </div>
                        </div>
                        <ul className="policy-list mb-0">
                            {section.items.map((item, i) => (
                                <li key={i} className="d-flex align-items-start gap-2 mb-2">
                                    <i className="fas fa-check-circle text-danger mt-1 flex-shrink-0"></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>

        {/* ── Footer note ── */}
        <div className="text-center mt-5 py-4 policy-footer-note rounded-4">
            <i className="fas fa-shield-alt fa-2x text-danger mb-2"></i>
            <p className="mb-0 text-muted small">
                By continuing to use <strong>AURA DISTRICT</strong>, you agree to all the terms listed above.
                If you have any questions, reach us at our <strong><Link to="/contact"> contact page</Link></strong>
            </p>
        </div>

    </div>
);
};

export default Policy;
