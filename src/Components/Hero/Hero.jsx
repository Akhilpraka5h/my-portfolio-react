import "./Hero.css";
import profileImg from "../../assets/Profile_Hero.png";
import resume from "../../assets/Akhil resume_portfolio.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profileImg} alt="" />
      <h1>
        <span>I'm Akhil,</span> Passionate Software Engineer.
      </h1>
      <p>A Passionate Software Engineer and a recent MCA Graduate from KTU.</p>
      <div className="heroAction">
        <div className="heroConnect">
          <AnchorLink href="#contact" className="anchorLink">
            Connect with me
          </AnchorLink>
        </div>
        <div className="heroResume">
          <a href={resume}>Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
