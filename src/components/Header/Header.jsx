import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value)
  }
    return ( 
    <div class="s006">
      <form>
        <fieldset>
          <legend>Des événements à venir ? <br /> Achetez vos billets dès maintenant !</legend>
          <div class="inner-form">
            <div class="input-field">
              <button class="btn-search" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </button>
              <input id="search" type="text" onChange={handleChange} placeholder="Recherchez un événement..." value={value} />
            </div>
          </div>
          <div class="suggestion-wrap">
            <a href="#"><span>Concert</span></a>
            <a href="#"><span>Sport</span></a>
            <a href="#"><span>Gala</span></a>
            <a href="#"><span>Fête</span></a>
            <a href="#"><span>Séminaire</span></a>
            <a href="#"><span>Tour</span></a>
          </div>
        </fieldset>
      </form>
    </div>
     );
}
 
export default Header;