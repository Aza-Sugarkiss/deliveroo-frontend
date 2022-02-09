import CartPrices from "./CartPrices";

const CartContent = ({ cart, setCart }) => {
  const handleAction = (index, action) => {
    const newArr = [...cart];
    action === "sub" && newArr[index].quantity--;
    action === "add" && newArr[index].quantity++;
    newArr[index].quantity === 0 && newArr.splice(index, 1);
    setCart(newArr);
  };
  return (
    <>
      {cart.map((item, index) => {
        return (
          <div key={index} className="products">
            <div className="quantity">
              <button onClick={() => handleAction(index, "sub")}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleAction(index, "add")}>+</button>
              <p>{item.name}</p>
            </div>
            <p>{(item.price * cart[index].quantity).toFixed(2)}</p>
          </div>
        );
      })}
      <CartPrices cart={cart} />
    </>
  );
};

export default CartContent;
