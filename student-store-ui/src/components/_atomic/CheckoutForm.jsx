import axios from "axios";

/**
 * Handles user checkout functionality
 * @param formData Used for accessing user form state
 * @param setFormData Used for setting new user form state
 * @param setShoppingCart Used to clear shopping cart on successful checkout
 * @param checkout Sent to API upon successful purchase
 * @param setCheckout Used to add user info to purchase
 */
export default function CheckoutForm({
  formData,
  setFormData,
  setShoppingCart,
  checkout,
  setCheckout,
}) {
  function handleFormData(e) {
    switch (e.target.name) {
      case "name":
        setFormData({ name: e.target.value, email: formData.email });
        break;
      case "email":
        setFormData({ email: e.target.value, name: formData.name });
        break;
      default:
        console.error(
          "error in handleFormData: invalid target " + e.target + " targetted"
        );
        break;
    }
    setCheckout({
      ...checkout,
      user: { name: formData.name, email: formData.email },
    });
    console.log(checkout)
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/checkout`, checkout)
      .then((response) => {
        if (response.status === 200) {
          // purchase successful
          alert("Thank you for your purchase!");
          setFormData("");
          setShoppingCart([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h4>
        <u>Checkout Form</u>
      </h4>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleFormData(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => handleFormData(e)}
          />
        </div>
        <button type="submit" onClick={(e) => submit(e)}>
          Checkout
        </button>
      </form>
      <button onClick={() => setShoppingCart([])}>Clear cart</button>
    </>
  );
}
