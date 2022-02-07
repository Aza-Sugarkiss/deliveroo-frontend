import "./meals.css";

const Meals = ({ data }) => {
  return (
    <div className="meal">
      <div className="meal-info">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <span className="price">{data.price} €</span>
        {data.popular && <span className="popular">• Populaire</span>}
      </div>
      {data.picture && <img src={data.picture} alt="" />}
    </div>
  );
};

export default Meals;
