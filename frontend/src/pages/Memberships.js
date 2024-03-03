import React, { useState } from 'react'; // Importing React and useState hook from React library
import Plan from "../components/Plans"; // Importing Plan component

function Memberships() {
  // State variable to track whether monthly or three months plan is selected
  const [selectMonthly, setSelectMonthly] = useState(true); 
  console.log(selectMonthly);

  // Define the links based on selectMonthly
  const monthlyLinks = {
    plan1: 'https://buy.stripe.com/test_bIY8AiaHS2nzf5K3cc',
    plan2: 'https://buy.stripe.com/test_4gwdUCaHS9Q19LqcMO',
    plan3: 'https://buy.stripe.com/test_4gwbMu5nyaU58Hm5ko'
  };
  const threeMonthsLinks = {
    plan1: 'https://buy.stripe.com/test_dR6dUCg2c4vHbTy9AB',
    plan2: 'https://buy.stripe.com/test_9AQ3fYdU45zLg9OcMP',
    plan3: 'https://buy.stripe.com/test_5kA5o68zK1jv0aQ005'
  };

  return (
    <div className="Plans"> {/* Main container for Memberships component */}
      <div className="app-container"> {/* Container for the app */}
        {/* Header */}
        <header>
          <h1 className="header-topic">Our Memberships</h1> {/* Heading for the memberships section */}
          <div className="header-row"> {/* Container for header row */}
            <p>3 Months</p> {/* Text for 3 months option */}
            {/* Checkbox for switching between monthly and three months plans */}
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev); // Toggle selectMonthly state when checkbox is clicked
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div> {/* Slider for the checkbox */}
            </label>
            <p>Monthly</p> {/* Text for monthly option */}
          </div>
        </header>
        {/* Plan components */}
        <div className="Plan"> {/* Container for individual plans */}
          <Plan
            title="Barbell Basics Pass"
            price={selectMonthly ? "$ 35" : "$ 100"}
            access="8:00 AM - 9:00 PM"
            classes="One Per Month"
            extra="-"
            discount="-" 
            link={selectMonthly ? monthlyLinks.plan1 : threeMonthsLinks.plan1}           
          />   
          <Plan
            title="Gym Warrior Pass"
            price={selectMonthly ? "$ 55" : "$ 150"}
            classes="Up to 5 Classes a month"
            access="24 HS"
            extra="Extras: Sauna, Steam Room, Spinning Centre"
            discount="-"
            link={selectMonthly ? monthlyLinks.plan2 : threeMonthsLinks.plan2}           
          />
          <Plan
            title="Pro Powerhouse Pass"
            price={selectMonthly ? "$ 80" : "$ 200"}
            access="24 HS"
            classes="Unlimited Classes Pass"
            extra="Extras: Full Facilities Access"
            discount="20% Discount at On-Site Muscle Therapies"
            link={selectMonthly ? monthlyLinks.plan3 : threeMonthsLinks.plan3}           
          />
        </div>
      </div>
    </div>
  );
}
export default Memberships; // Exporting the Memberships component
