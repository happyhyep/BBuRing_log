
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import Map from './pages/Map';
import Home from './pages/Home';
import Router from './components/Router';

function App() {
  return (
    <div style={{
      background: "#E9AC06",
      color: "#F5F1F1",
    }}>
      <Router></Router>
      <div className='map' style={{
        width: "50px",
        height: "50px"
      }}>
      </div>
    </div>
  );
}

export default App;
