import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
const resumeLink = 'https://raw.githubusercontent.com/RohanVashisht003/my-portfolio/main/src/static/documents/Rohan.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




function Resume() {
  const [width, setWidth] = useState(1100);


  useEffect(() => {
    setWidth(window.innerWidth);
  },[]);

  return (
    <div className='resume-main-container'>
       <Container  fluid className="resume-section">
        <Container className='resume-content'>
            <Row style={{padding: "10px", textAlign:'center',
      alignItems:'center', justifyContent:'center'}}>
        <Col  md={7}
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "30px"}}>
        <Button
            variant="warning"
            href={resumeLink}
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> 
        </Col>
            </Row>
            <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.5} />
          </Document>
        </Row>

        <Row style={{padding: "10px", textAlign:'center',
      alignItems:'center', justifyContent:'center'}}>
        <Col  md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "50px"}}>
        <Button
            variant="warning"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> 
        </Col>
            
            </Row>
        
        </Container>
       </Container> 
    </div>
  )
}

export default Resume;