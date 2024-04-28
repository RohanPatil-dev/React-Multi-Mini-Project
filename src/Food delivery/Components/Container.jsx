import React from "react";
import { foods } from "../API/food";

import "../CSS/Delivery.css";

export default function Container(props) {
  function addInside(data) {
   let quantity = 0;

    const findData = props.element.findIndex((value) => value.id === data.id);

    if (findData !== -1) {

      const updateCart = [...props.element]

      updateCart[findData].quantity++

      props.setElement(updateCart)
      
    } else {
      props.setElement([...props.element, { ...data, quantity: quantity+1 }]);
    }
  }

  return (
    <>
      <div className={`${props.colors === "light" ? "bg-light" : "bg-dark"} boxed`}>
        <div className="container card-grid">
          {foods.map((data) => {
            return (
              <div
                className={`card ${
                  props.colors === "light"
                    ? "bg-light text-dark"
                    : "bg-dark text-light border"
                }`}
                style={{ width: "18rem" }}
                key={data.id}
              >
                <img
                  className="card-img-top img"
                  src={data.image}
                  alt="img not found !"
                />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.description.slice(0,50)+"...."}</p>
                  <div>
                    <p id="price">
                      <span>RS</span> {data.price}
                    </p>
                  </div>
                  <button
                    className="btn btn-primary button"
                    onClick={() => {
                      addInside(data);
                    }}
                  >
                    Select Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>


    </>
  );
}


