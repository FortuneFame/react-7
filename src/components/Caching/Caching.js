import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';

const Caching = () => {
  const [rand1, setRand1] = useState(0);
  const [rand2, setRand2] = useState(0);

  const generateRand1 = useCallback(() => {
    return Math.floor(Math.random() * 5) + 1;
  }, []);

  const generateRand2 = useMemo(() => {
    return () => Math.floor(Math.random() * 6) + 15;
  }, []);

  useEffect(() => {
    // console.log(generateRand1);
    // console.log(generateRand2);
  }, [generateRand1, generateRand2]);

  return (
    <div className="d-flex flex-column mb-3 shadow p-3 bg-white rounded">
      <div>
        <h1 className='text-center'>Random number generator</h1>
      </div>
      <div className='d-flex justify-content-center'>
        <Button variant="primary" onClick={() => setRand1(generateRand1())} className="mx-2">Rand1: {rand1}</Button>
      <Button variant="secondary" onClick={() => setRand2(generateRand2())} className="mx-2">Rand2: {rand2}</Button>
      </div>
    </div>
  );
};

export default Caching;
