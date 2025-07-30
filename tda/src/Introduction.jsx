// Introduction.jsx
import './Introduction.css';
import about_pic from './images.png';
import card_photo from './banner.jpg'; 
import card2_photo from './card2.jpeg';
import card3_photo from './images.jpeg';
import card4_photo from './card4.jpeg';

function Introduction() {
  return (
    <section className="about_brief">
  <h1 className="about_h1">About</h1>

  <div className="about_content">
    <p className="about_p">
      Data analytics club of MIT Manipal. I am making this website as a
      part of the final task of the TDA bootcamp. I hope to be a part of 
      the management committee. So TDA is a club which is the official data 
      analytics club of MIT Manipal. They organised a summer bootcamp to teach us 
      skills.... 
    </p>
    <img src={about_pic} alt="image not available" className="about_pic"/>
  </div>
  <div className="events">
    <h1 className='main_title'>Events</h1>
    <div className="cards_grid_home">
    <div className="cards_home_1">
      <h1 className="card_home_heading">summer bootcamp</h1>
       <img src={card_photo} className="card_photo" alt="image not available"/>
      
      <p className="card_home_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>

    </div>
    <div className="cards_home_1">
      <h1 className="card_home_heading">workshop</h1>
       <img src={card2_photo} className="card_photo" alt="image not available"/>
      
      <p className="card_home_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>

    </div>
    <div className="cards_home_1">
      <h1 className="card_home_heading">tech tatva</h1>
       <img src={card3_photo} className="card_photo" alt="image not available"/>
      
      <p className="card_home_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>

    </div>
    <div className="cards_home_1">
      <h1 className="card_home_heading">competition</h1>
       <img src={card4_photo} className="card_photo" alt="image not available"/>
      
      <p className="card_home_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>

    </div>
    <div className="cards_home_1">
      <h1 className="card_home_heading">career talks</h1>
       <img src={card_photo} className="card_photo" alt="image not available"/>
      
      <p className="card_home_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>

    </div>
    </div>
   
    
  </div>
  <div className="contact_home">
    <h1 className="Join us"></h1>
  
  </div>
</section>

  );
}

export default Introduction;
