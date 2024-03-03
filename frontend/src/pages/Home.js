import React from 'react';
import BannerImage from '../assets/images/home_banner.jpg'; // Importing the banner image
import "../assets/styles/Home.css"; // Importing the CSS file for styling

function Home() {
  return (
    <div className='home' style ={{ backgroundImage: `url(${BannerImage})`}}>
      {/* Main container with background image */}
      <div className='headerContainer'>
        <h1>Rise</h1>
        <h1>Above</h1>
        <h1>The</h1>
        <h1>Challenge</h1>
      </div>
    </div >
  )
}

export default Home