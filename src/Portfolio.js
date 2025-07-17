import { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const projects = [
  {
    title: "Ton's AI Financial Management App",
    video: "https://www.youtube.com/embed/sgCwrGNKQSc",
    isYouTube: true,
    description:
      "A smart app that helps users track spending, income, goals, and alerts using voice, OCR, charts, and AI budget tips.",
    stack: ["React Native", "Flask", "SQLite", "OpenAI", "Mindee OCR"],
    repo: "https://github.com/tonquocviet/financial-planner-app",
    demo: "https://www.youtube.com/watch?v=sgCwrGNKQSc",
  },
  {
    title: "Full Stack Ton's Project Tracker",
    video: "/gifs/Project-Tracker.mp4",
    description: "A full-stack web app to track tasks, deadlines, and with team management with features:",
    github: "https://github.com/tonnguyen123/Full-Stack-Project-Tracker",
    live: "https://full-stack-ton-project-trackers.netlify.app/",
    status: "Completed",
    icons: [
      "/icons/react.svg",
      "/icons/typescript.svg",
      "/icons/css-3.png",
      "/icons/c-sharp.png",
      "/icons/mysql.png",
      "/icons/docker-icon.png",
    ],
    features: [
      "Create user account and restore with email verification",
      "Create project and team with deadline and tasks",
      "Add, update, remove and assign tasks",
      "Calendar integration",
      "Graph and task visualization",
      "Internal messaging & email forwarding",
    ],
  },
  // Add others below if needed...
];

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="portfolio">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/gifs/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className="portfolio-header bg-header section-card">
        <h1>Ton Nguyen</h1>
        <p>
          Full-Stack & Mobile App Developer | React, Java, JavaScript, TypeScript, C#, Python | MongoDB, MySQL, NoSQL,
          HSQLDB | Hosting: Netlify, Render, AWS
        </p>
        <button
          className="contact-button"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          CONTACT
        </button>
      </header>

      <section className="bg-about">
        <div className="section-card">
          <h1>About me</h1>
          <p>
            I’m a passionate full-stack developer with a B.Sc. in Computer Science from the University of Manitoba,
            specializing in building real-world applications using React, TypeScript, C#, Python, and SQL.
          </p>
          <p>
            I enjoy solving complex problems and continually challenge myself to write clean, scalable, and efficient
            code. My projects reflect my ability to manage both frontend and backend development — from designing
            intuitive user interfaces to implementing secure APIs and databases.
          </p>
          <p>
            I believe software engineering is more than just coding — it’s about understanding users, working as a
            team, and delivering value. I take initiative, learn fast, and stay current with tools and technologies like
            JWT authentication, RESTful APIs, mobile development with React Native, and AI integration.
          </p>
          <p>
            I’m eager to contribute to a team where I can keep growing, building, and making a real impact through
            technology.
          </p>
        </div>
      </section>

      <section className="projects-section bg-completed">
        <div className="section-card">
          <h2>Completed Projects and In Progress Project</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`project-card ${hovered === index ? "hovered" : ""}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{project.title}</h3>

                {project.isYouTube ? (
                  <iframe
                    className="project-video"
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      aspectRatio: "16 / 9",
                      marginBottom: "1rem",
                    }}
                  />
                ) : (
                  <video
                    className="project-video"
                    src={project.video}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      marginBottom: "1rem",
                    }}
                  />
                )}

                <p>{project.description}</p>

                {project.stack && (
                  <ul style={{ paddingLeft: "1rem" }}>
                    {project.stack.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}

                {project.features && (
                  <ul style={{ paddingLeft: "1rem" }}>
                    {project.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                {project.icons && (
                  <div style={{ display: "flex", gap: "8px", margin: "1rem 0" }}>
                    {project.icons.map((icon, i) => (
                      <img key={i} src={icon} alt="tech-icon" width="40" />
                    ))}
                  </div>
                )}

                <div className="links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-contact" id="contact">
        <div className="section-card contact-section">
          <h2>Contact</h2>
          <p>Email: tomy280296@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
