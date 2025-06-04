function Navbar() {
  const linkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
    fontSize: "15px",
  };

  return (
    <>
      <div
        style={{
          background: "#151518",
          padding: "1rem 2rem",
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="left">
          <span
            style={{
              background: "linear-gradient(to right, #B993D6, #8CA6DB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Flownix
          </span>
        </div>
        <div className="right">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1.5rem",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a href="" style={linkStyle}>
                Home
              </a>
            </li>
            <li>
              <a href="" style={linkStyle}>
                About
              </a>
            </li>
            <li>
              <a href="" style={linkStyle}>
                Copyright
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
