import "./Projects.css";
import Work_1 from "../../assets/Netflix_project.png";
import Work_2 from "../../assets/Xomato.png";
import Work_3 from "../../assets/Gym.png";
import Work_4 from "../../assets/GeminiClone.png";

const Projects = () => {
  return (
    <div className="portfolio" id="projects">
      <div className="portfolio_container">
        <h1 className="subtitle">My Work</h1>
        <div className="work_list">
          <div className="work">
            <img src={Work_1} alt="" />
            <div className="layer">
              <h3>Netflix Clone</h3>
              <p>
                Netflix App: Developed with React JS, integrating the TMDB API
                for a comprehensive movie and TV show catalog. Implemented
                Firebase Authentication for secure user login and registration.
              </p>
              <a
                href="https://github.com/Akhilpraka5h/Netflix_clone"
                target="_blanks"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={Work_2} alt="" />
            <div className="layer">
              <h3>Xomato</h3>
              <p>
                Xomato: A React.js project inspired by Zomato, serving as a
                full-fledged food delivery website. Integrated Stripe API for
                secure payment processing. Utilized MongoDB for robust and
                scalable backend handling user data, orders, and restaurant
                details.
              </p>
              <a
                href="https://xomato-fooddelivery-frontend.onrender.com"
                target="_blank"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={Work_3} alt="" />
            <div className="layer">
              <h3>Fitness Web</h3>
              <p>
                Showcase gym services, class schedules, trainer profiles, and
                membership options. Features a sleek, modern design with a
                user-friendly interface for easy navigation. Allows users to
                book classes, view workout plans, and access fitness resources
                effortlessly.
              </p>
              <a
                href="https://github.com/Akhilpraka5h/gym-website"
                target="_blank"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={Work_4} alt="" />
            <div className="layer">
              <h3>Gemini Ai</h3>
              <p>
                Gemini AI Clone: Built with React.js and powered by the Gemini
                API for an interactive chat experience across all devices.
                Provides real-time, AI-driven conversations with a sleek design
                and responsive layout.
              </p>
              <a href="https://chatbot-gemini-ai.netlify.app" target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project_showMore">
          <a
            href="https://github.com/Akhilpraka5h"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            See more
          </a>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Projects;
