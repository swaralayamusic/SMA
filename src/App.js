import logo from './logo.svg';
import Footer from './components/Footer';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Achievements from './components/Achievements';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SMA" element={<Home/>}/>
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
