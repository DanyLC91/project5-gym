import React from 'react'; // Importing React library
import '../assets/styles/TheGym.css'; // Importing CSS file for styling
import Trainer from '../assets/images/gym-trainer.png'; // Importing image assets
import Trainers from '../assets/images/gym-trainers-team.png';

// TheGym component to display information about the gym and classes offered
function TheGym() {
    return (
        <div className="container"> {/* Main container for TheGym component */}
            <div className="imageBlock" id='first'> {/* Container for image block */}
                <img src={Trainer} alt="trainer" /> {/* Image of gym trainer */}
            </div>
            <div className="textBlock" id='first'> {/* Container for text block */}
                <div className="text"> {/* Container for text content */}
                    <h1> The Gym</h1><br /> {/* Heading for gym section */}
                    <p>
                        Our gym boasts state-of-the-art facilities and a comprehensive range of cutting-edge machinery to elevate your
                        fitness journey. Step into our spacious workout area, equipped with a variety of cardio machines including
                        treadmills, ellipticals, and stationary bikes to get your heart pumping and calories burning.</p><br /> {/* Paragraph describing gym facilities */}
                    <p>For strength training,
                        we offer a wide selection of free weights, resistance machines, and functional training equipment to target every
                        muscle group effectively. Additionally, our dedicated spaces for group fitness classes, yoga, and stretching ensure
                        there's ample room for diverse workout routines. Experience the pinnacle of fitness innovation and convenience at
                        our gym.
                    </p> 
                </div>
            </div>
            <div className="textBlock"> {/* Container for text block */}
                <div className="text"> {/* Container for text content */}
                    <h1>Classes</h1><br /> {/* Heading for classes section */}
                    <ul> {/* Unordered list of classes */}
                        <li>Cardio Kickboxing: A high-energy workout combining martial arts techniques with cardio exercises.</li><br /> {/* List item describing cardio kickboxing class */}
                        <li>Boxing Fitness: Boxing drills and techniques combined with cardio and strength exercises.</li><br /> {/* List item describing boxing fitness class */}
                        <li>Cycling Fusion: Indoor cycling classes combined with elements of strength training or yoga for a comprehensive
                            workout</li><br /> 
                        <li>TRX Suspension Training: Utilizing suspension straps to perform bodyweight exercises for strength, stability, and
                            flexibility</li><br /> 
                        <li>HIIT (High-Intensity Interval Training): Intense bursts of exercise followed by short rest periods for calorie
                            burning and cardiovascular fitness.</li><br /> 
                        <p>And many more...</p> 
                    </ul>
                </div>
            </div>
            <div className="imageBlock"> {/* Container for image block */}
                <img src={Trainers} alt="trainers" /> {/* Image of gym trainers team */}
            </div>
        </div >
    );
}
export default TheGym; // Exporting the TheGym component for use in other parts of the application
