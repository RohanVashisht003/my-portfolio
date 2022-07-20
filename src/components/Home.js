import React from 'react';
// import '../css/Home.css';
import homeImg from '../static/images/homeimg.png';
import myImg from '../static/images/avatar.svg'
import { Container,Row,Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import Typewriter from "typewriter-effect";

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Home() {
  return (
    <div className='home-main-container'>
     <Container fluid className="home-section" id="home">
   
      <Container className='home-content'>
       <Row>
        <Col md={7} className='home-header'>
          <h1 style={{paddingBottom:15}} className='heading'>
            Hi There! {" "}
            <span className='wave' role='img' aria-labelledby='wave'>
            👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'M
            <strong className="main-name"> ROHAN SHARMA</strong>
          </h1>

          <div className='typewriter-div'>
                <Typewriter options={{strings:['Software Developer',
                'MERN Stack Developer'],
                autoStart:true,
                loop:true,
                deleteSpeed:50}}/>
          </div>
        </Col>
        <Col md={5} style={{paddingBottom:20}}>
         <img
          src={homeImg}
          alt="Home pic"
          className='img-fluid'
          style={{maxHeight:'800px'}}></img>
        </Col>
       </Row>
      </Container>
      <Container className='icons-main-container myAvatar'>
       <Row>
        <Col>
         <Tilt>
          <img src={myImg} className='img-fluid' alt='avatar' />
         </Tilt>
        </Col>
       </Row>
        <Row>
         <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
        <ul className="home-about-social-links">
          <li className="social-icons">
                <a
                  href="https://github.com/RohanVashisht003"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
          </li>

          <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohan-sharma-937283167"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                 <AiFillLinkedin />
                </a>
         </li>

         
         <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohan-sharma-937283167"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                 <AiFillLinkedin />
                </a>
         </li>
        </ul>
         </Col> 
        </Row>
      </Container>
     </Container>
    </div>
  )
}

export default Home