import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../css/Project.css';
import Particle from './Particle';


function Project() {
  return (
    <div className='main-project-container'>
     <Container fluid className='project-section'>
    
      <Container className='project-content'>
       <Row style={{padding: "10px", textAlign:'center'}}>
        <Col style={{justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px"}}>
         <h1>PROJECTS</h1>
         <p>Here are a few projects I have worked on</p>
          <ul className='project-card-container'>

            {/* project 1 */}
          <a href='https://bit.ly/3AimlBG' target={'_blank'}>
           <li className='project-card'>
             <div className='card-body'>
                <h3 className='project-name'>Authentication-App</h3>
                <p className='project-desc'>
                An application to authenticate user.
                </p>
                <br></br>
                <p><strong style={{marginRight:20}}>TechStack:-</strong>
                {/* html */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
                HTML
            </p>
                </div>
                {/* css */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/css3.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              CSS
            </p>
                </div>
                {/* js */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              JAVASCRIPT
            </p>
                </div>
                {/* node js */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/nodejs.png"  className='techstack-icon'/>
                <p style={{fontSize:'0.6em'}}>
                NODE JS
                </p>
                </div>
                {/* mongo db */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/mongodb.png"  className='techstack-icon'/>
                <p style={{fontSize:'0.6em'}}>
                MONGO DB
                </p>
                </div>
                {/* express js */}
                <div className='techstack-div'>
                <img src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'  className='techstack-icon' style={{borderRadius: '50%'}}/>
                <p style={{fontSize:'0.6em'}}>
                EXPRESS JS
                </p>
                </div>
            </p>
             </div>
           </li>
           </a>


           {/* project 2 */}
           <a href='https://github.com/RohanVashisht003/Ipod' target={'_blank'}>
           <li className='project-card'>
             <div className='card-body'>
                <h3 className='project-name'>Ipod</h3>
                <p className='project-desc'>
                A react based replica of Apple ipod in which a user can use various functionalities like play music, change wallpaper, change theme, etc.
                </p>
                <br></br>
                <p><strong style={{marginRight:20}}>TechStack:-</strong>
                {/* html */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
                HTML
            </p>
                </div>
                {/* css */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/css3.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              CSS
            </p>
                </div>
                {/* js */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              JAVASCRIPT
            </p>
                </div>

                {/*react js  */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/react-native.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              REACT JS
            </p>

            </div>
            </p>
             </div>
           </li>
           </a>
         
         {/* project 3 */}
         <a href='https://github.com/RohanVashisht003/Hospital-API' target={'_blank'}>
           <li className='project-card'>
             <div className='card-body'>
                <h3 className='project-name'>Patients-API</h3>
                <p className='project-desc'>
                An API to keep track of patients and doctors
                </p>
                <br></br>
                <p><strong style={{marginRight:20}}>TechStack:-</strong>
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
                HTML
            </p>
                </div>
                {/* css */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/css3.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              CSS
            </p>
                </div>
                {/* js */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              JAVASCRIPT
            </p>
                </div>
                {/* node js */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/nodejs.png"  className='techstack-icon'/>
                <p style={{fontSize:'0.6em'}}>
                NODE JS
                </p>
                </div>
                {/* mongo db */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/mongodb.png"  className='techstack-icon'/>
                <p style={{fontSize:'0.6em'}}>
                MONGO DB
                </p>
                </div>
                {/* express js */}
                <div className='techstack-div'>
                <img src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'  className='techstack-icon' style={{borderRadius: '50%'}}/>
                <p style={{fontSize:'0.6em'}}>
                EXPRESS JS
                </p>
                </div>
            </p>
             </div>
           </li>
         </a>


         {/* project 4 */}
         <a href='https://github.com/RohanVashisht003/MealApp' target={'_blank'}>
           <li className='project-card'>
             <div className='card-body'>
                <h3 className='project-name'>Food Voyager</h3>
                <p className='project-desc'>
                A web application in which a user can search his/her favourite dishes and also mark them as favourite.
                </p>
                <br></br>
                <p><strong style={{marginRight:20}}>TechStack:-</strong>
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
                HTML
            </p>
                </div>
                {/* css */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/css3.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              CSS
            </p>
                </div>
                {/* js */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              JAVASCRIPT
            </p>
                </div>
            </p>
             </div>
           </li>
         </a>

         {/* project 5 */}
         <a href='https://github.com/RohanVashisht003/Interview-Cell' target={'_blank'}>
           <li className='project-card'>
             <div className='card-body'>
                <h3 className='project-name'>Interview Cell</h3>
                <p className='project-desc'>
                An application to keep track of student's placements.
                </p>
                <br></br>
                <p><strong style={{marginRight:20}}>TechStack:-</strong>
                {/* html */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
                HTML
            </p>
                </div>
                {/* css */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/css3.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              CSS
            </p>
                </div>
                {/* js */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              JAVASCRIPT
            </p>
                </div>
                {/* node js */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/nodejs.png"  className='techstack-icon'/>
                <p style={{fontSize:'0.6em'}}>
                NODE JS
                </p>
                </div>
                {/* mongo db */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/mongodb.png"  className='techstack-icon'/>
                <p style={{fontSize:'0.6em'}}>
                MONGO DB
                </p>
                </div>
                {/* express js */}
                <div className='techstack-div'>
                <img src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'  className='techstack-icon' style={{borderRadius: '50%'}}/>
                <p style={{fontSize:'0.6em'}}>
                EXPRESS JS
                </p>
                </div>
            </p>
             </div>
           </li>
         </a>

         {/* project 6 */}
         <a href='https://github.com/RohanVashisht003/social-app' target={'_blank'}>
           <li className='project-card'>
             <div className='card-body'>
                <h3 className='project-name'>Social App</h3>
                <p className='project-desc'>
                A social media website for commenting, posting and liking.
                </p>
                <br></br>
                <p><strong style={{marginRight:20}}>TechStack:-</strong>
                {/* html */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
                HTML
            </p>
                </div>
                {/* css */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/css3.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              CSS
            </p>
                </div>
                {/* js */}
                <div className='techstack-div'>
            <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" className='techstack-icon'/>
            <p style={{fontSize:'0.6em'}}>
              JAVASCRIPT
            </p>
                </div>
                {/* node js */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/nodejs.png"  className='techstack-icon'/>
                <p style={{fontSize:'0.6em'}}>
                NODE JS
                </p>
                </div>
                {/* mongo db */}
                <div className='techstack-div'>
                <img src="https://img.icons8.com/color/480/000000/mongodb.png"  className='techstack-icon'/>
                <p style={{fontSize:'0.6em'}}>
                MONGO DB
                </p>
                </div>
                {/* express js */}
                <div className='techstack-div'>
                <img src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'  className='techstack-icon' style={{borderRadius: '50%'}}/>
                <p style={{fontSize:'0.6em'}}>
                EXPRESS JS
                </p>
                </div>
            </p>
             </div>
           </li>
         </a>
          </ul>
        </Col>
       </Row>
       <Row style={{padding: "10px", textAlign:'center'}}>
       <Col style={{justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px"}}>
                <Button className='more-btn' target='_blank' href='https://github.com/RohanVashisht003'>More Projects</Button>
        </Col>
       </Row>
      </Container>
     </Container>
    </div>
  )
}

export default Project;