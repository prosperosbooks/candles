import React from "react";
import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <h1>Galt & Maree Candles</h1>

    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CANDLES</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">DIFFUSERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">FLAMELESS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">PERSONALIZED CANDLES</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">ACCESSORIES</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">GIFTS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
