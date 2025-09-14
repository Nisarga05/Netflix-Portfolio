import React from "react";
import "../style.css/skill.css"; 

const skillsData = {
  frontend: [
    { name: "HTML", icon: "🌐", description: "Markup language" },
    { name: "CSS", icon: "🎨", description: "Styling web pages" },
    { name: "JavaScript", icon: "⚡", description: "Interactive web apps" },
    { name: "React", icon: "⚛️", description: "Frontend library" },
    { name: "Vite", icon: "⚡", description: "Fast frontend build tool" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", description: "Server-side JS" },
    { name: "Express.js", icon: "🚂", description: "Web framework" },
    { name: "Python", icon: "🐍", description: "Backend scripting" },
  ],
  database: [
    { name: "MySQL", icon: "💾", description: "Relational DB" },
    { name: "MongoDB", icon: "🍃", description: "NoSQL DB" },
   
  ],
  tools: [
    { name: "Git", icon: "🔧", description: "Version control for projects" },
    { name: "GitHub", icon: "🐙", description: "Code hosting and collaboration" },
    { name: "VS Code", icon: "🖥️", description: "Code editor for development" },
    { name: "Postman", icon: "📬", description: "Test and interact with APIs" },
  ],
  automation: [
    { name: "n8n (basics)", icon: "🤖", description: "Workflow automation tool" },
    { name: "Webhooks (basics)", icon: "🔔", description: "Trigger actions from events" },
  ],
};

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="icon">{skill.icon}</div>
    <div className="skill-name">
      {skill.name.split("").map((letter, idx) => (
        <span
          key={idx}
          className="letter"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
    <div className="skill-description">{skill.description}</div>
  </div>
);

const SkillSection = ({ title, skills }) => (
  <div>
    <h2 className="category-title">{title}</h2>
    <div className="skills-grid">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="skills-container">
      

      <SkillSection title="Frontend" skills={skillsData.frontend} />
      <SkillSection title="Backend" skills={skillsData.backend} />
      <SkillSection title="Database" skills={skillsData.database} />
      <SkillSection title="Tools" skills={skillsData.tools} />
      <SkillSection title="Automation" skills={skillsData.automation} />
    </div>
  );
};

export default Skills;
