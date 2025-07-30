import Navbar from "./Navbar";
import Base from "./Base";
import './Projects.css';
function Projects(){
    return(
        <div className="project_container">
            <Navbar/>
            <div className="projects_main_container">
                <h2 className="project_heading">Projects</h2>
                <div className="cards_grid">
          <div className="card_1">
            <h1 className="card_heading">Summer bootcamp</h1>
            <p className="card_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>
          </div>
          <div className="card_1">
            <h1 className="card_heading">Summer bootcamp</h1>
            <p className="card_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>
          </div>
          <div className="card_1">
            <h1 className="card_heading">Summer bootcamp</h1>
            <p className="card_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>
          </div>
          <div className="card_1">
            <h1 className="card_heading">Summer bootcamp</h1>
            <p className="card_content">this a bootcamp conducted by the Data analytics club of manipal. this is a two 
                months long bootcamp that teached
                 many domain like aiml, dav, 
                web development,app development and dsa. it is conducted in the months of june and july. the seniors mentor at each step.</p>
          </div>
         
          
         
      </div>

            </div>
            <Base/>
        </div>
    )


}
export default Projects