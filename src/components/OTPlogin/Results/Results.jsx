import * as React from 'react';
import './Results.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Trending from '../../SoonestEvents/Trending copy';
import TicketBought from '../../SoonestEvents/TicketBought';

export default function Results({ array, setToTickets, categoriesbillet,choosenEvent, setChoosenEvent, URL,toTickets, evenements }) {
  const [listOfTickets, setListOfTickets] = useState([]);
  const [displayState, setDisplayState] = useState('none');

  const getData = async (choosenEvent) => {
    if (!choosenEvent) return;
    
    try {
      const response = await axios.get(`https://ebillet.onrender.com/billetsvendus/evenement/${choosenEvent.id_evenement}`);
      const tickets = response.data.filter(ticket => ticket.email_acheteur === choosenEvent.email_acheteur);
      setListOfTickets(tickets);
      console.log(tickets);
      setToTickets(true);

    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const Choose = (id_evenement) => {
    const chosenEvent = array.find(event => event.id_evenement === id_evenement);
    if (!chosenEvent) return;

    setChoosenEvent(chosenEvent);
    getData(chosenEvent);
  };

  useEffect(() => {
    if (array.length === 0) {
      setDisplayState('flex');
    }
  }, [array]);

  return (
    <div>
      <div className="navbarBackground"></div>
      <legend className="Title">Mes billets</legend>
      {toTickets? ( 
        <div className="soonestEventCard">
        <TicketBought 
          listOfTickets ={listOfTickets}
          choosenEvent={choosenEvent}
        />
      </div>
      ):(
        <div className="soonestEventBox">
        {array.map((item) => {
          const choosenOne = evenements.find(event => event.id_evenement === item.id_evenement);
          return (
            <div className="soonestEventCard" key={item.id_categorieevenement}>
              <Trending 
                item={item}
                categoriesbillet={categoriesbillet}
                Choose={Choose}
                choosenOne={choosenOne}
              />
            </div>
          );
        })}
      </div>
      )}
      
    </div>
  );
}
