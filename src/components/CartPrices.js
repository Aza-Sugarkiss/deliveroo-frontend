const CartPrices = ({ cart }) => {
  let subTotal = 0;
  const calculateSubTotal = () => {
    return cart.forEach((elem) => (subTotal += elem.price * elem.quantity));
  };
  calculateSubTotal();
  return (
    <>
      <div className="costs">
        <div className="costs-line">
          <p>Sous-total</p>
          <p>{(Math.floor(subTotal * 100) / 100).toFixed(2)} €</p>
        </div>
        <div className="costs-line">
          <p>Frais de livraison</p>
          <p>2,50 €</p>
        </div>
      </div>
      <div className="total-cost">
        <h3>Total</h3>
        <p>{(Math.floor((subTotal + 2.5) * 100) / 100).toFixed(2)} €</p>
      </div>
    </>
  );
};

export default CartPrices;
