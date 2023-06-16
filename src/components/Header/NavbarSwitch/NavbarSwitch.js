import React from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';

const NavbarSwitch = ({ isOpen, onToggle }) => {
  React.useEffect(() => {
    if (!isOpen) {
      console.log(`Navbar was closed at ${moment().format()}`);
    }
  }, [isOpen]);

  return (
    <div className="d-flex justify-content-around mt-4 mb-2">
      <Button onClick={onToggle}>{isOpen ? 'Close Navbar' : 'Open Navbar'}</Button>
    </div>
  );
};

export default NavbarSwitch;
