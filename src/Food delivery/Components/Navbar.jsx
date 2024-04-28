import React from "react"
import "../CSS/Delivery.css";
import { Link,Outlet } from "react-router-dom";

export default function Navbar(props) {
  
  function turnOn(){
     props.colors === "light" ? props.setColors({color : "dark",backgroundColor : "dark",text : "Dark mode enabled"}) : props.setColors({color : "light",backgroundColor : "light",text : "Light Mode Enabled"})
  }

  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.colors} bg-${props.background} p-3 fontSize`} id="navbar">
  <a className="navbar-brand" to="#" id="tag">Foo<span className="span">dy</span> Zo<span className="span">ne</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>

      <li className="nav-item active">
        <a className="nav-link" href="#">About</a>
      </li>

      <li className="nav-item active">
        <a className="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Cart</a>
      </li>
      
      <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Dish type
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/indian">Indian</Link>
          <Link className="dropdown-item" to="/chinese">Chinese</Link>
          <Link className="dropdown-item" to="/South_indian">South indian</Link>
        </div>
      </li>

      <li className="nav-item active ml-3 mt-1">
      <a to="#" className={`btn active border text-${props.colors === "light" ? "dark" : "light"}`} role="button" aria-pressed="true" onClick={()=>{turnOn()}}>{props.text}</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<Outlet />
   </>
  )
}