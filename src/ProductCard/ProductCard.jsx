

const ProductCard = ({ item }) => {
  const { id, title, description, price, stocks,ratings } = item;
  return (
    <div className="card py-3 mb-3" style={{ width: "18rem" }}>
      <img
        src="https://thumbs.dreamstime.com/b/young-asia-woman-workin-online-e-commerce-shopping-home-startup-fashion-cloth-business-preparing-many-parcel-box-delivery-246599520.jpg"
        alt=""
        className="card-img-top rounded"
      />

      <div className="card-body p-0 mt-3">
        <h6 className="card-title text-start fw-bold">{title}</h6>
        <h5 className="card-text text-secondary text-start">{description}</h5>
        <h4 className="card-text text-start">{price}</h4>
        <h6 className="card-title text-start">
            <span className="text-secodary">In stock:</span>{stocks}
        </h6>

        <button className="btn btn-danger w-100">Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;