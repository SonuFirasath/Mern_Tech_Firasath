import React from "react";
import "./CompanyCard.css";

function CompanyCard() {
  return (
    <div className="company-card">
      <h1>Chimera Technologies</h1>

      <p className="tagline">
        Innovating the Future with Technology
      </p>

      <h3>About Us</h3>
      <p className="para">
        At Chimera Technologies, we are driven by a mission to make technology a force for good, ensuring that our solutions create real value for our clients and their communities.
      </p>

      <h3>Services</h3>
      <ul>
        <li>Data Sense & Anallytics</li>
        <li>DevOps & Cloud</li>
        <li>Gen AI</li>
        <li>Testing & QA Automation</li>
        <li>Digital Transformation</li>
        <li>No Code/Low Code</li>
      </ul>

      <h3>Contact</h3>
      <p>Email: enquiries@chimeratechnologies.com</p>
      <p>Phone: +91 92052 25525</p>
    </div>
  );
}

export default CompanyCard;