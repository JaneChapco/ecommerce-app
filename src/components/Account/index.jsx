import { Link } from "react-router";

function Account() {
  return (
    <>
      <h2>Account options coming soon</h2>
      <div className="col-12 col-lg-6 mb-2">
        <Link to="/products" className="action-btn btn-products w-100 mt-2">
          Continue shopping
        </Link>
      </div>
    </>
  );
}

export default Account;
