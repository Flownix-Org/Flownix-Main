import React, { useState, useEffect } from "react";

function Banner() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const gradientStart = "#8b5cf6";
  const gradientEnd = "#d946ef";

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        color: "white",
        flexDirection: "column",
        textAlign: "center",
        padding: "0 1rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="content">
        <h1
          style={{
            fontSize: "3.25rem",
            fontWeight: "bold",
            margin: 0,
            background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          No Code,
        </h1>
        <h1
          style={{
            fontSize: "3.25rem",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Beautifully Styled,
        </h1>
        <h1
          style={{
            fontSize: "3.25rem",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Easy to Use
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            marginTop: "1.5rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5",
            color: "#9ca3af",
          }}
        >
          A beautifully designed, visually interactive site that makes building
          chatbots for social media simple and fun.
        </p>
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            marginTop: "2rem",
            padding: "0.75rem 2rem",
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            background: hovered
              ? `linear-gradient(to right, #a178f4, #cc7bdc)`
              : `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Banner;
