import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Rowa from './components/Rowa.jsx';
import Plomeria from './components/Plomeria';
import CalefonTermotanque from './components/CalefonTermotanque';


import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rowa" element={<Rowa />} />
        <Route path="/plomeria" element={<Plomeria />} />
        <Route path="/calefon-termotanque" element={<CalefonTermotanque />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
