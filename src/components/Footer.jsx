import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Prateek Bhandari ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
