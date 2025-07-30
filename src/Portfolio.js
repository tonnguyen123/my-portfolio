import { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const projects = [
  {
    title: "Ton's AI Financial Management App",
    video: "https://www.youtube.com/embed/sgCwrGNKQSc",
    isYouTube: true,
    description:
      "A mobile app using AI to analyze to help user reach financial plan based on expenses and earnings of user",
    github: "https://github.com/tonnguyen123/ton-ai-finance-planner",
    live: "",
    status: "Partially Completed and In Development",
    icons:["/icons/react-native.webp","/icons/python.png", "/icons/flask-icon.webp"],
    features:["Completed function to extract data from Receipt's picture by using AI.", "Completed function to view total expense and earnings of user in form of charts by month and year.", "Developed feature to use AI to analyze the financial plan based on monthly income and expenses of the user.", "Developed feature create goal for saving in set period of time.", "Developed options to change theme of the app and set password for the app to ensure security.", "Developed AI-powered chat bot to answer financial questions related to the current financial situation of the user." ],
    demo: "https://www.youtube.com/watch?v=sgCwrGNKQSc",
  },
  {
    title: "Full Stack Ton's Project Tracker",
    video: "https://www.youtube.com/embed/IrJQLZUQ07A",
    isYouTube: true,
    description:"A full-stack web app to track tasks, deadlines, and with team management with features: ",
    github:"https://github.com/tonnguyen123/Full-Stack-Project-Tracker",
    live:"https://full-stack-ton-project-trackers.netlify.app/",
    status: "Completed",
    icons: ["/icons/react.svg", "/icons/typescript.svg","/icons/css-3.png","/icons/c-sharp.png","/icons/mysql.png","/icons/docker-icon.png"],
    features: ["Create user account and account restore with email verification", "Create project and team with deadline and tasks",
      "Add, update, remove and assign tasks to user", "Add, move tasks to dates on Calendar", "View graph and diagram of completion percentage of tasks and projects","Send messages between team members and email forwarded to Yahoo mail, Outlook mail or Gmail"]
  },
  {
    title: "Full Stack Ton's Demo Store",
    video: "https://www.youtube.com/embed/wF8TuIwjvwA",
    isYouTube: true,
    description:
      "This web app is demo of store for the owner to manage customer base and item inventory and demo of POS system:",
    github: "https://github.com/tonnguyen123/Full-Stack-Store",
    live: "https://ton-store.netlify.app",
    status: "Completed",
    icons: ["/icons/react.svg","/icons/js.png", "/icons/css-3.png", "/icons/nodejs.png", "/icons/mongodb.svg"],
    features: ["Search item, customer, address with autocomplete function", "Add, edit, remove information of items and customers","Demo of processing payment for or editing or updating items added in cart.", "View, download receipts from purchase history of customers.","Built in email function to send messages and files to customers."]
  },
  {
    title:"Student Organizer",
    video: "https://www.youtube.com/embed/Gtj1fL2XPpg",
    isYouTube: true,
    description:"This app is to help student to manage courses, class schedule and gpa planner:",
    github: "https://github.com/tonnguyen123/Study-Manager",
    live:"",
    status: "Completed",
    icons:["/icons/java.svg", "/icons/HSQLDB.webp","/icons/android-studio.png"],
    features: ["Create class schedule by providing which week days and time are class time.", "Create, edit and delete notes","Calculate how much grades need to be achieved to get desired final grade of the course","Email function by using Gmail to email professor and classmates"]
  }
];

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="morph-layer"></div>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
      <div className="blob blob5"></div>
      <div className="blob blob6"></div>
    </div>
  );
};

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  // Replace this URL with your actual resume URL on GitHub
  const resumeUrl = "https://github.com/tonnguyen123/my-portfolio/blob/main/public/TonNguyen_Resume.pdf"; 
  const linkedInUrl = "https://www.linkedin.com/in/tomn-nguyen/";
  const githubUrl = "https://github.com/tonnguyen123"; // Update with your GitHub profile

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fixed function name and target ID
  const handleProjectClick = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Inline styles for button icons
  const buttonIconStyle = {
    width: '20px',
    height: '20px',
    marginRight: '8px',
    filter: 'brightness(0) invert(1)', // Makes icons white to match button text
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="portfolio">
      <AnimatedBackground />

      <header className="portfolio-header glass-card">
        <h1>Ton Nguyen</h1>
        <p>
          Full-Stack & Mobile App Developer | React, Java, JavaScript, TypeScript, C#, .NET, Python, Flask | MongoDB, MySQL, NoSQL, SQLite,
          HSQLDB | Hosting: Netlify, Render, AWS
        </p>
        <div className="button-container">
          <button className="glass-button" onClick={handleContactClick} style={buttonStyle}>
            <img src="/icons/email.png" alt="" style={buttonIconStyle} />
            CONTACT
          </button>
          <button 
            onClick={() => window.open('/resume', '_blank')} 
            className="glass-button"
            style={buttonStyle}
          >
            <img src="/icons/resume_4822907.png" alt="" style={buttonIconStyle} />
            RESUME
          </button>
          <a 
            href={linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-button"
            style={buttonStyle}
          >
            <img src="/icons/linkedin-logo.png" alt="" style={buttonIconStyle} />
            LINKEDIN
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-button"
            style={buttonStyle}
          >
            <img src="/icons/github-logo.png" alt="" style={buttonIconStyle} />
            GITHUB
          </a>
          <button className="glass-button" onClick={handleProjectClick} style={buttonStyle}>
            <img src="/icons/projects.png" alt="" style={buttonIconStyle} />
            PROJECTS
          </button>
        </div>
      </header>

      <section className="portfolio-section">
        <div className="glass-card">
          <h1 className="section-title">About me</h1>
          <p className="section-content">
            I'm a passionate full-stack developer with a B.Sc. in Computer Science from the University of Manitoba,
            specializing in building real-world applications using React, TypeScript, C#, Python, and SQL.
          </p>
          <p className="section-content">
            I enjoy solving complex problems and continually challenge myself to write clean, scalable, and efficient
            code. My projects reflect my ability to manage both frontend and backend development — from designing
            intuitive user interfaces to implementing secure APIs and databases.
          </p>
          <p className="section-content">
            I believe software engineering is more than just coding — it's about understanding users, working as a
            team, and delivering value. I take initiative, learn fast, and stay current with tools and technologies like
            JWT authentication, RESTful APIs, mobile development with React Native, and AI integration.
          </p>
          <p className="section-content">
            I'm eager to contribute to a team where I can keep growing, building, and making a real impact through
            technology.
          </p>
        </div>
      </section>

      <section className="portfolio-section" id="projects">
        <div className="glass-card">
          <h2 className="section-title">Completed Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="project-title">{project.title}</h3>

                {project.isYouTube ? (
                  <iframe
                    className="project-video"
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
                  />
                )}

                <p className="project-description">{project.description}</p>

                {project.features && (
                  <ul className="project-features">
                    {project.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                {project.icons && (
                  <div className="tech-icons">
                    {project.icons.map((icon, i) => (
                      <img key={i} src={icon} alt="tech-icon" className="tech-icon" />
                    ))}
                  </div>
                )}

                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      style={buttonStyle}
                    >
                      <img src="/icons/github-logo.png" alt="" style={{...buttonIconStyle, filter: 'none', width: '16px', height: '16px'}} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      style={buttonStyle}
                    >
                      <img src="/icons/external-link.png" alt="" style={{...buttonIconStyle, filter: 'none', width: '16px', height: '16px'}} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="contact">
        <div className="glass-card contact-section">
          <h2 className="section-title">Contact</h2>
          <p className="contact-email">Email: tomy280296@gmail.com</p>
          <div className="contact-info">
            <p>I'm always interested in new opportunities and exciting projects.</p>
            <p>Feel free to reach out if you'd like to collaborate or just say hello!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
