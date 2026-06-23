import { Link } from "react-router";

function Payment() {
  return (
    <>
      <h2>Payment options coming soon</h2>
      <div className="col-12 col-lg-6 mb-2">
        <Link to="/products" className="btn btn-primary w-100">
          Continue shopping
        </Link>
      </div>
    </>
  );
}

export default Payment;
