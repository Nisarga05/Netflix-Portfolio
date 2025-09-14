import React from "react";
import "../style.css/project.css"; 

const projectsData = [
  {
    id: 1,
    title: "Wellness App Website",
    description: "Website where wellness sessions can be hosted.",
    image: "/wellnessapp.png",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB", "React+Vite", "Vercel", "Render"],
    link: "https://wellness-app-fawn.vercel.app/",
  },
  {
    id: 2,
    title: "Chat-bot",
    description: "Interactive chatbot.",
    image: "/chat-bot.png",
    tech: ["React", "Tailwind CSS"],
    link: "https://nisarga05.github.io/Chat-bot/",
  },
  {
    id: 3,
    title: "Student Management System",
    description: "Web app to manage students, courses, and attendance.",
    image: "/student-management.png",
    tech: ["Pug", "Node.js", "MongoDB", "Express", "React"],
    link: "https://nisarga05.github.io/Student-Management-system/",
  },
  {
    id: 4,
    title: "Netflix-Portfolio",
    description: "Netflix themed Portfolio",
    image: "/netflixport.png",
    tech: ["HTML", "CSS", "JavaScript", "React+Vite"],
    link: "https://netflix-portfolio.example.com",
  },
  {
    id: 5,
    title: "Habit Tracker",
    description: "Track your daily habits and routines easily.",
    image: "/habit-tracker.png",
    tech: ["React", "CSS", "LocalStorage"],
    link: "https://nisarga05.github.io/Habit-Tracker/",
  },
  {
    id: 6,
    title: "Catch Game",
    description: "A fun browser-based game where you catch falling objects.",
    image: "/catch-game.png",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://nisarga05.github.io/princess-catch-game/index.html",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a
            key={project.id}
            href={project.link}             
            target="_blank"                  
            rel="noopener noreferrer"        
            className="project-card"
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.tech.map((techItem, idx) => (
                  <span key={idx} className="tech-badge">{techItem}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
