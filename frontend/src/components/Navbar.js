import React, { useState } from 'react'; // Import React and useState hook
import Logo from '../assets/images/fx_logo.png'; // Import logo image
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon component from Material-UI
import '../assets/styles/Navbar.css'; // Import CSS file for styling

// Navbar component to display navigation links and logo
function Navbar() {
  
  // State to control the visibility of navigation links
  const [openLinks, setOpenLinks] = useState(false);
  
  // Function to toggle the visibility of navigation links
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  
  return (
    <div className='navbar'> {/* Main container for the navbar */}
        <div className='leftSide' id={openLinks ? "open" : "close"}> {/* Container for logo and hidden links */}
            <img src={Logo} alt='logo' /> {/* Logo image */}
            <div className='hiddenLinks'> {/* Container for hidden links */}
              {/* Navigation links */}
              <Link to="/">Home</Link>
              <Link to="/aboutUs">About Us</Link>
              <Link to="/theGym">The Gym</Link>
              <Link to="/memberships">Memberships</Link>
            </div>
        </div>
        <div className='rightSide'> {/* Container for visible links and menu icon */}
          {/* Navigation links */}
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/theGym">The Gym</Link>
          <Link to="/memberships">Memberships</Link>
          <button onClick={toggleNavbar}> {/* Button to toggle navigation links */}
            <MenuIcon/> {/* Menu icon */}
          </button>
        </div>
    </div>
  )
}

export default Navbar; // Exporting the Navbar component for use in other parts of the application
