import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Input = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    const value = inputRef.current.value;
    setInputValue(value);
  };

  const handleClear = () => {
    inputRef.current.value = '';
    setInputValue('');
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  };

  const buttonStyle = {
    margin: '10px',
  };

  return (
    <div>
      <Form className='shadow p-3 mb-5 bg-white rounded'>
        <h1 className='text-center'>Input</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Control className='shadow p-3 bg-white rounded' type="text" ref={inputRef} />
        </Form.Group>
        <div style={buttonContainerStyle}>
          <Button variant="primary" onClick={handleClick} style={buttonStyle}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClear} style={buttonStyle}>
            Clear
          </Button>
        </div>
      </Form>
      {inputValue && <p>Entered value: {inputValue}</p>}
    </div>
  );
};

export default Input;
