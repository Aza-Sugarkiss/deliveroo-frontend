import "./categories.css";
import Meals from "./Meals";

const Categories = ({ categories }) => {
  return (
    <div className="category">
      <h2>{categories.name}</h2>
      <div className="menu-list">
        {categories.meals.map((product, index) => {
          return <Meals key={categories.meals[index].id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
