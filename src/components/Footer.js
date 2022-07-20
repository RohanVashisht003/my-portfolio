import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
// import '../css/Footer.css';


const myStyle = {
  color:'white'
}

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    
  return (
  
     <Container fluid className='footer'>
      <Row>
        <Col md="4" className="footer-copywright">
         <h4>Designed and Developed by Rohan Sharma</h4>
        </Col>
        <Col md="4" className="footer-copywright">
         <h6>Copyright © {year} RS</h6>
        </Col>

        <Col md="4" className="footer-body">
            <ul className="footer-icons">
            <li className="footer-social-icons">
                <a
                  href="https://github.com/RohanVashisht003"
                  target="_blank"
                  rel="noreferrer"
                  style={myStyle}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="footer-social-icons">
                <a
                  href="https://www.linkedin.com/in/rohan-sharma-937283167"
                  target="_blank"
                  rel="noreferrer"
                  style={myStyle}
                >
                 <AiFillLinkedin />
                </a>
         </li>

         
         <li className="footer-social-icons">
                <a
                  href="mailto:rnmm003@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={myStyle}
                >
                 <AiOutlineMail />
                </a>
         </li>
            </ul>
        </Col>
      </Row>
     </Container>
   
  )
}


export default Footer