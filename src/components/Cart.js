import "./cart.css";
import CartContent from "./CartContent";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart">
      <div className="cart-content">
        <button
          className="validation"
          disabled={cart.length === 0 ? true : false}
          onClick={() => {
            alert("Panier validé");
          }}
        >
          Valider mon panier
        </button>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est vide</p>
          </div>
        ) : (
          <CartContent cart={cart} setCart={setCart} />
        )}
      </div>
    </div>
  );
};

export default Cart;
