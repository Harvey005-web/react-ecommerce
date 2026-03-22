const SkeletonCard = () => {
    return (
        <div className="card h-100 shadow-sm skeleton-card">
            <div className="skeleton skeleton-img"></div>
            <div className="card-body d-flex flex-column gap-2">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-stars"></div>
                <div className="skeleton skeleton-price"></div>
                <div className="skeleton skeleton-btn mt-auto"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
