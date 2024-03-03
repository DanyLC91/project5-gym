# Code Institute Project5 - FX Fitness Gym

## About
The primary purpose of the Fitness Gym Website is to provide potential gym members with information about the gym's offerings and to facilitate the purchase of memberships. By offering an intuitive and user-friendly interface, the website aims to attract new customers and streamline the membership acquisition process.

## Features

- **Membership Information**: Detailed information about various membership plans, benefits, and options.
- **Membership Purchase**: Allows customers to purchase memberships directly through the website.
- **Responsive Design**: Ensures optimal viewing and interaction across various devices.

## Technologies Used
- **React.js**: Frontend development for dynamic and interactive user interfaces.
- **Payment Processing Integration**: Securely handles online payments for membership purchases.


## Step-by-Step Project Setup Guide

1. **Install React**: Start by installing React in your project directory. React will be hosted in a folder named "Frontend."

2. **Project Structure**: Within the "src" directory, you'll find the source code of the project.

3. **index.js**: The "index.js" file initializes the React application, rendering the main "App" component and reporting web vitals for performance monitoring.

4. **App.js**: The core component of the React application, "App," sets up routing for different pages and renders the Navbar, Routes to the pages, and Footer components.

### Pages and Components

5. **Home.js**: The landing page with a minimalistic and modern view. It renders a banner image with a header, displaying a navbar, an image as a body, and a footer. Styling is done using CSS imported into the component.

6. **Navbar.js**: Defines a navigation bar component using React and React Router. Manages navigation links' visibility using state and renders the navigation bar with logo, links, and a menu icon. It utilizes the useState hook for state management and react-router-dom for navigation.

7. **Footer.js**: The contact section of the page is in the footer. It renders contact information and social media links using Material-UI icons for Instagram, Facebook, and more.

8. **AboutUs.js**: Displays information about a fitness center, including a heading, paragraphs of text, and an image. Provides users with insights into the gym's mission and values.

9. **TheGym.js**: Renders content related to the gym's facilities, classes, and team members. It showcases the gym's offerings and provides a glimpse into the gym's atmosphere.

10. **Membership.js**: Displays information about membership plans and allows users to switch between monthly and three-month plans. Manages state using the useState hook and renders the Plan component for each membership option, passing props such as title, price, access, classes, extra features, discount, and link based on the selected plan type.

11. **Plans.js**: Defines a React functional component called Plan that displays the details of a membership plan. It takes in several props such as title, price, classes, access, discount, extra, and link. The component renders a container with the plan details, including the title, price, access details, classes included, extra benefits, and discount information. It also includes a button to purchase the plan, which redirects the user to the specified link.

## Additional Features

12. **Stripe Integration**: Stripe was added to the site to enable users to purchase membership plans securely. Upon clicking "GET NOW," users are redirected to a new tab to complete the purchase by providing necessary details such as email, card information, and address. Follow these steps to integrate Stripe:
    - Sign up for a Stripe account
    - Create a product for each membership plan in test mode
    - Enter product details and set pricing
    - Obtain API keys
    - Add links to the Membership.js component for seamless integration.
   
## Assets

This section contains two folders:
- **Images**: Stores the pictures used in the site.
- **Styles**: Hosts all the .css files for styling the components.

The project aims to provide users with a seamless experience while exploring membership options and purchasing plans. With a user-friendly interface and integrated payment system, users can easily navigate through the site, learn about the gym's offerings, and select the membership plan that best suits their needs. Additionally, the project emphasizes code organization and component modularity, making it easy to maintain and scale in the future.

## Credits

- Stripe
- Pexels.com
- Canva for the Gym logo
- YouTube channel PedroTech and others.

#### Content
- All text content is where created with ChatGPT.
- Some images were created by Midjourney AI.