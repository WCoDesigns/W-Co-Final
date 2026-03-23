import React from "react";

const brand = {
  midnightSky: "#183b4d",
  sunbakedOrange: "#f3724e",
  warmSunlight: "#fabca3",
  softBackground: "#f6f1ec",
  white: "#ffffff",
  textDark: "#13222b",
  mutedText: "#5f6b72",
};

const navLink = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 600,
  letterSpacing: "0.2px",
};

const sectionLabel = {
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: brand.sunbakedOrange,
  fontWeight: 700,
  marginBottom: "12px",
};

const sectionTitle = {
  fontSize: "40px",
  fontWeight: 700,
  margin: 0,
  color: brand.midnightSky,
  letterSpacing: "-0.8px",
};

const cardStyle = {
  background: brand.white,
  borderRadius: "24px",
  padding: "22px",
  boxShadow: "0 14px 34px rgba(24,59,77,0.08)",
  border: "1px solid rgba(24,59,77,0.08)",
};

export default function HomePage() {
  return (
    <main
      style={{
        background: brand.softBackground,
        color: brand.textDark,
        fontFamily: "Arial, Helvetica, sans-serif",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(24,59,77,0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
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
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: brand.white,
            }}
          >
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
          padding: "42px 32px 34px 32px",
        }}
      >
        <div
          style={{
            minHeight: "760px",
            borderRadius: "36px",
            overflow: "hidden",
            position: "relative",
            backgroundImage:
              'linear-gradient(90deg, rgba(24,59,77,0.88) 0%, rgba(24,59,77,0.70) 36%, rgba(24,59,77,0.28) 68%, rgba(24,59,77,0.16) 100%), url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            boxShadow: "0 18px 44px rgba(24,59,77,0.16)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(24,59,77,0.02) 0%, rgba(24,59,77,0.12) 100%)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              alignItems: "stretch",
              minHeight: "760px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "760px",
                padding: "74px 58px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(243,114,78,0.16)",
                    color: brand.white,
                    padding: "11px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    marginBottom: "22px",
                    textTransform: "uppercase",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  Australian Made Commercial Furniture
                </div>

                <h1
                  style={{
                    fontSize: "76px",
                    lineHeight: 0.98,
                    margin: "0 0 24px 0",
                    letterSpacing: "-2.8px",
                    color: brand.white,
                    maxWidth: "640px",
                  }}
                >
                  Warm,
                  <br />
                  refined pieces
                  <br />
                  for modern
                  <br />
                  interiors.
                </h1>

                <p
                  style={{
                    fontSize: "21px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.9)",
                    maxWidth: "650px",
                    marginBottom: "30px",
                  }}
                >
                  W&Co Designs curates premium Australian-made furniture for workplace,
                  hospitality and public environments — balancing warmth,
                  durability and a distinctly refined commercial aesthetic.
                </p>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <a
                    href="#showcase"
                    style={{
                      background: brand.sunbakedOrange,
                      color: brand.white,
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
                      color: brand.white,
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
                  ["Design Led", "Warm, considered and architecturally refined"],
                  ["Project Ready", "Suitable for workplace and hospitality use"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: "18px",
                      padding: "18px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <div
                      style={{
                        color: brand.white,
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.82)",
                        lineHeight: 1.55,
                        fontSize: "14px",
                      }}
                    >
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
            <div style={sectionLabel}>Featured Categories</div>
            <h2 style={sectionTitle}>Furniture Showcase</h2>
          </div>
          <p
            style={{
              maxWidth: "540px",
              color: brand.mutedText,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            A curated introduction to the categories W&Co Designs can present,
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
                  background: `linear-gradient(135deg, ${brand.warmSunlight} 0%, #f0e4d8 100%)`,
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: brand.midnightSky,
                  fontStyle: "italic",
                  marginBottom: "18px",
                }}
              >
                Product Image Placeholder
              </div>
              <h3
                style={{
                  fontSize: "28px",
                  margin: "0 0 12px 0",
                  color: brand.midnightSky,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: brand.mutedText,
                  lineHeight: 1.7,
                  marginBottom: "18px",
                }}
              >
                Handcrafted in Australia, these pieces are designed to bring style,
                comfort and durability to commercial environments.
              </p>
              <div
                style={{
                  fontSize: "14px",
                  color: brand.sunbakedOrange,
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
            background: brand.white,
            borderRadius: "28px",
            padding: "40px",
            boxShadow: "0 14px 40px rgba(24,59,77,0.06)",
            border: "1px solid rgba(24,59,77,0.04)",
          }}
        >
          <div style={sectionLabel}>Selected Work</div>
          <h2 style={{ ...sectionTitle, marginBottom: "18px" }}>Case Studies</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: brand.softBackground,
                borderRadius: "22px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  height: "220px",
                  background: `linear-gradient(135deg, ${brand.warmSunlight} 0%, #ead6ca 100%)`,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: brand.midnightSky,
                  fontStyle: "italic",
                  marginBottom: "18px",
                }}
              >
                Project Image Placeholder
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "10px",
                  color: brand.midnightSky,
                }}
              >
                Melbourne Tech Hub
              </h3>
              <p style={{ color: brand.mutedText, lineHeight: 1.7 }}>
                A custom furniture fitout featuring modular lounges and collaborative
                desks for a modern co-working environment.
              </p>
            </div>

            <div
              style={{
                background: brand.softBackground,
                borderRadius: "22px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  height: "220px",
                  background: `linear-gradient(135deg, ${brand.warmSunlight} 0%, #ead6ca 100%)`,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: brand.midnightSky,
                  fontStyle: "italic",
                  marginBottom: "18px",
                }}
              >
                Project Image Placeholder
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "10px",
                  color: brand.midnightSky,
                }}
              >
                Regional Council Chambers
              </h3>
              <p style={{ color: brand.mutedText, lineHeight: 1.7 }}>
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
            background: brand.midnightSky,
            color: brand.white,
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
            <div style={{ ...sectionLabel, color: brand.warmSunlight }}>Catalogue</div>
            <h2 style={{ fontSize: "36px", margin: "0 0 10px 0" }}>
              Download Our Collection
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                maxWidth: "620px",
                lineHeight: 1.7,
              }}
            >
              A downloadable PDF catalogue will be added here once your final product
              selections are ready for presentation.
            </p>
          </div>

          <button
            disabled
            style={{
              background: brand.sunbakedOrange,
              color: brand.white,
              border: "none",
              padding: "15px 28px",
              borderRadius: "999px",
              fontSize: "16px",
              opacity: 0.72,
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
            background: `linear-gradient(135deg, ${brand.warmSunlight} 0%, #f5e0d6 100%)`,
            borderRadius: "28px",
            padding: "42px",
          }}
        >
          <div style={{ ...sectionLabel, color: brand.midnightSky }}>Brand Ethos</div>
          <h2 style={sectionTitle}>Our Commitment</h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              maxWidth: "980px",
              color: brand.midnightSky,
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
          padding: "20px 32px 60px 32px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            background: brand.white,
            borderRadius: "28px",
            padding: "52px 32px",
            boxShadow: "0 14px 40px rgba(24,59,77,0.06)",
            border: "1px solid rgba(24,59,77,0.04)",
          }}
        >
          <div style={sectionLabel}>Get In Touch</div>
          <h2 style={{ ...sectionTitle, marginBottom: "14px" }}>Connect With Us</h2>
          <p
            style={{
              color: brand.mutedText,
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
              href="tel:0398738484"
              style={{
                background: brand.sunbakedOrange,
                color: brand.white,
                textDecoration: "none",
                padding: "15px 28px",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Call (03) 9873 8484
            </a>

            <a
              href="https://www.instagram.com/wandcodesigns"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: brand.white,
                color: brand.midnightSky,
                textDecoration: "none",
                padding: "15px 28px",
                borderRadius: "999px",
                fontWeight: 700,
                border: "1px solid rgba(24,59,77,0.12)",
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: brand.midnightSky,
          color: brand.white,
          padding: "32px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          <strong>W&Co Designs Pty Ltd</strong>
          <div>ABN 35 654 306 162</div>
          <div>Phone: (03) 9873 8484</div>
          <div style={{ opacity: 0.72, marginTop: "8px" }}>
            © {new Date().getFullYear()} W&Co Designs Pty Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
