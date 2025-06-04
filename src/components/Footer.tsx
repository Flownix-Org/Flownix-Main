function Footer() {
  return (
    <>
      <div
        style={{
          background: "#09090B",
          color: "#d1d5db",
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          fontSize: "14px",
        }}
      >
        <div>&copy; 2025 Flownix All Rights Reserved</div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/" style={{ color: "#d1d5db", textDecoration: "none" }}>
            Home
          </a>
          <a href="/about" style={{ color: "#d1d5db", textDecoration: "none" }}>
            About
          </a>
          <a
            href="/contact"
            style={{ color: "#d1d5db", textDecoration: "none" }}
          >
            Copyright
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
