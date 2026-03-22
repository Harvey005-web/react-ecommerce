const Contact = () => {
   return (
    <div className="container my-5">
        <div className="row g-5">

            {/* ── Left: Form ── */}
            <div className="col-lg-7">
                <h2 className="fw-bold mb-1">Get In Touch</h2>
                <p className="text-muted mb-4">Have a question or concern? We'd love to hear from you.</p>

                <div className="contact-form-card p-4 rounded-4 shadow-sm">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    <i className="fas fa-user me-2 text-danger"></i>Name
                                </label>
                                <input type="text" className="form-control" placeholder="Your full name" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    <i className="fas fa-envelope me-2 text-danger"></i>Email
                                </label>
                                <input type="email" className="form-control" placeholder="your@email.com" />
                            </div>

                            <div className="col-12">
                                <label className="form-label fw-semibold">
                                    <i className="fas fa-tag me-2 text-danger"></i>Subject
                                </label>
                                <input type="text" className="form-control" placeholder="What is this about?" />
                            </div>

                            <div className="col-12">
                                <label className="form-label fw-semibold">
                                    <i className="fas fa-comment-dots me-2 text-danger"></i>Message
                                </label>
                                <textarea className="form-control" rows="5" placeholder="Write your message here..."></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-danger w-100 py-2 fw-semibold">
                                    <i className="fas fa-paper-plane me-2"></i>Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* ── Right: Info ── */}
            <div className="col-lg-5">
                <h2 className="fw-bold mb-1">Contact Info</h2>
                <p className="text-muted mb-4">Reach us through any of these channels.</p>

                <div className="d-flex flex-column gap-3">
                    {[
                        { icon: "fa-map-marker-alt", label: "Address",  value: "Sampaloc Manila, PH" },
                        { icon: "fa-phone",          label: "Phone",    value: "+63 951 970 0340" },
                        { icon: "fa-envelope",       label: "Email",    value: "rvy.espenilla005@gmail.com" },
                        { icon: "fa-clock",          label: "Hours",    value: "Mon – Sat: 9:00 AM – 7:00 PM" },
                    ].map(item => (
                        <div key={item.label} className="contact-info-card d-flex align-items-start gap-3 p-3 rounded-3">
                            <div className="contact-icon-wrap">
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <div>
                                <div className="fw-semibold small text-muted">{item.label}</div>
                                <div className="fw-bold">{item.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social links */}
                <div className="mt-4">
                    <p className="fw-semibold mb-2">Follow Us</p>
                    <div className="d-flex gap-2">
                        {[
                            { icon: "fa-facebook-f",  label: "Facebook" },
                            { icon: "fa-instagram",   label: "Instagram" },
                            { icon: "fa-tiktok",      label: "TikTok" },
                            { icon: "fa-twitter",     label: "Twitter" },
                        ].map(s => (
                            <a key={s.label} href="#" className="social-icon" aria-label={s.label}>
                                <i className={`fab ${s.icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    </div>
);
};

export default Contact;