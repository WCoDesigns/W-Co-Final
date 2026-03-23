import React from "react";

export default function HomePage() {
  return (
    <main
      style={{
        padding: "40px",
        background: "#F7F5F3",
        color: "#131313",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px", color: "#000" }}>
          W&Co Designs Pty Ltd
        </h1>
        <p style={{ fontSize: "20px", color: "#4E4E4E", marginBottom: "24px" }}>
          Premium Australian-Made Commercial Furniture for Inspired Interiors
        </p>
        <button
          style={{
            background: "#D95D2B",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Browse Our Creations
        </button>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "32px", textAlign: "center", marginBottom: "30px" }}>
          Furniture Showcase
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {["Office Chairs", "Collaborative Tables", "Reception Lounges"].map(
            (title, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    height: "220px",
                    background: "#E9E9E9",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#4E4E4E",
                    fontStyle: "italic",
                    marginBottom: "16px",
                  }}
                >
                  Product Image Placeholder
                </div>
                <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{title}</h3>
                <p style={{ color: "#4E4E4E", lineHeight: 1.6 }}>
                  Handcrafted in Australia, these pieces are designed to bring
                  style, comfort and durability to commercial environments.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          marginBottom: "60px",
        }}
      >
        <h2 style={{ fontSize: "32px", textAlign: "center", marginBottom: "24px" }}>
          Case Studies
        </h2>
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>Melbourne Tech Hub</h3>
          <p style={{ color: "#4E4E4E", lineHeight: 1.6 }}>
            A custom furniture fitout featuring modular lounges and collaborative
            desks for a modern co-working space.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>
            Regional Council Chambers
          </h3>
          <p style={{ color: "#4E4E4E", lineHeight: 1.6 }}>
            Elegant, durable timber pieces designed to complement heritage
            interiors in a civic setting.
          </p>
        </div>
      </section>

      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Download Our Catalogue
        </h2>
        <p style={{ color: "#4E4E4E", marginBottom: "20px" }}>
          Our downloadable PDF catalogue will be available soon. Stay tuned!
        </p>
        <button
          disabled
          style={{
            background: "#D95D2B",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            fontSize: "16px",
            opacity: 0.5,
          }}
        >
          Download Coming Soon
        </button>
      </section>

      <section
        style={{
          background: "#E9E9E9",
          borderRadius: "20px",
          padding: "32px",
          marginBottom: "60px",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Our Commitment</h2>
        <p style={{ lineHeight: 1.7 }}>
          W&Co Designs specialises in showcasing high-quality, Australian-made
          furniture crafted with sustainability, craftsmanship, and design
          integrity at its core. Our mission is to elevate interiors in the
          commercial, hospitality, and public sectors across Australia.
        </p>
      </section>

      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>Connect With Us</h2>
        <p style={{ color: "#4E4E4E", marginBottom: "20px" }}>
          Whether you're an architect, designer, or business owner—we'd love to
          collaborate.
        </p>
        <button
          style={{
            background: "#D95D2B",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "16px",
          }}
        >
          Contact Us
        </button>
        <div>
          <a
            href="https://www.instagram.com/wandcodesigns"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#D95D2B", textDecoration: "underline" }}
          >
            Follow us on Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
