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
                Netflix App is a dynamic web application built using React JS,
                showcasing my proficiency in modern web development. Leveraging
                the powerful TMDB (The Movie Database) API, the app provides
                users with an extensive catalog of movies and TV shows, complete
                with detailed information and engaging visuals. The application
                incorporates Firebase Authentication to ensure secure and
                seamless user login and registration. This integration not only
                enhances the user experience but also demonstrates my ability to
                implement robust authentication systems.
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
                Xomato is an innovative React.js project designed to serve as a
                full-fledged food delivery website, drawing inspiration from the
                popular Zomato platform. This project integrates the powerful
                Stripe API for seamless and secure payment processing, ensuring
                a smooth transaction experience for users. The backend is
                powered by MongoDB, providing a robust and scalable database
                solution to handle user data, order information, and restaurant
                details efficiently. Xomato combines a modern, responsive user
                interface with efficient functionality, making it an ideal
                solution for aspiring entrepreneurs looking to launch their own
                food delivery service.
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
                Fitness Web is designed to provide an optimal viewing experience
                across all devices, from desktops to smartphones. Featuring a
                sleek and modern design, it showcases gym services, class
                schedules, trainer profiles, and membership options. The
                user-friendly interface ensures easy navigation, allowing
                visitors to book classes, view workout plans, and access fitness
                resources effortlessly. Whether users are at home or on the go,
                our responsive webpage ensures they stay connected and engaged
                with our gym offerings.
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
                Gemini Ai clone, built with React.js and powered by the Gemini
                API, delivers an interactive and intuitive chat experience
                across all devices. This modern web app combines the flexibility
                of React with the robust capabilities of Gemini API to provide
                real-time, AI-driven conversations. The sleek design and
                responsive layout ensure seamless usability on desktops,
                tablets, and smartphones, making it easy for users to engage
                with ChatGPT anytime, anywhere.
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
