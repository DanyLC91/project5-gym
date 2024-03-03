import React from 'react'; // Import React
import "../assets/styles/Footer.css"; // Import CSS file for styling
import InstagramIcon from '@mui/icons-material/Instagram'; // Import Instagram icon from Material-UI
import FacebookIcon from '@mui/icons-material/Facebook'; // Import Facebook icon from Material-UI
import XIcon from '@mui/icons-material/X'; // Import X icon from Material-UI

// Footer component to display contact information and social media links
function Footer() {
    return (
        <div className='footer'> {/* Main container for the footer */}
            <div className='ContactUs'> {/* Container for contact information */}
                <h1>Contact Us</h1> {/* Header */}
                <p><br /> {/* Contact information */}
                    123 Grand Avenue<br />
                    Cityville, State 12345<br />
                    Phone: (555) 123-4567<br />
                    Email: info@fxfitness.com<br />
                    Hours of Operation:<br />
                    Monday-Friday: 6:00am - 10:00pm<br />
                    Saturday-Sunday: 8:00am - 8:00pm
                </p>
            </div>
            <div className='SocialMedia'> {/* Container for social media icons */}
                <a href="https://www.instagram.com" title="instagram" target="_blank" rel="noreferrer"> {/* Instagram link */}
                    <InstagramIcon /> {/* Instagram icon */}
                </a>
                <a href="https://www.facebook.com" title="facebook" target="_blank" rel="noreferrer"> {/* Facebook link */}
                    <FacebookIcon /> {/* Facebook icon */}
                </a>
                <a href="https://twitter.com/" title="X" target="_blank" rel="noreferrer"> {/* Twitter link */}
                    <XIcon /> {/* X icon */}
                </a>
            </div>
        </div>
    )
}

export default Footer; // Exporting the Footer component for use in other parts of the application
