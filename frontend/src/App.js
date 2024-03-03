import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TheGym from './pages/TheGym';
import Memberships from './pages/Memberships';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// Importing necessary routing components from react-router-dom

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/theGym" element={<TheGym/>}/>
          <Route path="/memberships" element={<Memberships/>}/>
        </Routes>
        <Footer/>
      </Router>  
    </div>
  );//Each <Route> component specifies a path and the corresponding component to render when that path is matched.
}
export default App;
