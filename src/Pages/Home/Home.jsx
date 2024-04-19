import React from "react";
import "./Home.css";

//img
// import BirdCookies from "../../Assets/Img/BirdCookies.png";

export const Home = () => {
  return (
    <div id="Home">
      <div id="Header">
        <div id="Text">
          <h1>WHEN PERFORMANCE MATTERS</h1>
          <button id="TextBtn">Start development with us!</button>
        </div>
        <div id="Cookies">
          {/* <img src={BirdCookies} alt="BirdCookies" /> */}
          <div id="imgBRD"></div>
          <div id="Notice">
            <p>
              WE USE COOKIES TO ENSURE YOUR BEST EXPERIENCE. <br /> THROUGH YOUR
              CONTINUED USE OF THIS SITE YOU ACCEPT THIS USE. <br />
              FOR MORE INFORMATION, PLEASE SEE OUR PRIVACY POLICY.
            </p>
            <button id="AcceptBtnH">ACCEPT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
