# E-Commerce Shoe Store

This is an e-commerce store for shoes built using React. The application allows users to browse products, add them to a shopping cart, and view their cart. Additionally, users can contact the store for inquiries or support through a contact form.

## Features

- **Product Catalog**: Display a list of shoes with images, names, and prices.
- **Shopping Cart**: Users can add shoes to their cart and view the number of items in their cart in the Navbar.
- **Contact Us**: A "Contact Us" form is available where users can send inquiries.
- **Sticky Navbar**: A sticky navigation bar with a shopping cart icon that displays the number of items in the cart.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **React Hooks**: For managing state (`useState`) and side effects (`useEffect`).
- **Inline CSS**: Simple CSS for styling, though you can also modify this to use external stylesheets.
  
## Installation

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/shoe-store.git

2. Navigate to the project directory
    cd shoe-store
3. Install dependencies
    npm install
4. Start the development server
    npm start
This will start the React app on http://localhost:3000.

File Structure
The file structure of the project is as follows:

bash
Copy
/shoe-store
  /src
    /Components
      Cart.jsx             # Shopping cart component
      Footer.jsx           # Footer component
      NavBar.jsx           # Navbar component (includes Contact Us button)
      Product.jsx          # Product card for each shoe
      ContactUs.jsx        # Contact Us form page
    App.js                 # Main application component
    App.css                # Global CSS styles
    index.js               # Entry point for the React app
  package.json             # Project metadata and dependencies
Features
Navbar
    Displays the store name "The Shoe Store".
    Shows the shopping cart icon and the number of items in the cart.
    Includes a "Contact Us" button that toggles the contact form visibility.
Product List
    Displays shoes with images, names, and prices.
    Users can add products to their cart, and the cart count updates in the Navbar.
Shopping Cart
    Shows the products added to the cart and their quantity.
    Users can remove items from the cart.
Contact Us Form
    Users can enter their name and message.
    Form is shown when the "Contact Us" button is clicked in the Navbar.
How to Use
    Browse Products: Simply scroll through the shoe catalog. You can add items to your cart by clicking on the "Add to Cart" button on each product card.
View Cart: The number of items in your cart will be displayed in the Navbar. You can remove items from the cart.

Contact Us: Click on the "Contact Us" button in the Navbar to open the contact form. Fill in your name and message, then submit.
Customization

You can modify the following:

Product List: Edit the products array in App.js to add more shoes or change existing ones.
Styling: Update the inline CSS in App.js and NavBar.jsx to change the design of the store.
Cart Handling: Modify the cart logic if you'd like to implement more advanced cart features, like saving the cart data in local storage or connecting to a backend API for processing orders.
License
This project is open-source and available under the MIT License.

Contact
For more information or inquiries, feel free to contact the store via the "Contact Us" form in the app.

