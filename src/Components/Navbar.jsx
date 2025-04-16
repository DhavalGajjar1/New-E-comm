import React from "react";

function NavBar({ cartItemCount = 0, onContactClick }) {
  return (
    <div
      style={{
        backgroundColor: "#C4A484",
        padding: "1rem",
        color: "#654321",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "30px" }}>The Shoe Store</h1>
        <span style={{ fontSize: "24px", cursor: "pointer" }}>🛒</span>

        {cartItemCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "55%",
              backgroundColor: "#654321",
              color: "#C4A484",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {cartItemCount}
          </span>
        )}

  
        <button
          onClick={onContactClick}
          style={{
            backgroundColor: "#654321",
            color: "#fff",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default NavBar;
