import React from "react";
import "../style.css/certificate.css"; 

const certificationsData = [
  {
    id: 1,
    title: "Introduction to HTML",
    issuer: "Simplilearn",
    date: "June 2025",
    link: "https://simpli-web.app.link/e/G5bMDs3rjWb",
  },
  {
    id: 2,
    title: "Python",
    issuer: "Udemy",
    date: "August 2025",
    link: "https://www.udemy.com/certificate/UC-2e47dfb9-68aa-483e-9903-9e165c52d828/",
  },
  {
    id: 3,
    title: "Unlocking Power of Javascript",
    issuer: "Scaler",
    date: "July 2025",
    link: "https://moonshot.scaler.com/s/sl/eVjAl0wXvB?_gl=1*y6oqny",
  },
  {
    id: 4,
    title: "HackerRank CSS Certificate",
    issuer: "HackerRank",
    date: "May 2025",
    link: "https://www.hackerrank.com/certificates/f4983dc0c234",
  },
  {
    id: 5,
    title: "HackerRank JavaScript Certificate",
    issuer: "HackerRank",
    date: "March 2025",
    link: "https://www.hackerrank.com/certificates/d317850aa12a",
  },
];

const Certification = () => {
  return (
    <div className="certification-container">
      <h2 className="section-title">Certifications</h2>
      <div className="certification-grid">
        {certificationsData.map((cert, index) => (
          <div
            key={cert.id}
            className="cert-card"
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className="cert-details">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-button"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
