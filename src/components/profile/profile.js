import React, { Component } from "react";

const thing = [];

class Profile extends Component {
  state = {};

  render() {
    return (
      <div className="profile">
        <img
          className="avatar"
          src=".img/landing/JaredProfilePic.jpg"
          height="300"
        />
        <br />
        <img
          className="profile_picture__logo"
          src="./img/landing/cJaredmLogo.png"
          alt="cJaredm Logo"
        />
      </div>
      <div class="profile_column">
        </div>


    );
  }
}

export default Profile;

/* 
<div class="profile" id="none">

<div class="profile_column">
    <img class="avatar" src="./src/img/landing/JaredProfilePic.jpg" height="150" width="150">
    <br>
    <img class="profile_picture__logo" src="./src/img/landing/cJaredmLogo.png" alt="cJaredm">
</div>
<div class="profile_column">
    <div class="profile_info__skills">
        <ul>
            <li>
                <div class="radialDivs">
                    <canvas class="radials" id="radialOne" width="100" height="100" data-num="10" data-color="#ad2323"></canvas>
                    <div>Skill 1</div>
                </div>
            </li>
            <li>
                <div class="radialDivs">
                    <canvas class="radials" id="radialTwo" width="100" height="100" data-num="25" data-color="blue"></canvas>
                    <div>Skill 2</div>
                </div>
            </li>
            <li>
                <div class="radialDivs">
                    <canvas class="radials" id="radialThree" width="100" height="100" data-num="50" data-color="orange"></canvas>
                    <div>Skill 3</div>
                </div>
            </li>
            <li>
                <div class="radialDivs">
                    <canvas class="radials" id="radialFour" width="100" height="100" data-num="75" data-color="yellow"></canvas>
                    <div>Skill 4</div>
                </div>
            </li>
            <li>
                <div class="radialDivs">
                    <canvas class="radials" id="radialFive" width="100" height="100" data-num="80" data-color="purple"></canvas>
                    <div>Skill 5</div>
                </div>
            </li>
        </ul>
    </div>
    <div class="profile_info__about">
        <h3>About Section</h3>
        <p>So this is the about me section where I talk about myself and see how it shows up on the page. Hoefully it will be displayed centered and below the skills radials that I have. I hope I can get the radials to animate when they show
            up on the page, each time.</p>
    </div>
</div>
</div>

    </div>
*/
