import React from "react";
import "./Header.css";

const Header = () => {
    return ( 
    <div class="s006">
      <form>
        <fieldset>
          <legend>What are you looking for?</legend>
          <div class="inner-form">
            <div class="input-field">
              <button class="btn-search" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </button>
              <input id="search" type="text" placeholder="" value="Ladies" />
            </div>
          </div>
          <div class="suggestion-wrap">
            <span>New Arrivals</span>
            <span>Ladies</span>
            <span>Mens</span>
            <span>Accessories</span>
            <span>Sale</span>
          </div>
        </fieldset>
      </form>
    </div>
     );
}
 
export default Header;