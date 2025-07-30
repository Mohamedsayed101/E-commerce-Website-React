# Project Name: MO.Shop

## Description:
MO.Shop is a simple e-commerce frontend built with React, Bootstrap, and React Router. It allows users to browse products, view details, add to cart, and register or login to manage their session.

---

## Features:
- Responsive layout using Bootstrap.
- Full routing system with React Router.
- Dynamic product fetching from API.
- Detailed product view.
- Add to cart functionality.
- User authentication (Sign Up / Login).
- Global loader for API calls.
- Contact form with validation.

---

## Technologies Used:
- **React** (with Hooks and Component-based architecture)
- **React Router DOM** (for routing and navigation)
- **Bootstrap 5** (for UI and responsive layout)
- **JavaScript ES6+**
- **Local Storage** (for storing user session and cart)
- **Font Awesome** (for social icons)

---

## Project Structure:

```

src/

├── App.css

├── App.jsx

├── Components

│ ├── Alert

│ │ └── Alert.jsx

│ ├── Footer

│ │ └── Footer.jsx

│ ├── Loader

│ │ └── Loader.jsx

│ ├── Logo

│ │ └── Logo.jsx

│ ├── Navbar

│ │ └── Navbar.jsx

│ └── ProductCard

│ └── ProductCard.jsx

├── Context

├── Layouts

│ └── Layout.jsx

├── Pages

│ ├── About.jsx

│ ├── Cart.jsx

│ ├── ContactUs.jsx

│ ├── Home.jsx

│ ├── Login.jsx

│ ├── NotFound.jsx

│ ├── ProductDetails.jsx

│ ├── Products.jsx

│ └── SignUp.jsx

├── Routes

│ └── AppRoutes.jsx

├── Services

│ └── Api.js

├── Utils

├── assets

│ ├── icons

│ │ └── react.svg

│ └── images

│ └── team.jpg

├── index.css

└── main.jsx

```

---


---

## Component Explanation:

### Navbar:
- Sticky on all pages.
- Built using Bootstrap’s navbar component.
- Contains navigation links using `Link` from `react-router-dom`.
- Includes:
  - **Logo** (used in both Navbar and Footer).
  - **Home** (links to homepage with welcome section).
  - **Products**, **About**, **Contact**, **Login/Logout**, **SignUp**.

### Footer:
- Similar layout to Navbar.
- Contains logo, links, social media icons (Facebook, Twitter, Instagram, LinkedIn).
- Displays copyright.

### Home:
- Displays a welcome message.
- Includes a paragraph and button linking to the Products page.

### About:
- Has a header section.
- Includes:
  - A section with a team image.
  - A "Who We Are" description.
  - List of values under "Our Values".
  - Responsive cards for each team member (image, name, job title).

### Products:
- Fetches product data from the API using `useEffect`.
- Uses `.map()` to loop through products and display `ProductCard`.
- Each card includes:
  - Product image.
  - Title.
  - Price in USD.
  - Button to navigate to ProductDetails page.
- Fully responsive.

### ProductCard:
- Receives product data as props.
- Uses destructuring to extract details.
- Displays styled card with product details and button.

### ProductDetails:
- Displays detailed information of a single product.
- Uses `useParams` to get the product ID from the URL.

### Contact Us:
- Includes a form:
  - Full Name.
  - Email.
  - Message.
  - Submit button.
- Can be connected to backend/email service later.

### SignUp:
- Form to create a new user:
  - Full Name, Username, Email, Phone, Password, Confirm Password.
- On valid submission: user is redirected to Login page.

### Login:
- Authenticates existing user.
- Takes Email & Password.
- On successful login:
  - Redirect to Home page.
  - "Login" button becomes "Logout".
  - "SignUp" button is hidden.

### Cart:
- Displays all selected products.
- Allows confirming or removing products from cart.

### Loader:
- Reusable component to show a spinner when loading data.
- Used globally during route changes or API calls.

---

## `Api.js`:
- Contains fetch logic to get product data from external API.
- Centralizes API call logic for reuse.

---

## Libraries Used:

| Library              | Purpose                              |
|----------------------|--------------------------------------|
| React                | Building UI with components          |
| React Router DOM     | Navigation and routing               |
| Bootstrap            | Styling and responsive design        |
| Font Awesome         | Social media icons                   |
| LocalStorage         | Store login and cart state           |

---

## Project Power:
- Highly modular.
- Easy to expand with new features.
- Clean and scalable structure.
- Easy to maintain and debug.
- Great for practice and real-world use.

---

## Author & Contact:

**Name**: Mohamed Sayed Omar El-Sayed  
**Role**: Frontend Developer | React Learner  
**GitHub**: [@Mohamed Sayed](https://github.com/Mohamedsayed101)  
**LinkedIn**: [Mohamed Sayed](https://www.linkedin.com/in/mohamed-sayed-439a54347/)  
**Email**: ``` 
ms3655@fayoum.edu.eg 
```

---
