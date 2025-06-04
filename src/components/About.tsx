import React, { useEffect, useState } from "react";

function About() {
  const cardData = [
    {
      title: "Streamlined Approach",
      desc: "Build chatbots easily with intuitive drag-and-drop nodes, no coding required.",
    },
    {
      title: "Fully Visual",
      desc: "Design chatbot flows visually for clearer logic and faster iteration.",
    },
    {
      title: "Social Media Ready",
      desc: "Deploy your bots directly to platforms like WhatsApp, Messenger, and Web.",
    },
    {
      title: "Flexible & Scalable",
      desc: "Easily update your flows and manage multiple chatbot versions with ease.",
    },
  ];

  const [animateCards, setAnimateCards] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateCards(true);

    const textTimeout = setTimeout(() => {
      setAnimateText(true);
    }, 4 * 300 + 600);

    return () => clearTimeout(textTimeout);
  }, []);

  const containerStyle = {
    backgroundColor: "#151518",
    fontFamily: "'Comfortaa', cursive, sans-serif",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "3rem 4rem",
    gap: "3rem",
  };

  const leftStyle = {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1.5rem",
  };

  const cardStyleBase = {
    backgroundColor: "#1e1e28",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    color: "white",
    cursor: "default",
    border: "2px solid transparent",
    fontFamily: "'Comfortaa', cursive, sans-serif",
    opacity: 0,
    transform: "translateY(20px)",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-out",
    animationDuration: "600ms",
  };

  const rightStyleBase = {
    flex: 1,
    maxWidth: "600px",
    fontFamily: "'Comfortaa', cursive, sans-serif",
    opacity: 0,
    transform: "translateY(20px)",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-out",
    animationDuration: "600ms",
  };

  const flownixGradientStyle = {
    background: "linear-gradient(to right, #8b5cf6, #d946ef)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  };

  const iconGradientId = "purplePinkGradient";

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <linearGradient id={iconGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>

      <div style={containerStyle}>
        <div style={leftStyle}>
          {cardData.map(({ title, desc }, i) => {
            const cardStyle = {
              ...cardStyleBase,
              animationName: animateCards ? "fadeSlideUp" : "none",
              animationDelay: `${i * 300}ms`,
            };
            return (
              <div key={i} style={cardStyle}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={`url(#${iconGradientId})`}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginBottom: "0.5rem" }}
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>
                <p style={{ margin: 0, color: "#ccc" }}>{desc}</p>
              </div>
            );
          })}
        </div>
        <div
          style={{
            ...rightStyleBase,
            animationName: animateText ? "fadeSlideUp" : "none",
            animationDelay: animateText ? "0ms" : "none",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            What is <span style={flownixGradientStyle}>Flownix</span>?
          </h1>
          <p style={{ lineHeight: "1.6", color: "#ccc", fontSize: "1.1rem" }}>
            Flownix is a user-friendly platform that lets you create chatbots
            using drag-and-drop nodes, eliminating the need for coding. You can
            build, customize, and deploy chatbots seamlessly across your social
            media accounts, making customer engagement simple and efficient.
          </p>
          <ul
            style={{
              marginTop: "1rem",
              color: "#bbb",
              fontSize: "1rem",
              lineHeight: "1.5",
            }}
          >
            <li>Easy drag-and-drop interface</li>
            <li>Deploy to WhatsApp, Messenger, and more</li>
            <li>Real-time analytics and tracking</li>
            <li>Version control for flows</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
