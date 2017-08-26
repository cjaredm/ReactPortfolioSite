import React from "react";
import ReactDOM from "react-dom";

import FixedNav from "./components/fixedNav/fixedNav.js";
import debounce from "./components/debounce";
import { fixNav } from "./components/fixed-nav";

//import Profile from "./components/profile/profile.js";

import FlexPanels from "./components/flexPanels/flexPanels.js";
import LinksBar from "./components/linksBar/linksBar.js";
import Konami from "./components/konami.js";
import Gallery from "./components/imageGallery/imageGallery.js";

/* Create Nav / Fix it at the top when scrolled */
ReactDOM.render(<FixedNav />, document.querySelector(".nav"));
window.addEventListener("scroll", debounce(fixNav));

//ReactDOM.render(<Profile />, document.querySelector(".profileWrap"));
ReactDOM.render(<FlexPanels />, document.querySelector(".home"));
ReactDOM.render(<LinksBar />, document.querySelector(".links-bar"));
ReactDOM.render(<Gallery />, document.querySelector(".porfolio_grid"));
