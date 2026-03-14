import React from "react";

function Footer() {
  return (
    <footer className="border-top py-4 mt-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

          {/* Left */}
          <p className="mb-0 text-muted small">
            © {new Date().getFullYear()} Dev Collab
          </p>

          {/* Right */}
          <p className="mb-0 text-muted small">
            Built for students & junior developers
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
