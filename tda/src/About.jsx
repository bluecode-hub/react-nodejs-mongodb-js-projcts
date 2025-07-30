import Navbar from "./Navbar";
import about_image from './images.jpeg';
import Base from "./Base";
import './About.css';

function About() {
  return (
    <div className="about_page">
      <Navbar />
      <div className="about_section">
        <h1 className="about_heading">About</h1>

        {/* Wrap the image and paragraph in about_content */}
        <div className="about_content">
          <img
            src={about_image}
            className="about_image"
            alt="About"
          />
          <p className="about_paragraph">
            Data analytics club of MIT Manipal. I am making this website as a
            part of the final task of the TDA bootcamp. I hope to be a part of
            the management committee. So TDA is a club which is the official data
            analytics club of MIT Manipal. They organised a summer bootcamp to teach us 
            skills...
          </p>
        </div>
      </div>
      <Base/>
    </div>
  );
}

export default About;
