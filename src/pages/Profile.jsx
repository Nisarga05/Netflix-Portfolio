import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import "../style.css/profile.css";

const profileData = {
  Recruiter: {
    heroVideo: "/recruiter.mp4",
    heroTitle: "Nisarga Chandrashekar - Full Stack Developer",
    heroText:
     "Growing full-stack JavaScript developer here, learning by building, building by deploying. I’m mastering HTML, CSS, and JavaScript fundamentals, then leveling up with React, Vite, Node.js, Express, MongoDB, and API-building. Every day is one more commit, one more deploy, one more lesson learned, crafting web experiences that look good and feel solid.",
    continueWatching: "Continue Watching for Recruiter",
    specialTextStyle: true, 
  },
  Developer: {
    heroVideo: "/developer.mp4",
    heroTitle: "Nisarga Chandrashekar - Full Stack Developer",
    heroText:
"Growing full-stack JavaScript developer here, learning by building, building by deploying. I’m mastering HTML, CSS, and JavaScript fundamentals, then leveling up with React, Vite, Node.js, Express, MongoDB, and API-building. Every day is one more commit, one more deploy, one more lesson learned, crafting web experiences that look good and feel solid.",
    continueWatching: "Continue Watching for Developer",
    specialTextStyle: false,
  },
  Stalker: {
    heroVideo: "/stalker.mp4",
    heroTitle: "Nisarga Chandrashekar - Full Stack Developer",
    heroText:
"Growing full-stack JavaScript developer here, learning by building, building by deploying. I’m mastering HTML, CSS, and JavaScript fundamentals, then leveling up with React, Vite, Node.js, Express, MongoDB, and API-building. Every day is one more commit, one more deploy, one more lesson learned, crafting web experiences that look good and feel solid.",      
    continueWatching: "Continue Watching for Stalker",
    specialTextStyle: false,
  },
  Explorer: {
    heroVideo: "/explorer.mp4",
    heroTitle: "Nisarga Chandrashekar - Full Stack Developer",
    heroText:
    "Growing full-stack JavaScript developer here, learning by building, building by deploying. I’m mastering HTML, CSS, and JavaScript fundamentals, then leveling up with React, Vite, Node.js, Express, MongoDB, and API-building. Every day is one more commit, one more deploy, one more lesson learned, crafting web experiences that look good and feel solid.",
    continueWatching: "Continue Watching for Explorer",
    specialTextStyle: false,
  },
};




export default function ProfilePage() {
  const { profile } = useParams();
  const data = profileData[profile];

  if (!data) return <div>Profile not found</div>;

  return (
    <div className="page">
      <Navbar profile={profile} />
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
          <h3 className={profile === "Recruiter" ? "hero-text recruiter-text" : "hero-text"}>
          {data.heroText}
          </h3>

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
        <img className="img1" src="/skill.jpeg" alt="Skills" />
        <span className="box-title">Skills</span>
        </Link>
        <Link to="/projects" className="box1">
        <img className="img1" src="/project.jpeg" alt="Projects" />
        <span className="box-title">Projects</span>
        </Link>
        <Link to="/certificates" className="box1">
        <img className="img1" src="/certification.jpeg" alt="Certificates" />
          <span className="box-title">Certificates</span>
        </Link>
        <Link to="/hire" className="box1">
        <img className="img1" src="/contact.jpeg" alt="Contact Me" />
          <span className="box-title">Contact Me</span>
        </Link>
      </section>

      <section className="text2">{data.continueWatching}</section>
      <section className="scroll2">
        <div className="box1">
          <span className="box-title">Coming soon</span>
        </div>
        <div className="box1">
          <span className="box-title">Coming soon</span>
        </div>
      </section>

      <section className="scroll-row"></section>
    </div>
  );
}
