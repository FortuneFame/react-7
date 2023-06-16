import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <div>
      <NavbarSwitch isOpen={isNavbarOpen} onToggle={handleNavbarToggle} />
      {isNavbarOpen && <Header />} 
      <HistoryPerson />
      <Caching />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
