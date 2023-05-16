import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Components/Navbar/Navbar.js';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
