import React, { Component } from "react";

const column1 = {
  picture: {
    class: "avatar",
    src: "img/profile/JaredProfilePic.jpg",
    imgHeight: "300"
  },
  logo: {
    class: "profile_picture__logo",
    src: "./img/profile/cJaredmLogo.png"
  }
};

const skills = [
  {
    divClass: "radialDivs",
    canvas: {
      class: "radials",
      circleID: "radialOne",
      circleWidth: "100",
      circleHeight: "100",
      dataNum: "10",
      dataColor: "#ad2323"
    },
    tag: {
      skill: "Skill 1",
      skillClass: "radial_label"
    }
  },
  {
    divClass: "radialDivs",
    canvas: {
      class: "radials",
      circleID: "radialTwo",
      circleWidth: "100",
      circleHeight: "100",
      dataNum: "25",
      dataColor: "blue"
    },
    tag: {
      skill: "Skill 2",
      skillClass: "radial_label"
    }
  },
  {
    divClass: "radialDivs",
    canvas: {
      class: "radials",
      circleID: "radialThree",
      circleWidth: "100",
      circleHeight: "100",
      dataNum: "50",
      dataColor: "orange"
    },
    tag: {
      skill: "Skill 3",
      skillClass: "radial_label"
    }
  },
  {
    divClass: "radialDivs",
    canvas: {
      class: "radials",
      circleID: "radialFour",
      circleWidth: "100",
      circleHeight: "100",
      dataNum: "80",
      dataColor: "yellow"
    },
    tag: {
      skill: "Skill 4",
      skillClass: "radial_label"
    }
  },
  {
    divClass: "radialDivs",
    canvas: {
      class: "radials",
      circleID: "radialFive",
      circleWidth: "100",
      circleHeight: "100",
      dataNum: "90",
      dataColor: "purple"
    },
    tag: {
      skill: "Skill 5",
      skillClass: "radial_label"
    }
  }
];

class Profile extends Component {
  state = {};

  render() {
    return (
      <div className="profile">
        <div className="profile_column">
          <img
            className={column1.picture.class}
            src={column1.picture.src}
            height={column1.picture.imgHeight}
          />
        </div>
        <div className="profile_column">
          <img className={column1.logo.class} src={column1.logo.src} />
        </div>
        <div className="profile_info__skills">
          <ul>
            {skills.map((skill, index) =>
              <li key={`skill_${index}`}>
                <div className={skill.divClass}>
                  <canvas
                    className={skill.canvas.class}
                    id={skill.canvas.circleID}
                    width={skill.canvas.circleWidth}
                    height={skill.canvas.circleHeight}
                    data-num={skill.canvas.dataNum}
                    data-color={skill.canvas.dataColor}
                  />
                  <div>
                    {skill.tag.skill}
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;

/* 
<div class="profile" id="none">
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
