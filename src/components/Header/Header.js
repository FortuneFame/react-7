import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { NavbarData } from '../../data';

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <Navbar className='shadow p-3 bg-white rounded' expand="lg">
      <Navbar.Brand href="#home">React</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-around">
        <Nav className='shadow m-2 bg-white rounded'>
          {NavbarData.map((item, index) => (
            <Nav.Link
              key={index}
              href={item.ref}
              onClick={() => handleClick(index)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: activeItem === index ? `#${Math.floor(Math.random() * 16777215).toString(16)}` : 'inherit',
              }}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
