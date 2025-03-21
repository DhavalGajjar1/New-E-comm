import React from "react";

function Cart({ items, onRemoveFromCart }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <h2 style={{ marginTop: 0 ,color:"#654321",backgroundColor:"#C4A484"}}>Shopping cart</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {items.map((item) => (
          <div
            key={item.id} 
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              alignItems: "left",
              marginBottom: "5px",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <div>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p style={{ color: "black",backgroundColor:"333" }}>{item.name}</p>
              <p style={{ color: "black",backgroundColor:"333" }}>
                ${item.price}x{item.quantity}
              </p>


              <button
                onClick={() => onRemoveFromCart(item.id)}
                style={{
                  color: "white",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                  backgroundColor:"black"
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <h3>Total : ${total.toFixed(2)}</h3>
      </div>
    </>
  );
}

export default Cart;