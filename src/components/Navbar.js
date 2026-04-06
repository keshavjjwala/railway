import React from "react";

function Navbar({ onNavigate }) {
  return (
    <header className="site-header">
      <div className="site-identity">
        <h1>
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("home");
            }}
          >
            <img src="/images/Railway.png" alt="Railway" /> Reservation System
          </a>
        </h1>
      </div>
      <nav className="site-navigation">
        <ul className="nav">
          <li>
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#meals"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("meals");
              }}
            >
              Meals
            </a>
          </li>
          <li>
            <a
              href="#holidayPackages"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("holidayPackages");
              }}
            >
              Holiday Packages
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("services");
              }}
            >
              Services at station
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("contact");
              }}
            >
              Contact US
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
