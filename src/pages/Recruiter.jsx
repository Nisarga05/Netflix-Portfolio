import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import "../style.css/profile.css";

const profileData = {
  Recruiter: {
    heroVideo: "/video1.mp4",
    heroTitle: "Nisarga Chandrashekar - Full Stack Developer",
    heroText:
      "Growing  full-stack  JavaScript  developer  here,  learning  by   building, building  by  deploying.  I’m  mastering  HTML,  CSS,  and  JavaScript  fundamentals,   then  leveling  up  with  React,  Vite,  Node.js, Express, MongoDB, and API-building. Every day is one more commit, one more deploy, one more lesson learned, crafting web experiences that look good and feel solid.",
    continueWatching: "Continue Watching for Recruiter",
  },
  Developer: {
    heroVideo: "/video2.mp4",
    heroTitle: "Nisarga - Developer Profile",
    heroText:
      "Developer-specific text goes here...",
    continueWatching: "Continue Watching for Developer",
  },
  
};

export default function ProfilePage() {
  const { profile } = useParams();
  const data = profileData[profile];

  if (!data) return <div>Profile not found</div>;

  return (
    <div className="page">
      <Navbar />
      <section className="hero">
        <video
          src={data.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
        <div className="hero-content">
          <h1>{data.heroTitle}</h1>
          <h3>{data.heroText}</h3>
          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn resume-btn"
            >
              ▶ Resume
            </a>
            <a
              href="https://www.linkedin.com/in/nisargachandrashekar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn linkedin-btn"
            >
              ℹ️ LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="text1">Today's Top Picks for You</section>
      <section className="scroll1">
        <Link to="/skills" className="box1">
          Skills
        </Link>
        <Link to="/projects" className="box1">
          Projects
        </Link>
        <Link to="/certificates" className="box1">
          Certification
        </Link>
        <Link to="/hire" className="box1">
          Contact Me
        </Link>
      </section>

      <section className="text2">{data.continueWatching}</section>
      <section className="scroll2">
        <div className="box1">Coming Soon</div>
        <div className="box1">Coming Soon</div>
      </section>

      <section className="scroll-row"></section>
    </div>
  );
}
