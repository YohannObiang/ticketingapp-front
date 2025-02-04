import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Header = ({ valueSearch, setValueSearch, setChoosenEvent, evenements, setResultSearch, URL }) => {
  const handleChange = (e) => {
    setValueSearch(e.target.value);
    const filtered = evenements.filter(item =>
      item.evenement.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setResultSearch(filtered);
  };

  const [onspot, setOnspot] = useState([]);

  useEffect(() => {
    getOnspot();
  }, []);

  const getOnspot = async () => {
    const response = await axios.get(`${URL}/onspot`);
    setOnspot(response.data);
  };

  const chooseEvent = (id_evenement) => {
    const choosenOne = onspot.find(item => item.id_evenement === id_evenement);
    setChoosenEvent(choosenOne);
  };

  return (
    <div className="s006">
      <div className="form">
        <fieldset>
          <legend>Des événements à venir ? <br /> Achetez vos billets dès maintenant !</legend>
          <div className="inner-form">
            <div className="input-field">

              <input
                id="search"
                type="text"
                onChange={handleChange}
                placeholder="Recherchez un événement..."
                value={valueSearch}
              />
                            <Link to="/Results">
                <button className="btn-search" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#fff"></path>
                </svg>

                </button>
              </Link>
            </div>
          </div>
          <div className="suggestion-wrap">
            {onspot.map((item) => (
              <Link to="/details" key={item.id_evenement} onClick={() => chooseEvent(item.id_evenement)}>
                <span>{item.evenement}</span>
              </Link>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Header;
