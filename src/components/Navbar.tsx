import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
    fontSize: "15px",
  };

  return (
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
            alignItems: "center",
          }}
        >
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
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
          <li>
            <Link
              to="/register"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "14px",
                fontWeight: "bold",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.5rem",
                background: "linear-gradient(to right, #d946ef, #8b5cf6)",
                transition: "background 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #8b5cf6, #d946ef)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #d946ef, #8b5cf6)";
              }}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
