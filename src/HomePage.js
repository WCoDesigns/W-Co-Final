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
  fontSize: "42px",
  fontWeight: 700,
  margin: 0,
  color: brand.midnightSky,
  letterSpacing: "-1px",
  lineHeight: 1.05,
};

const imageCard = {
  borderRadius: "26px",
  overflow: "hidden",
  boxShadow: "0 18px 40px rgba(24,59,77,0.10)",
  border: "1px solid rgba(24,59,77,0.06)",
  background: brand.white,
};

export default function HomePage() {
  return (
    <main
      style={{
        background: brand.softBackground,
        color: brand.textDark,
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(24,59,77,0.88)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
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
            <a href="#categories" style={navLink}>Categories</a>
            <a href="#featured" style={navLink}>Featured</a>
            <a href="#projects" style={navLink}>Projects</a>
            <a href="#contact" style={navLink}>Contact</a>
          </nav>
        </div>
      </header>

      <section
        style={{
          minHeight: "96vh",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            'linear-gradient(90deg, rgba(24,59,77,0.88) 0%, rgba(24,59,77,0.66) 36%, rgba(24,59,77,0.24) 68%, rgba(24,59,77,0.10) 100%), url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "80px 32px 60px 32px",
            minHeight: "96vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "780px" }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(243,114,78,0.18)",
                color: brand.white,
                padding: "12px 18px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.6px",
                marginBottom: "24px",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Australian Made Commercial Furniture
            </div>

            <h1
              style={{
                fontSize: "92px",
                lineHeight: 0.95,
                margin: "0 0 24px 0",
                letterSpacing: "-3px",
                color: brand.white,
                maxWidth: "760px",
              }}
            >
              Furniture with
              <br />
              warmth,
              <br />
              structure
              <br />
              and intent.
            </h1>

            <p
              style={{
                fontSize: "23px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                maxWidth: "720px",
                marginBottom: "32px",
              }}
            >
              W&Co Designs curates premium furniture for workplace, hospitality
              and public interiors — balancing form, comfort and commercial
              durability through a distinctly refined Australian lens.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#categories"
                style={{
                  background: brand.sunbakedOrange,
                  color: brand.white,
                  textDecoration: "none",
                  padding: "16px 30px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                Explore Categories
              </a>

              <a
                href="#projects"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: brand.white,
                  textDecoration: "none",
                  padding: "16px 30px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="categories"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "80px 32px 40px 32px",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <div style={sectionLabel}>Categories</div>
          <h2 style={sectionTitle}>A visual introduction to the collection.</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <div style={imageCard}>
            <div
              style={{
                height: "560px",
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div style={{ padding: "26px" }}>
              <div style={sectionLabel}>Featured</div>
              <h3 style={{ fontSize: "34px", margin: "0 0 10px 0", color: brand.midnightSky }}>
                Reception & lounge furniture
              </h3>
              <p style={{ color: brand.mutedText, lineHeight: 1.7, margin: 0 }}>
                Statement pieces for first impressions, waiting areas and hospitality-led
                environments where comfort and visual confidence matter.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: "24px",
            }}
          >
            {[
              [
                "Workplace seating",
                "Ergonomic and visually resolved seating selections for focused, flexible environments.",
              ],
              [
                "Collaborative tables",
                "Tables designed to support teamwork, discussion and open-plan commercial settings.",
              ],
            ].map(([title, text], i) => (
              <div key={i} style={imageCard}>
                <div
                  style={{
                    height: "250px",
                    background: `linear-gradient(135deg, ${brand.warmSunlight} 0%, #f0e2d5 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: brand.midnightSky,
                    fontStyle: "italic",
                  }}
                >
                  Category Image Placeholder
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "28px", margin: "0 0 10px 0", color: brand.midnightSky }}>
                    {title}
                  </h3>
                  <p style={{ color: brand.mutedText, lineHeight: 1.7, margin: 0 }}>
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          minHeight: "72vh",
          position: "relative",
          backgroundImage:
            'linear-gradient(90deg, rgba(24,59,77,0.70) 0%, rgba(24,59,77,0.46) 38%, rgba(24,59,77,0.16) 70%, rgba(24,59,77,0.10) 100%), url("https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          margin: "40px 0 20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            minHeight: "72vh",
            padding: "70px 32px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "700px",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "28px",
              padding: "34px",
              backdropFilter: "blur(6px)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: brand.warmSunlight,
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Australian Made
            </div>
            <h2
              style={{
                fontSize: "54px",
                lineHeight: 1.02,
                margin: "0 0 18px 0",
                color: brand.white,
                letterSpacing: "-1.6px",
              }}
            >
              Designed to feel elevated,
              <br />
              built to work hard.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.8,
                fontSize: "18px",
                margin: 0,
              }}
            >
              From specifier-led fitouts to hospitality interiors, W&Co Designs
              presents furniture that combines longevity, warmth and commercial
              performance without compromising visual clarity.
            </p>
          </div>
        </div>
      </section>

      <section
        id="featured"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "80px 32px 30px 32px",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <div style={sectionLabel}>Featured Selection</div>
          <h2 style={sectionTitle}>Structured, image-led blocks for your product story.</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {[
            "Office Chairs",
            "Collaborative Tables",
            "Reception Lounges",
          ].map((title, index) => (
            <div key={index} style={imageCard}>
              <div
                style={{
                  height: "340px",
                  background: `linear-gradient(135deg, ${brand.warmSunlight} 0%, #edd9cc 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: brand.midnightSky,
                  fontStyle: "italic",
                }}
              >
                Product Image Placeholder
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "30px", margin: "0 0 12px 0", color: brand.midnightSky }}>
                  {title}
                </h3>
                <p style={{ color: brand.mutedText, lineHeight: 1.7, marginBottom: "18px" }}>
                  Handcrafted in Australia and designed for interiors that need
                  durability, warmth and visual confidence.
                </p>
                <div
                  style={{
                    fontSize: "14px",
                    color: brand.sunbakedOrange,
                    fontWeight: 700,
                    letterSpacing: "0.2px",
                  }}
                >
                  Learn more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "80px 32px 40px 32px",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <div style={sectionLabel}>Projects</div>
          <h2 style={sectionTitle}>Commercial spaces shaped by strong furniture decisions.</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          {[
            [
              "Melbourne Tech Hub",
              "A custom fitout featuring modular lounges and collaborative desks for a modern co-working environment.",
            ],
            [
              "Regional Council Chambers",
              "Elegant and durable pieces designed to complement civic interiors with warmth and authority.",
            ],
          ].map(([title, text], i) => (
            <div key={i} style={imageCard}>
              <div
                style={{
                  height: "340px",
                  backgroundImage:
                    i === 0
                      ? 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80")'
                      : 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: "26px" }}>
                <h3 style={{ fontSize: "30px", margin: "0 0 12px 0", color: brand.midnightSky }}>
                  {title}
                </h3>
                <p style={{ color: brand.mutedText, lineHeight: 1.7, margin: 0 }}>
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="catalogue"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "50px 32px 40px 32px",
        }}
      >
        <div
          style={{
            background: brand.midnightSky,
            color: brand.white,
            borderRadius: "30px",
            padding: "46px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ ...sectionLabel, color: brand.warmSunlight }}>Catalogue</div>
            <h2 style={{ fontSize: "38px", margin: "0 0 10px 0" }}>
              Download our collection
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                maxWidth: "660px",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              A downloadable PDF catalogue can live here once your final product
              selection is ready for presentation and client sharing.
            </p>
          </div>

          <button
            disabled
            style={{
              background: brand.sunbakedOrange,
              color: brand.white,
              border: "none",
              padding: "16px 30px",
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
        id="contact"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "80px 32px 60px 32px",
        }}
      >
        <div
          style={{
            background: brand.white,
            borderRadius: "30px",
            padding: "52px 36px",
            boxShadow: "0 14px 40px rgba(24,59,77,0.06)",
            border: "1px solid rgba(24,59,77,0.05)",
            textAlign: "center",
          }}
        >
          <div style={sectionLabel}>Get In Touch</div>
          <h2 style={{ ...sectionTitle, marginBottom: "14px" }}>Connect With Us</h2>
          <p
            style={{
              color: brand.mutedText,
              marginBottom: "24px",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "760px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Whether you're an architect, designer or commercial client, W&Co Designs
            can help shape a more resolved furniture direction for your next project.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            <a
              href="tel:0398738484"
              style={{
                background: brand.sunbakedOrange,
                color: brand.white,
                textDecoration: "none",
                padding: "16px 28px",
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
                padding: "16px 28px",
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
            maxWidth: "1320px",
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
