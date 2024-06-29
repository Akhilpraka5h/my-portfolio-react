import { useState } from "react";
import "./About.css";
import User from "../../assets/Profile_about.jpg"; // Corrected assets path

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="row">
          <div className="about-col-1">
            <img src={User} alt="User" />
          </div>
          <div className="about-col-2">
            <h1 className="sub_title">About Me</h1>
            <p>
              I am a Software Engineer specializing in web development with
              strong proficiency in HTML, CSS, JavaScript, and frameworks like
              React.js. I excel in creating dynamic, responsive web applications
              using front-end and back-end technologies, including RESTful APIs,
              Node.js, MongoDB, and SQL.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => opentab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <div className="skills">
                <div className="aboutSkill">
                  <p>HTML & CSS</p>
                  <hr style={{ width: "80%" }} />
                </div>
                <div className="aboutSkill">
                  <p>Java Script</p>
                  <hr style={{ width: "30%" }} />
                </div>
                <div className="aboutSkill">
                  <p>React JS</p>
                  <hr style={{ width: "30%" }} />
                </div>
                <div className="aboutSkill">
                  <p>Node JS</p>
                  <hr style={{ width: "28%" }} />
                </div>
                <div className="aboutSkill">
                  <p>Java</p>
                  <hr style={{ width: "25%" }} />
                </div>
                <div className="aboutSkill">
                  <p>Python</p>
                  <hr style={{ width: "25%" }} />
                </div>
                <div className="aboutSkill">
                  <p>SQL</p>
                  <hr style={{ width: "25%" }} />
                </div>
                <div className="aboutSkill">
                  <p>Mongo BD</p>
                  <hr style={{ width: "25%" }} />
                </div>
                {/* <div className="aboutSkill">
                  <p>Next JS</p>
                  <hr style={{ width: "10%" }} />
                </div> */}
              </div>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              <ul>
                <li>
                  <span>2024 - Current</span>
                  <br />
                  MERN Stack Intern at IROHUB INFOTECH
                </li>
                <li>
                  <span>2021 - 2022</span>
                  <br />
                  Operations Executive at INFOSYS
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>2022 - 2024</span>
                  <br />
                  MCA from Nehru College of Engineering And Research Centre,
                  Thrissur
                </li>
                <li>
                  <span>2017 - 2020</span>
                  <br />
                  BCA from AJK College of Arts And Science, Coimbatore
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
