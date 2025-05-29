import React from "react";
import foods from "../data/foods";
import '../assets/css/FoodCard.css'; // Assuming you have a CSS file for styling
const FoodCard = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {foods.map((food) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={food.id}>
              <div className="card h-100">
                <img src={food.image} alt={food.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text">{food.description}</p>
                  <p className="card-category">{food.category} {food.rating} <i className="bi bi-star-fill text-warning"></i></p>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-danger fw-bold">${food.price.toFixed(2)}</p>
                    <button className="btn btn-success">
                      <i className="bi bi-cart-plus-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
