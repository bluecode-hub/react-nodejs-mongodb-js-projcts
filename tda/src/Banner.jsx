import './hero.css';
import banner_photo from './banner.jpg'; 
function Banner() {
  return (
    <section className="hero_section">
        <img src={banner_photo} className="banner_photo" alt="image not available"/>
    
      <div className="writing">
        <h1 className="TDA">TDA</h1>
        <h1 className="hero_content">The official Data Science club of <br></br>MIT Manipal</h1>
      </div>

      <div className="hero_buttons">
        <button className="hero_button_1">Join Us</button>
        <button className="hero_button_2">View Events</button>
      </div>
    </section>

  );
}

export default Banner;
