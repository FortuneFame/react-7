import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'; 

import Header from './components/Header';
import NavbarSwitch from './components/Header/NavbarSwitch';
import HistoryPerson from './components/HistoryPerson';
import Caching from './components/Caching';
import Input from './components/Input';
import Footer from './components/Footer';


const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    if (!isNavbarOpen) {
      console.log(`I was closed at ${moment().format()}`);
    }
  }, [isNavbarOpen]);

  return (
    <div>
      <NavbarSwitch isOpen={isNavbarOpen} onToggle={handleNavbarToggle} />
      {isNavbarOpen && <Header onNavbarClose={() => setIsNavbarOpen(false)} />} 
      <HistoryPerson />
      <Caching />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
