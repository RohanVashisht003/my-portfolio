import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import htmlImg from '../static/images/html.png';
import cssImg from '../static/images/css.png';
import jsImg from '../static/images/javascript.png';
import mongoImg from '../static/images/mongodb.png';
import expressImg from '../static/images/express.png';
import nodeImg from '../static/images/nodejs.png';
import reactImg from '../static/images/react.png';




function Project() {
  return (
    <div className='main-project-container'>
      <Container fluid className='project-section'>
     
        <Container className='project-content'>
          <Row className='row-1'>
            <Col className='projectsubCol-1'>
              <h1>PROJECTS
                <img src='https://cdn3d.iconscout.com/3d/premium/thumb/typing-on-laptop-hand-gesture-5138551-4291089.png' alt='laptop  image'></img>
              </h1>
              <p>Here are a few projects I have worked on</p>
              <ul className='project-card-container'>

                {/* project 1 */}
                <a href='https://bit.ly/3AimlBG' target={'_blank'}>
                  <li className='project-card'>
                    <div className='card-body'>
                      <h3 className='project-name'>Authentication-App</h3>
                      <p className='project-desc'>An application to authenticate user.</p>
                      <br></br>
                      <p><strong>TechStack:-</strong>
                      {/* html */}
                      <div className='techstack-div'>
                      <img src={htmlImg} className='techstack-icon' alt='html image'/>
                      <p>
                          HTML
                      </p>
                      </div>
                      {/* css */}
                      <div className='techstack-div'>
                      <img src={cssImg} className='techstack-icon' alt='css image'/>
                      <p>
                        CSS
                      </p>
                      </div>
                      {/* js */}
                      <div className='techstack-div'>
                      <img src={jsImg}className='techstack-icon'alt='javascript image'/>
                      <p>
                        JAVASCRIPT
                      </p>
                      </div>
                      {/* node js */}
                      <div className='techstack-div'>
                        <img src={nodeImg}  className='techstack-icon'alt='nodejs image'/>
                        <p>
                        NODE JS
                        </p>
                      </div>
                      {/* mongo db */}
                      <div className='techstack-div'>
                      <img src={mongoImg}  className='techstack-icon'alt='mongodb image'/>
                      <p>
                      MONGO DB
                      </p>
                      </div>
                      {/* express js */}
                      <div className='techstack-div'>
                      <img src={expressImg}className='techstack-icon' style={{borderRadius: '50%'}}alt='express image'/>
                      <p>
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
                        <p><strong>TechStack:-</strong>
                        {/* html */}
                        <div className='techstack-div'>
                        <img src={htmlImg} className='techstack-icon' alt='html image'/>
                        <p>
                            HTML
                        </p>
                        </div>
                        {/* css */}
                        <div className='techstack-div'>
                        <img src={cssImg} className='techstack-icon'alt='css image'/>
                        <p >
                          CSS
                        </p>
                        </div>
                        {/* js */}
                        <div className='techstack-div'>
                        <img src={jsImg}className='techstack-icon'alt='javascript image'/>
                        <p>
                          JAVASCRIPT
                        </p>
                        </div>

                        {/*react js  */}
                        <div className='techstack-div'>
                        <img src={reactImg}className='techstack-icon'alt='html image'/>
                        <p>
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
                        <p><strong>TechStack:-</strong>
                        <div className='techstack-div'>
                        <img src={htmlImg} className='techstack-icon'/>
                        <p >
                            HTML
                        </p>
                        </div>
                        {/* css */}
                        <div className='techstack-div'>
                        <img src={cssImg} className='techstack-icon'/>
                        <p>
                          CSS
                        </p>
                        </div>
                        {/* js */}
                        <div className='techstack-div'>
                        <img src={jsImg}className='techstack-icon'/>
                        <p>
                          JAVASCRIPT
                        </p>
                        </div>
                        {/* node js */}
                        <div className='techstack-div'>
                        <img src={nodeImg}  className='techstack-icon'/>
                        <p>
                        NODE JS
                        </p>
                        </div>
                        {/* mongo db */}
                        <div className='techstack-div'>
                        <img src={mongoImg}  className='techstack-icon'/>
                        <p>
                        MONGO DB
                        </p>
                        </div>
                        {/* express js */}
                        <div className='techstack-div'>
                        <img src={expressImg}  className='techstack-icon' style={{borderRadius: '50%'}}/>
                        <p>
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
                        <p><strong>TechStack:-</strong>
                            <div className='techstack-div'>
                            <img src={htmlImg}className='techstack-icon'/>
                            <p>
                                HTML
                            </p>
                            </div>
                            {/* css */}
                            <div className='techstack-div'>
                            <img src={cssImg} className='techstack-icon'/>
                            <p>
                              CSS
                            </p>
                            </div>
                            {/* js */}
                            <div className='techstack-div'>
                            <img src={jsImg} className='techstack-icon'/>
                            <p>
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
                        <p><strong>TechStack:-</strong>
                        {/* html */}
                        <div className='techstack-div'>
                        <img src={htmlImg}className='techstack-icon'/>
                        <p>
                            HTML
                        </p>
                        </div>
                        {/* css */}
                        <div className='techstack-div'>
                        <img src={cssImg} className='techstack-icon'/>
                        <p>
                          CSS
                        </p>
                        </div>
                        {/* js */}
                        <div className='techstack-div'>
                    <img src={jsImg}className='techstack-icon'/>
                    <p>
                      JAVASCRIPT
                    </p>
                        </div>
                        {/* node js */}
                        <div className='techstack-div'>
                        <img src={nodeImg}  className='techstack-icon'/>
                        <p>
                        NODE JS
                        </p>
                        </div>
                        {/* mongo db */}
                        <div className='techstack-div'>
                        <img src={mongoImg}  className='techstack-icon'/>
                        <p>
                        MONGO DB
                        </p>
                        </div>
                        {/* express js */}
                        <div className='techstack-div'>
                        <img src={expressImg}  className='techstack-icon' style={{borderRadius: '50%'}}/>
                        <p>
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
                        <p><strong>TechStack:-</strong>
                        {/* html */}
                        <div className='techstack-div'>
                        <img src={htmlImg} className='techstack-icon'/>
                    <p>
                        HTML
                    </p>
                        </div>
                        {/* css */}
                        <div className='techstack-div'>
                    <img src={cssImg} className='techstack-icon'/>
                    <p>
                      CSS
                    </p>
                        </div>
                        {/* js */}
                        <div className='techstack-div'>
                    <img src={jsImg}className='techstack-icon'/>
                    <p>
                      JAVASCRIPT
                    </p>
                        </div>
                        {/* node js */}
                        <div className='techstack-div'>
                        <img src={nodeImg}  className='techstack-icon'/>
                        <p>
                        NODE JS
                        </p>
                        </div>
                        {/* mongo db */}
                        <div className='techstack-div'>
                        <img src={mongoImg} className='techstack-icon'/>
                        <p>
                        MONGO DB
                        </p>
                        </div>
                        {/* express js */}
                        <div className='techstack-div'>
                        <img src={expressImg} className='techstack-icon' style={{borderRadius: '50%'}}/>
                        <p>
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
       <Row className = 'row-2'>
       <Col className='btn-col'>
                <Button variant='warning' className='more-btn' target='_blank' href='https://github.com/RohanVashisht003'>More Projects</Button>
        </Col>
       </Row>
      </Container>
     </Container>
    </div>
  )
}

export default Project;