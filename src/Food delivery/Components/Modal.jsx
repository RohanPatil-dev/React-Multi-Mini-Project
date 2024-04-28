import React from "react"
import "../CSS/Delivery.css";

export default function Modal(props) {

  const cart = {orders : props.element}

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className={`${props.colors === "light" ? "bg-light text-dark" : "bg-dark text-light"} modal-content`}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">

        <div className="modal-grid">
          {
            cart.orders == [] ? (
              <></>
            ) : cart.orders.map((data)=>{
              return(
              <div className={`card ${
                props.colors === "light"
                  ? "bg-light text-dark"
                  : "bg-dark text-light border"
              } text-center`} key={data.id}>
              <img className="card-img-top" src={data.image} alt="img not found !" />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
              <div>
              <p style={{color : "red",fontSize : "30px",fontStyle :"oblique",fontWeight : "600"}}><span>RS</span> {data.price * data.quantity}</p>
              <p>Total quantity is : <span>{data.quantity}</span></p>
              </div>
              </div>
            </div>
              )
            })
          }
      </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  )
}