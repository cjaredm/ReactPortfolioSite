import React, { Component } from "react";

const panelData = [
  {
    class: "panel panel0",
    topP: "HTML / CSS",
    mainP: "Coding",
    bottomP: "JavaScript / React"
  },
  {
    class: "panel panel1",
    topP: "Master of Ed.",
    mainP: "Training",
    bottomP: "5+ Years XP"
  },
  {
    class: "panel panel2",
    topP: "Humourous",
    mainP: "Fun",
    bottomP: "I make jokes...?"
  }
];

class FlexPanels extends Component {
  state = {
    focus: {
      panel0: "closed",
      panel1: "closed",
      panel2: "closed"
    },
    active: {
      panel0: "unactive",
      panel1: "unactive",
      panel2: "unactive"
    }
  };

  //Toggles flex panels to open when clicked
  toggleOpen = (e, index) => {
    //if somethign is open change it to closed
    this.setState({
      focus: {
        panel0: "closed",
        panel1: "closed",
        panel2: "closed"
      },
      active: {
        panel0: "unactive",
        panel1: "unactive",
        panel2: "unactive"
      }
    });

    //change the one just clicked to open
    const stateFocus = {};
    stateFocus.focus = { focus: {} };
    stateFocus.focus[`panel${e.target.id}`] = "open";
    this.setState(stateFocus);

    if (this.state.active[`panel${e.target.id}`] !== "open") {
      const stateActive = {};
      stateActive.active = { active: {} };
      stateActive.active[`panel${e.target.id}`] = "open-active";
      this.setState(stateActive);
    }
  };

  //Toggles the fly-in text when panel opens and closes.

  render() {
    return (
      <div className="panels">
        {panelData.map((panel, index) =>
          <div
            className={`${panel.class} ${this.state.focus[
              `panel${index}`
            ]} ${this.state.active[`panel${index}`]}`}
            id={index}
            key={`panel_${index}`}
            onClick={this.toggleOpen}
          >
            <p>
              {panel.topP}
            </p>
            <p onClick={this.toggleOpen}>
              {panel.mainP}
            </p>
            <p>
              {panel.bottomP}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default FlexPanels;
