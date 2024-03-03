import React from 'react'; // Import React
import '../assets/styles/Plans.css'; // Import CSS file for styling plans
import '../assets/styles/Cards.css'; // Import CSS file for styling cards

// Plan component to display membership plan details
const Plan = ({ title, price, classes, access, discount, extra, link }) => {
  return (
    <div className="Cards"> {/* Main container for the plan */}
      <header>
        <p className="card-title">{title}</p> {/* Title of the plan */}
        <h1 className="card-price">{price}</h1> {/* Price of the plan */}
      </header>
      {/* Features section */}
      <div className="card-features">
        <div className="card-access-allowed">Access: {access}</div> {/* Access details */}
        <div className="card-classes">{classes}</div> {/* Classes included */}
        <div className="card-extra">{extra}</div> {/* Extra benefits */}
        <div className="card-discount">{discount}</div> {/* Discount details */}
      </div>
      {/* Button to purchase the plan */}
      <a href={link} className="card-btn" target='blank' > {/* Link to the purchase page */}
        GET NOW {/* Button text */}
      </a>
    </div>
  );
};

export default Plan; // Exporting the Plan component for use in other parts of the application

