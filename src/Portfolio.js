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
    features:["Completed function to extract data from Receipt's picture by using AI.", "Completed function to view total expense and earnings in form of charts of user by month and year.", "Developed feature to use AI to analyze the financial plan based on monthly income and expenses of the user.", "Developed feature create goal for saving in set preiod of timne.", "Developed options to change theme of the app and set password for the app to ensure security.", "Developed AI-powered chat bot to answer financial questions realted to the current financial situation of the user." ],
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
    features: ["Create user account and account restore with email verfication", "Create project and team with deadline and tasks",
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
    features: ["Create class schedule by providing which week days and time are class time.", "Create, edit and delete notes","Calculate how much grades need to be achieved to get deisred final grade of the course","Email function by using Gmail to email professor and classmates"]
  }
   
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
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style ={{marginLeft: "1rem"}}>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style ={{marginLeft: "1rem"}}>
                      Live Demo
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
