import React from 'react';
// import '../css/About.css';
import { Container, Row, Col, Card} from "react-bootstrap";
import aboutImg from '../static/images/aboutimg.jpg';
import {BiCycling} from 'react-icons/bi';
import {SiYourtraveldottv} from 'react-icons/si';
import {GiTennisRacket} from 'react-icons/gi';
import myselfImg from '../static/images/myself-img.png';
import dartImg from '../static/images/dart.png';
import gearsImg from '../static/images/gears.png';


function About() {
 return (
  <div className='about-main-container'>
    <Container fluid className='about-section'>
      <Container className='about-content'>
        <Row className='row-1'>
          <Col md={7} className='subCol-1'>
            <h1 className='heading-h1'>About <strong className='color-text'>MYSELF</strong>
              <img src={myselfImg} alt='myself cover image'/>
            </h1>
              <Card className="quote-card-view">
                <Card.Body>
                  <div>
                    <p>
                      Hi Everyone,
                      myself Rohan Sharma from Delhi, India.
                      <br/>
                      <br/>
                      I completed my <span>Bachelor of Technology</span> in <strong>Computer Science & Engineering</strong>form Dronacharya College Of Engineering, Greater Noida.
                      <br/>
                      <strong>Other than coding, i enjoy</strong>
                    </p>
                    <ul>
                      <li className="about-activity">
                        <BiCycling className='hobby-icon'/>
                        Cycling
                      </li>
                      <li className="about-activity">
                        <SiYourtraveldottv className='hobby-icon'/>
                        Travelling
                      </li>
                      <li className="about-activity">
                        <GiTennisRacket className='hobby-icon'/>
                        Badminton
                      </li>
                    </ul>
                  </div>
              
                </Card.Body>
              </Card>
            
          </Col>

          {/* sub column 2 */}
          <Col className='subCol-2'>
            <img src={aboutImg} alt="about page pic" className='img-fluid'></img>
          </Col>
         
        </Row>
      </Container>

      {/* container 2 */}
      <Container className='skills-container'>
        <h1 className='heading-h1'>PROFESSIONAL <span>SKILLS</span>
          <img src={dartImg} alt='dart image'/>
        </h1>
        <Row>
          <Col className='skills'>
          <ul className='list-container'>
               {/* html */}
               <li className='cards skill1'>
                <div className='skill-div'>
                  <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" className='skill-actual-icon' alt='html image'/>
                  <p>
                    HTML
                  </p>
                </div>
               </li>

                {/* css */}
              <li className='cards skill2'>
                <div className='skill-div'>
                  <img src="https://img.icons8.com/color/480/000000/css3.png" className='skill-actual-icon' alt='css image'/>
                  <p>
                    CSS
                  </p>
                </div>
              </li>

              <li className='cards skill3'>
                  <div className='skill-div'>
                    <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" className='skill-actual-icon' alt='javascript image'/>
                    <p>
                      JAVASCRIPT
                    </p>
                  </div>
              </li>

              <li className='cards skill4'>
                  <div className='skill-div'>
                      <img src="https://img.icons8.com/color/480/000000/nodejs.png" className='skill-actual-icon' alt='nodejs image'/>
                        <p>
                          NODE JS
                        </p>
                    </div>
              </li>

              <li className='cards skill5'>
                <div className='skill-div'>
                  <img src="https://img.icons8.com/color/480/000000/mongodb.png" className='skill-actual-icon'alt='mongo db image'/>
                  <p>
                    MONGO DB
                  </p>
                </div>
              </li>

              <li className='cards skill6'>
                <div className='skill-div'>
                  <img src="https://img.icons8.com/color/480/000000/mysql-logo.png" className='skill-actual-icon' alt='sql image'/>
                  <p>
                    MY SQL
                  </p>
                </div>
              </li>

              <li className='cards skill7'>
                <div className='skill-div'>
                  <img src="https://img.icons8.com/color/480/000000/react-native.png" className='skill-actual-icon' alt='react image'/>
                  <p>
                    REACT JS
                  </p>
                </div>
              </li>

              <li className='cards skill8'>
                <div className='skill-div'>
                  <img src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' className='skill-actual-icon' style={{borderRadius: '50%'}} alt='express image'/>
                  <p>
                    EXPRESS JS
                  </p>
                </div>
              </li>

              <li className='cards skill9'>
                <div className='skill-div'>
                <img src="https://img.icons8.com/color/480/000000/firebase.png" className='skill-actual-icon' alt='firebase image'/>
                <p>
                  FIREBASE
                </p>
                </div>
              </li>

              <li className='cards skill10'>
                <div className='skill-div'>
                <img src="https://img.icons8.com/ios-glyphs/480/000000/github.png"className='skill-actual-icon' alt='github image'/>
                <p>
                  GITHUB
                </p>
                </div>
              </li>


              <li className='cards skill11'>
                <div className='skill-div'>
                <img src="https://img.icons8.com/color/480/000000/java-coffee-cup-logo--v1.png" className='skill-actual-icon' alt='java image'/>
                <p>
                  JAVA
                </p>
                </div>
              </li>
          </ul>
         </Col>
        </Row>
       </Container>
       <Container className='skills-container'>
       <h1 className='heading-h1'>TOOLS <img src={gearsImg}/></h1>
       <Row>
        <Col className='skills'>
        <ul className='list-container'>
          <li className='cards'>
            <div className='skill-div'>
            <img src="https://img.icons8.com/color/480/000000/visual-studio--v1.png" className='skill-actual-icon' alt='vscode image'/>
            <p>
            VS Code
            </p>
            </div>
          </li>

          <li className='cards'>
            <div className='skill-div'>
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" className='skill-actual-icon' alt='postman image'/>
            <p>
            Postman
            </p>
            </div>
          </li>

          <li className='cards'>
            <div className='skill-div'>
            <img src="https://img.icons8.com/color/480/000000/heroku.png" className='skill-actual-icon' alt='heroku image'/>
            <p>
            Heroku
            </p>
            </div>
          </li>

          <li className='cards'>
            <div className='skill-div'>
            <img src="https://user-images.githubusercontent.com/11943860/46922529-b28cdc80-cfe0-11e8-9aec-0091161d3599.png" className='skill-actual-icon' alt='eclipse image'/>
            <p>
            Eclipse
            </p>
            </div>
          </li>

          <li className='cards'>
            <div className='skill-div'>
            <img src="https://img.icons8.com/color/480/000000/git.png" className='skill-actual-icon' alt='git image'/>
            <p>
            GIT
            </p>
            </div>
          </li>

          <li className='cards'>
            <div className='skill-div'>
            <img src="https://img.icons8.com/color/480/000000/npm.png" className='skill-actual-icon' alt='npm image'/>
            <p>
            NPM
            </p>
            </div>
          </li>
        </ul>
        </Col>
       </Row>
       </Container>
      </Container>
    </div>
  )
}

export default About