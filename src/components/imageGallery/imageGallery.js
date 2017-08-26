import React, { Component } from "react";

//Figure out how to import the photos from the portfolioGrid to the array below.
/* Array of Image Sources for gallery */
const portfolioItems = [
  {
    imgSrc: "img/imageGallery/appscript.jpg",
    label: "Google AppScript",
    link: "https://developers.google.com/apps-script/"
  },
  {
    imgSrc: "img/imageGallery/codecademyLogo.png",
    label: "Codecademy",
    link: "https://www.codecademy.com/"
  },
  {
    imgSrc: "img/imageGallery/javascript30.jpg",
    label: "JavaScript30.com",
    link: "https://javascript30.com/"
  },
  {
    imgSrc: "img/imageGallery/portsitelogo.png",
    label: "This Portfolio Website!!",
    link: ""
  },
  {
    imgSrc: "img/imageGallery/socketio.png",
    label: "SocketIO",
    link: "https://socket.io/"
  },
  {
    imgSrc: "img/imageGallery/webpack-icon.jpg",
    label: "Webpack",
    link: "https://webpack.github.io/"
  },
  {
    imgSrc: "img/imageGallery/reactLogo.svg",
    label: "React",
    link: "https://facebook.github.io/react/"
  }
];

class Gallery extends Component {
  state = {
    imgIndex: null
  };

  handleImageClick = index => {
    this.setState({ imgIndex: index });
  };

  //Infinitely loop through the gallery backward
  handleBackClick = () =>
    this.state.imgIndex - 1 === -1
      ? this.setState({ imgIndex: portfolioItems.length - 1 })
      : this.setState({ imgIndex: this.state.imgIndex - 1 });

  //Infinitely loop through the gallery forward
  handleNextClick = () =>
    this.state.imgIndex + 1 === portfolioItems.length
      ? this.setState({ imgIndex: 0 })
      : this.setState({ imgIndex: this.state.imgIndex + 1 });

  handleModalClose = () => this.setState({ imgIndex: null });

  render() {
    return (
      <div className="galleryWrapper">
        <div className="style_Grid">
          {" "}{portfolioItems.map((item, index) =>
            <div key={`portfolioItem_${index}`}>
              <img
                className="style_GridImg"
                src={item.imgSrc}
                onClick={() => this.handleImageClick(index)}
              />{" "}
              <p className="label"> {item.label} </p>{" "}
            </div>
          )}{" "}
          {this.state.imgIndex !== null &&
            <div className="style_Modal">
              <div className="modalButton_back">
                <img
                  src="http://www.free-icons-download.net/images/green-back-button-icon-65921.png"
                  onClick={this.handleBackClick}
                />{" "}
              </div>{" "}
              <img
                className="style_ModalImg"
                src={portfolioItems[this.state.imgIndex]["imgSrc"]}
                onClick={this.handleModalClose}
              />{" "}
              <div className="modalButton_next">
                <img
                  src="http://www.free-icons-download.net/images/green-forward-button-icon-65922.png"
                  onClick={this.handleNextClick}
                />{" "}
              </div>{" "}
            </div>}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Gallery;
