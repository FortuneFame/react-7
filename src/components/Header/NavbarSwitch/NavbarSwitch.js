import React from 'react';
import { Button } from 'react-bootstrap';

const NavbarSwitch = ({ isOpen, onToggle }) => {
  return (
    <div className="d-flex justify-content-around mt-4 mb-2">
      <Button onClick={onToggle}>{isOpen ? 'Close Navbar' : 'Open Navbar'}</Button >
    </div>
  );
};

export default NavbarSwitch;
