import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://exo-deliveroo-backend.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Header data={data.restaurant} />
      <div className="menu container">
        <div className="categories">
          {data.categories.map((categories, index) => {
            return (
              categories.meals.length > 0 && (
                <Categories
                  key={index}
                  categories={categories}
                  cart={cart}
                  setCart={setCart}
                />
              )
            );
          })}
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
