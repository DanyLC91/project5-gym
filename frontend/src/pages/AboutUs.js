import React from 'react'; // Importing React library
import '../assets/styles/About.css'; // Importing CSS file for styling
import AboutIMG from '../assets/images/about-us-img.jpg'; // Importing image asset

// AboutUs component to display information about the fitness center
function AboutUs() {
    return (
        <div className='about'>   {/* Main container for AboutUs component */}
            <div className='aboutRight'>  {/* Container for text content */}
                <h1>About Us</h1>
                <p>
                    At FX Fitness, we believe in empowering individuals to reach their full
                    potential through personalized fitness experiences. Founded in 2004, FX
                    has quickly become a cornerstone of the local fitness community, known 
                    for our dedication to excellence and commitment to our members' well-being.
                </p>
                <br/>
                <p>
                    Our team of certified trainers brings a wealth of expertise and passion 
                    to every workout, whether you're a beginner taking your first steps towards 
                    a healthier lifestyle or an experienced athlete striving for new heights. 
                    We pride ourselves on creating a welcoming and inclusive environment where 
                    everyone feels supported and encouraged to challenge themselves.
                </p>
                <br/>
                <p>
                    At FX, it's not just about lifting weights or running on a treadmill; it's 
                    about discovering what your body is capable of and pushing past your limits 
                    to achieve your goals. From dynamic group fitness classes to personalized 
                    one-on-one training sessions, we offer a variety of programs tailored to meet 
                    your unique needs and preferences.
                </p>
                <br/>
                <p>
                    Join us at FX Fitness and experience the difference firsthand. Together, we'll 
                    redefine what it means to be fit and inspire each other to live life to the 
                    fullest.
                </p>
            </div>
            <div className='aboutLeft'>  {/* Container for image */}
                <img src={AboutIMG} alt='description' />  {/* Image displaying about section */}
            </div>
        </div>
    )
}
export default AboutUs
// Exporting the AboutUs component for use in other parts of the application