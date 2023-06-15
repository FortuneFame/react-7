import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { NavbarData } from '../../data';

const Footer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updatedData = NavbarData.map((item) => ({
      ...item,
      id: uuidv4(),
      updatedAt: new Date(),
    }));

    setData(updatedData);
  }, []);

  const handleClick = () => {
    console.log(data);
  };

  return (
    <footer className="d-flex flex-column justify-content-around mb-5 mt-4 shadow p-3 bg-white rounded">
      <h1 className='text-center'>Footer</h1>
      <Button variant="primary" onClick={handleClick}>Log Data</Button>
    </footer>
  );
};

export default Footer;
