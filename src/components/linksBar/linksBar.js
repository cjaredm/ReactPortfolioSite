/* Creates a bar of social media images and links */

import React, { Component } from "react";

const socialData = [
  {
    class: "github",
    linkURL: "https://github.com/cjaredm",
    imgSrc: "img/linksBar/logo-github.png",
    altTag: "GitHub"
  },
  {
    class: "Twitter",
    linkURL: "https://twitter.com/cjaredm",
    imgSrc: "img/linksBar/logo-twitter.png",
    altTag: "Twitter"
  },
  {
    class: "linkedin",
    linkURL: "https://www.linkedin.com/in/jaredmortenson/",
    imgSrc: "img/linksBar/logo-linkedin.png",
    altTag: "LinkedIn"
  },
  {
    class: "konami",
    linkURL: null,
    imgSrc: "img/linksBar/codekonami.png",
    altTag: "Konami"
  },
  {
    class: "resume",
    linkURL: null,
    imgSrc: "img/linksBar/resumeIcon.png",
    altTag: "Resume"
  }
];

class LinksBar extends Component {
  render() {
    return (
      <div className="social">
        <ul>
          {socialData.map((social, index) =>
            <li className={social.class} key={`social_${index}`}>
              <a href={social.linkURL}>
                <img src={social.imgSrc} alt={social.altTag} />
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
export default LinksBar;
