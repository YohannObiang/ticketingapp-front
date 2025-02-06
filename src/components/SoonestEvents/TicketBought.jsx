import React from "react";
import ReactDOM from "react-dom";
import "./Trending.css";
import {Link } from "react-router-dom";
import EventTicket from "../EventTicket copy";






export default function TicketBought ({listOfTickets, choosenEvent}) {
  console.log(listOfTickets);
  

  return(
    <div className="soonestEventBox">
      {listOfTickets.map((item) => {
        return(
          <div style={{margin:'10px'}}>
            <div className="card" style={{width:'100%', padding:0, position:'relative'}} key={item.id_billetvendu}>
              <EventTicket choosenEvent={item} event={choosenEvent}/>
            </div>
          </div>
      
        )
      })}
    </div>

  )
};


