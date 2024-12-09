
'use client'
import React from "react";
import Image from "next/image";

export default function Subscribe() {
  const subscription = [
    { image: "/bchiar.svg", id: 1, width: 150, height: 150 },
    { image: "/Pchair.svg", id: 2, width: 150, height: 150 },
    { image: "/ochair.svg", id: 3, width: 150, height: 150 },
    { image: "/best.svg", id: 4, width: 150, height: 150 },
    { image: "/wchair.svg", id: 5, width: 150, height: 150 },
    { image: "/Desk.svg", id: 6, width: 150, height: 150 },
  ];

  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        padding: "20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="container"
      >
        {/* Newsletter Subscription Section */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.3rem",
              marginBottom: "20px",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Or Subscribe to the Newsletter
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              placeholder="Enter Address...."
              className="border-t-0"
              style={{
                border: "none",
                padding: "10px 15px",
                fontSize: "20px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "300px",
                maxWidth: "100%", // Responsive adjustment
              }}
            />
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Submit
            </button>
          </div>
        </section>

        {/* Instagram Follow Section */}
        <section>
          <h1
            style={{
              fontSize: "24px",
              textAlign: "center",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Follow Products and Discounts on Instagram
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
              padding: "10px",
            }}
          >
            {subscription.map((item) => (
              <div
                key={item.id}
                style={{
                  textAlign: "center",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  src={item.image}
                  alt={`Product ${item.id}`}
                  width={item.width}
                  height={item.height}
                  style={{
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
