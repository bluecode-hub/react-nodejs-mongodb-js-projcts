import Navbar from "./Navbar";
import './Events.css';
import Base from "./Base";

function Events(){

   return(
    <div className="events_page">
      <Navbar />
      <h1 className="events_heading">Events </h1>
      <div className="cards_grid">
          <div className="card_1">
            <h1 className="card_heading">Summer bootcamp</h1>
            <p className="card_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>
          </div>
          <div className="card_2">
            <h1 className="card_heading">tech tatva</h1>
            <p className="card_content">we conduct events duting teh tatva events like data manipulation
                 and other events which are the bes events conducted in manipal. last years it was a blast </p>
          </div>
           <div className="card_3">
            <h1 className="card_heading">Workshop</h1>
            <p className="card_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>
            
          </div>
          <div className="card_4">
            <h1 className="card_heading">hckathon</h1>
            <p className="card_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>
            
          </div>
          <div className="card_5">
            <h1 className="card_heading">mentoring</h1>
            <p className="card_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>
            
          </div>
      </div>
      <Base/>
      
    </div>
   
    
   )


}
export default Events;