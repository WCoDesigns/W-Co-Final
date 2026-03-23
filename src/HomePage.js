import React from "react";

const navLink = {
  color: "#131313",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 500,
};

const sectionTitle = {
  fontSize: "38px",
  fontWeight: 700,
  marginBottom: "18px",
  color: "#131313",
  letterSpacing: "-0.5px",
};

const cardStyle = {
  background: "#FFFFFF",
  borderRadius: "22px",
  padding: "22px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  border: "1px solid rgba(0,0,0,0.04)",
};

export default function HomePage() {
  return (
    <main
      style={{
        background: "#F7F5F3",
        color: "#131313",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(247,245,243,0.88)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "-1px" }}>
            W&Co Designs
          </div>
          <nav
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="#showcase" style={navLink}>Showcase</a>
            <a href="#projects" style={navLink}>Projects</a>
            <a href="#catalogue" style={navLink}>Catalogue</a>
            <a href="#contact" style={navLink}>Contact</a>
          </nav>
        </div>
      </header>

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 32px 40px 32px",
        }}
      >
        <div
          style={{
            minHeight: "720px",
            borderRadius: "34px",
            overflow: "hidden",
            position: "relative",
            backgroundImage:
              'linear-gradient(90deg, rgba(19,19,19,0.70) 0%, rgba(19,19,19,0.52) 38%, rgba(19,19,19,0.18) 72%, rgba(19,19,19,0.08) 100%), url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            boxShadow: "0 18px 44px rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.10) 100%)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              alignItems: "stretch",
              minHeight: "720px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "720px",
                padding: "72px 58px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.14)",
                    color: "#FFFFFF",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    marginBottom: "22px",
                    textTransform: "uppercase",
                    border: "1px solid rgba(255,255,255,0.22)",
                  }}
                >
                  Australian Made Commercial Furniture
                </div>

                <h1
                  style={{
                    fontSize: "74px",
                    lineHeight: 1.02,
                    margin: "0 0 22px 0",
                    letterSpacing: "-2.8px",
                    color: "#FFFFFF",
                    maxWidth: "620px",
                  }}
                >
                  Warm,
                  refined pieces
                  for modern
                  interiors.
                </h1>

                <p
                  style={{
                    fontSize: "21px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.88)",
                    maxWidth: "640px",
                    marginBottom: "28px",
                  }}
                >
                  W&Co Designs curates premium Australian-made furniture for workplace,
                  hospitality and public environments — balancing comfort,
                  craftsmanship and a distinctly elevated design language.
                </p>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <a
                    href="#showcase"
                    style={{
                      background: "#D95D2B",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      padding: "15px 28px",
                      borderRadius: "999px",
                      fontWeight: 700,
                      display: "inline-block",
                    }}
                  >
                    View Collection
                  </a>
                  <a
                    href="#contact"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      padding: "15px 28px",
                      borderRadius: "999px",
                      fontWeight: 700,
                      display: "inline-block",
                      border: "1px solid rgba(255,255,255,0.22)",
                    }}
                  >
                    Discuss a Project
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "16px",
                  marginTop: "36px",
                }}
              >
                {[
                  ["Australian Made", "Locally crafted for commercial durability"],
                  ["Design Led", "Minimal, warm and architecturally considered"],
                  ["Specified for Projects", "Suitable for workplace and hospitality use"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: "18px",
                      padding: "18px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <div style={{ color: "#FFFFFF", fontWeight: 700, marginBottom: "8px" }}>
                      {title}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.55, fontSize: "14px" }}>
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="showcase"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 32px 56px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                color: "#B85A2B",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              Featured Categories
            </div>
            <h2 style={{ ...sectionTitle, marginBottom: 0 }}>Furniture Showcase</h2>
          </div>
          <p style={{ maxWidth: "540px", color: "#4E4E4E", lineHeight: 1.7, margin: 0 }}>
            A curated introduction to the types of furniture W&Co Designs can present,
            specify and refine for commercial spaces.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            "Office Chairs",
            "Collaborative Tables",
            "Reception Lounges",
          ].map((title, index) => (
            <div key={index} style={cardStyle}>
              <div
                style={{
                  height: "240px",
                  background: "#E9E9E9",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4E4E4E",
                  fontStyle: "italic",
                  marginBottom: "18px",
                }}
              >
                Product Image Placeholder
              </div>
              <h3 style={{ fontSize: "28px", margin: "0 0 12px 0" }}>{title}</h3>
              <p style={{ color: "#4E4E4E", lineHeight: 1.7, marginBottom: "18px" }}>
                Handcrafted in Australia, these pieces are designed to bring style,
                comfort and durability to commercial environments.
              </p>
              <div
                style={{
                  fontSize: "14px",
                  color: "#B85A2B",
                  fontWeight: 700,
                  letterSpacing: "0.2px",
                }}
              >
                View category →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 32px 56px 32px",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "28px",
            padding: "40px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              color: "#B85A2B",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Selected Work
          </div>
          <h2 style={sectionTitle}>Case Studies</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: "#F7F5F3",
                borderRadius: "22px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  height: "220px",
                  background: "#DDD7D1",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6C625B",
                  fontStyle: "italic",
                  marginBottom: "18px",
                }}
              >
                Project Image Placeholder
              </div>
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Melbourne Tech Hub</h3>
              <p style={{ color: "#4E4E4E", lineHeight: 1.7 }}>
                A custom furniture fitout featuring modular lounges and collaborative
                desks for a modern co-working environment.
              </p>
            </div>

            <div
              style={{
                background: "#F7F5F3",
                borderRadius: "22px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  height: "220px",
                  background: "#DDD7D1",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6C625B",
                  fontStyle: "italic",
                  marginBottom: "18px",
                }}
              >
                Project Image Placeholder
              </div>
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                Regional Council Chambers
              </h3>
              <p style={{ color: "#4E4E4E", lineHeight: 1.7 }}>
                Elegant, durable timber pieces designed to complement heritage
                interiors in a civic setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="catalogue"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 32px 56px 32px",
        }}
      >
        <div
          style={{
            background: "#131313",
            color: "#FFFFFF",
            borderRadius: "28px",
            padding: "42px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                color: "#D95D2B",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              Catalogue
            </div>
            <h2 style={{ fontSize: "36px", margin: "0 0 10px 0" }}>
              Download Our Collection
            </h2>
            <p style={{ color: "rgba(255,255,255,0.74)", maxWidth: "620px", lineHeight: 1.7 }}>
              A downloadable PDF catalogue will be added here once your final product
              selections are ready for presentation.
            </p>
          </div>

          <button
            disabled
            style={{
              background: "#D95D2B",
              color: "#FFFFFF",
              border: "none",
              padding: "15px 28px",
              borderRadius: "999px",
              fontSize: "16px",
              opacity: 0.6,
            }}
          >
            Download Coming Soon
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 32px 56px 32px",
        }}
      >
        <div
          style={{
            background: "#E9E4DE",
            borderRadius: "28px",
            padding: "42px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              color: "#B85A2B",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Brand Ethos
          </div>
          <h2 style={sectionTitle}>Our Commitment</h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              maxWidth: "980px",
              color: "#2E2A27",
              margin: 0,
            }}
          >
            W&Co Designs specialises in showcasing high-quality, Australian-made
            furniture crafted with sustainability, craftsmanship, and design integrity
            at its core. Our mission is to elevate interiors in the commercial,
            hospitality, and public sectors across Australia.
          </p>
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 32px 80px 32px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            background: "#FFFFFF",
            borderRadius: "28px",
            padding: "52px 32px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              color: "#B85A2B",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Get In Touch
          </div>
          <h2 style={{ ...sectionTitle, marginBottom: "14px" }}>Connect With Us</h2>
          <p
            style={{
              color: "#4E4E4E",
              marginBottom: "22px",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            Whether you're an architect, designer, or business owner, we’d love to
            collaborate on your next project.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "18px",
            }}
          >
            <a
              href="mailto:hello@wandcodesigns.com.au"
              style={{
                background: "#D95D2B",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "15px 28px",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Contact Us
            </a>

            <a
              href="https://www.instagram.com/wandcodesigns"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#FFFFFF",
                color: "#131313",
                textDecoration: "none",
                padding: "15px 28px",
                borderRadius: "999px",
                fontWeight: 700,
                border: "1px solid rgba(0,0,0,0.12)",
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
 
