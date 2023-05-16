import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Games from './Pages/Games';
import Ranking from './Pages/Ranking';
import Login from './Pages/Login';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
