import { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";


const projects = [
  {
    title: "Ton's AI Financial Management App",
    video: "/gifs/demo-financial-app.mp4",
    description:
      "A mobile app using AI to analyze to help user reach financial plan based on expenses and earnings of user",
    github: "https://github.com/tonnguyen123/ton-ai-finance-planner",
    live: "",
    status: "Partially Completed and In Development",
    icons:["/icons/react-native.webp","/icons/python.png", "/icons/flask-icon.webp"],
    features:["Completed function to extract data from Receipt's picture by using AI.", "Completed function to view total expense and earnings of user by month and year.", "Developing function to use AI to analyze the financial plan based on monthly income and expenses of the user.", "Developing feature to create notification for user if they spend over the allowed limit and alert if it affects to financial plan.", "Developing feature to make reminder by voice to text using AI to remind user of things to achieve their financial plan." ]
  },
  {
    title: "Full Stack Ton's Project Tracker",
    video:"/gifs/Project-Tracker.mp4",
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
    video: "/gifs/final-store.mp4 ",
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
    video:"/gifs/Study-manager.mp4",
    description:"This app is to help student to manage courses, class schedule and gpa planner:",
    github: "https://github.com/tonnguyen123/Study-Manager",
    live:"",
    status: "Completed",
    icons:["/icons/java.svg", "/icons/HSQLDB.webp","/icons/android-studio.png"],
    features: ["Create class schedule by providing which week days and time are class time.", "Create, edit and delete notes","Calculate how much grades need to be achieved to get deisred final grade of the course","Email function by using Gmail to email professor and classmates"]
  }
   
];

const pendingProjects = [
  {
    title: "AI Life Admin App",
    image: "/gifs/progress.jpg",
    description:
      "A mobile app using AI to extract information from incoming email, documents and explain to users. It will also have function of tracking budget for expenses. Will be built with React Native and Python.",
    github: "https://github.com/yourusername/ai-life-admin",
    live: "",
    icons:["/icons/react-native.webp","/icons/python.png"]
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
        <p>Full-Stack & Mobile App Developer | React, Java, JavaScript, TypeScript, C#, Python | MongoDB, MySQL, NoSQL, HSQLDB |Hosting: Netlify, Render, AWS</p>
        <button
        className="contact-button"
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >CONTACT</button>
      </header>

      <section className="bg-about">
        <div className="section-card">
          <h1>About me</h1>
          <p>I’m a passionate full-stack developer with a B.Sc. in Computer Science from the University of Manitoba, specializing in building real-world applications using React, TypeScript, C#, Python, and SQL.
          </p>
          <p>I enjoy solving complex problems and continually challenge myself to write clean, scalable, and efficient code. My projects reflect my ability to manage both frontend and backend development — from designing intuitive user interfaces to implementing secure APIs and databases.</p>
          <p>I believe software engineering is more than just coding — it’s about understanding users, working as a team, and delivering value. I take initiative, learn fast, and stay current with tools and technologies like JWT authentication, RESTful APIs, mobile development with React Native, and AI integration.</p>
          <p>I’m eager to contribute to a team where I can keep growing, building, and making a real impact through technology.</p>
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
                 <video
                  className="project-video"
                  src={project.video}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", borderRadius: "12px" }}
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>Status: {project.status}</p>
                  <h4>About</h4>
                  <p>{project.description}</p>
                  {
                    project.features.map((feature,i)=>(
                      <span>- {feature}</span>
                    )
                  )}
                  <h4>Used Technology</h4>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                    {project.icons && project.icons.map((icon, i) => (
                      <img key={i} alt={i} src={icon} width="50" />
                    ))}
                  </div>
                  <div className="links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
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
