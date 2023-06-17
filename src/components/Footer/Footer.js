import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { NavbarData } from '../../data';
import moment from 'moment'; 

const Footer = () => {
  const [data, setData] = useState([]);

  const handleClick = () => {
    const updatedData = data.map((item) => ({
      ...item,
      id: uuidv4(),
      updatedAt: moment().format(),
    }));

    setData(updatedData);
    console.log(updatedData);
  };

  useEffect(() => {
    setData(NavbarData);
    return () => {
      console.log('Component will unmount');
    }
  }, []);

  return (
    <footer className="d-flex flex-column justify-content-around mb-5 mt-4 shadow p-3 bg-white rounded">
      <h1 className='text-center'>Footer</h1>
      <Button variant="primary" onClick={handleClick}>Log Data</Button>
    </footer>
  );
};

export default Footer;