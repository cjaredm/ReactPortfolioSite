import React, { Component } from "react";

const navList = [
  {
    navName: "Home",
    url: ""
  },
  {
    navName: "About",
    url: ""
  },
  {
    navName: "Profiles",
    url: ""
  },
  {
    navName: "Portfolio",
    url: ""
  },
  {
    navName: "Contact",
    url: ""
  }
];

class FixedNav extends Component {
  state = {};

  render() {
    return (
      <ul className="navUL">
        <br />
        <li className="logo">
          <img src="./img/profile/cJaredmLogo.png" alt="cJaredm Logo" />
        </li>{" "}
        {navList.map((navItem, index) =>
          <li className="navName" key={`nav_${index}`}>
            <a href={navItem.url}> {navItem.navName} </a>{" "}
          </li>
        )}{" "}
      </ul>
    );
  }
}

export default FixedNav;

/* <!-- Header section including Logo and Nav-->
<nav class="nav" id="profiles">
    <ul>
        <li class="logo"><img src="./src/img/landing/cJaredmLogo.png" alt="cJaredm"></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#profiles">Profiles</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav> */
