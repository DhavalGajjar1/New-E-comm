import React, { useState } from "react";
import "./App.css";
import Products from "./Components/Product";
import Cart from "./Components/Cart";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const products = [
    {
      id: 1,
      name: "Nike",
      price: 143,
      image:
        "https://cdn.pixabay.com/photo/2020/07/15/18/26/footwear-5408643_1280.jpg",
    },
    {
      id: 2,
      name: "Jorden",
      price: 235,
      image:
        "https://cdn.pixabay.com/photo/2021/03/08/12/31/oxford-shoes-6078993_1280.jpg",
    },
    {
      id: 3,
      name: "Adidas",
      price: 911,
      image:
        "https://cdn.pixabay.com/photo/2020/07/19/05/34/adidas-5418998_1280.jpg",
    },
    {
      id: 4,
      name: "Adidas Sports",
      price: 100,
      image:
        "https://cdn.pixabay.com/photo/2020/07/19/05/29/adidas-5418991_1280.jpg",
    },
    {
      id: 5,
      name: "New Balance",
      price: 345,
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/22/29/footwear-1837170_1280.jpg",
    },
    {
      id: 6,
      name: "Nike Sports",
      price: 745,
      image:
        "https://cdn.pixabay.com/photo/2020/04/14/09/53/nike-5041718_1280.jpg",
    },
    {
      id: 7,
      name: "crocs",
      price: 982,
      image:
        "https://cdn.pixabay.com/photo/2015/06/29/12/34/beach-825535_960_720.jpg",
    },
    {
      id: 8,
      name: "Puma",
      price: 999,
      image:
        "https://cdn.pixabay.com/photo/2020/07/19/05/34/adidas-5418998_1280.jpg",
    },
  ];

  const [cartItem, setCartItem] = useState([]);
  const [showContactUs, setShowContactUs] = useState(false); // State to toggle contact form visibility

  const cartItemCount = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const onAddToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const onRemoveFromCart = (productId) => {
    setCartItem((e) => {
      return e
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const toggleContactUs = () => {
    setShowContactUs((prevState) => !prevState);
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "30px",
        backgroundColor: "#333",
        color: "whitesmoke",
      }}
    >
      <NavBar cartItemCount={cartItemCount} onContactClick={toggleContactUs} />
      <h1 style={{ textAlign: "center" }}>Get Yours Now!!!!</h1>

      {showContactUs && (
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", marginTop: "20px", color: "#333" }}>
          <h2>Contact Us</h2>
          <form>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="name" style={{ fontWeight: "bold" }}>
                Your Name:
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your name"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="message" style={{ fontWeight: "bold" }}>
                Your Message:
              </label>
              <textarea
                id="message"
                required
                placeholder="Enter your message"
                rows="5"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#654321",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <Cart items={cartItem} onRemoveFromCart={onRemoveFromCart} />
      <Footer />
    </div>
  );
}

export default App;
