import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../css/Header.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {AiFillContainer,AiOutlineHome,AiOutlineFundProjectionScreen,AiOutlineUser} from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  const[expand, setExpand] = useState(false);
  const[nav, setNavbar] = useState(false);

  function scrollHandler(){
    if(window.scrollY >= 20){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll',scrollHandler);

  return (
   <div className='main-navbar-container'>
    <Navbar className={nav ? "sticky" : "navbar"}  expand="md" fixed='top' expanded={expand}>
      <Container>
      <Navbar.Brand href="/" className="d-flex logo-brand">
          <span >&lt;</span>RS<span>&nbsp;/&gt;</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {
            setExpand(expand ? false : "expanded");
          }}>
          <span></span>
          <span></span>
          <span></span>
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className='ms-auto'>
        <Nav.Item>
          <Nav.Link as={Link} to='/' onClick={() => setExpand(false)}>
           <AiOutlineHome className='headerIcon'/><span >Home</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/about' onClick={() => setExpand(false)}>
           <AiOutlineUser className='headerIcon' />
           <span >About Me</span>
           
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/project' onClick={() => setExpand(false)}>
          <AiOutlineFundProjectionScreen className='headerIcon'/>
          <span >Projects</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/resume' onClick={() => setExpand(false)}>
          <AiFillContainer className='headerIcon' />
          <span>Resume</span>
          </Nav.Link>
        </Nav.Item>
       </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  )
}

export default Header;