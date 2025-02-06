import React from "react";
import ReactDOM from "react-dom";
import "./Trending.css";
import {Link } from "react-router-dom";





export default function Trending ({item, Choose,choosenOne, price}) {



  
  return(
    <div className="card" style={{backgroundImage:`url(https://ebillet.onrender.com/uploads/${choosenOne.illustration})`, width:'100%'}}>
      <div className="card-content">
        <h3 className="card-title">{choosenOne.evenement}</h3>
        <p className="card-body">
          {choosenOne.date} <br />
          {choosenOne.lieu}
        </p>
          <a href="#" className="button" style={{color:'white'}}>
            Voir billet(s)
          </a>
      </div>
    </div>
  )
};


