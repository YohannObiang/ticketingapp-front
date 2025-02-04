import React from "react";
import ReactDOM from "react-dom";
import "./Trending.css";
import {Link } from "react-router-dom";





export default function Trending ({item, Choose, price}) {



  
  return(
  <Link to="/Details" onClick={()=>Choose(item.id_evenement)}>
    <div className="card" style={{backgroundImage:`url(https://ebillet.onrender.com/uploads/${item.illustration})`, width:'100%'}}>
      <div className="card-content">
        <h3 className="card-title">{item.evenement}</h3>
        <p className="card-body">
          À partir de {price}fcfa <br />
          {item.date} <br />
          {item.lieu}
        </p>
        <Link to="/validation" onClick={()=>Choose(item.id_evenement)}>
          <a href="#" className="button" style={{color:'white'}}>
            Acheter
          </a>
        </Link>
      </div>
    </div>
  </Link>
  )
};


