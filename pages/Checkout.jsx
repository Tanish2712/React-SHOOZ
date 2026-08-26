import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {

  const { cart, totalPrice } = useContext(ShopContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = (e) => {

    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.address
    ) {
      alert("Please fill all required fields");
      return;
    }

    navigate("/order-success");
  };

  return (
    <section className="checkout">

      <div className="billing">

        <h2>Billing Details</h2>

        <form onSubmit={placeOrder}>

          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="State"
            name="state"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Zip Code"
            name="zip"
            onChange={handleChange}
          />

          <button>
            Place Order
          </button>

        </form>

      </div>

      <div className="order-summary">

        <h2>Order Summary</h2>

        {cart.map((item) => (

          <div className="summary-item" key={item.id}>

            <span>
              {item.title} × {item.qty}
            </span>

            <span>
              ${item.price * item.qty}
            </span>

          </div>

        ))}

        <hr />

        <h3>Total : ${totalPrice}</h3>

      </div>

    </section>
  );
}

export default Checkout;