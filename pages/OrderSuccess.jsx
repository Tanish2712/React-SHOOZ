import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div
      style={{
        padding: "100px",
        textAlign: "center",
      }}
    >
      <h1>🎉 Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with us.
      </p>

      <Link to="/">
        Continue Shopping
      </Link>

    </div>
  );
}

export default OrderSuccess;