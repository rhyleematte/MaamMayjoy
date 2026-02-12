"use client";
import { useState } from "react";
import Image from "next/image";
import profilePic from "../public/janrey.jpg";

export default function HomePage() {
  const [hovered, setHovered] = useState(false);

  return (
    <main style={{ padding: "40px 40px 80px" }}>

      {/* About Me Section */}
      <section id="about" style={aboutSectionStyle}>
        {/* Profile Picture */}
        <div
          style={profilePicWrapper}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={250}
            height={250}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: hovered
                ? "0 0 20px 5px rgba(75, 0, 130, 0.9)"
                : "0 4px 15px rgba(46, 5, 35, 0.6)",
              border: "3px solid rgba(255, 255, 255, 0.3)",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            priority
          />
        </div>

        {/* About Me Text */}
        <div style={aboutTextStyle}>
          <h1 style={headingStyle}>About Me</h1>
          <p style={paragraphStyle}>
            I am a passionate Full Stack Developer with experience building dynamic, user-friendly web applications from the ground up. I enjoy working on both front-end and back-end technologies, translating complex requirements into efficient, scalable solutions. With a solid foundation in HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB and SQL, I thrive in creating seamless digital experiences while ensuring robust performance and security.
          </p>

          {/* Let's Get Started Button */}
          <button
            style={getStartedButtonStyle}
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Get Started
          </button>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" style={sectionStyle}>
        <h1 style={headingStyle}>Featured Projects</h1>
        <div style={projectsContainerStyle}>
          {/* Project 1 */}
          <div style={projectCardStyle}>
            <Image
              src="/socialmedia.jpg"
              alt="Social Media App"
              width={400}
              height={250}
              style={{ borderRadius: "12px", objectFit: "cover" }}
            />
            <h2 style={projectTitleStyle}>Social Media App</h2>
            <div style={projectDescStyle}>
              <p>Features: User authentication, profiles, posts, comments, likes, messaging.</p>
              <p>Backend: Real-time updates with WebSockets, database relationships.</p>
              <p>Technologies: React + Node.js/Express + MongoDB + Socket.io.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div style={projectCardStyle}>
            <Image
              src="/ecommerce.jpg"
              alt="Project 2"
              width={400}
              height={250}
              style={{ borderRadius: "12px", objectFit: "cover" }}
            />
            <h2 style={projectTitleStyle}>Midnight Comfort Tee</h2>
            <p style={projectDescStyle}>
              Experience all-day comfort with our Midnight Comfort Tee, crafted from ultra-soft, breathable cotton. Its sleek design and tailored fit make it perfect for casual outings or layering under your favorite jacket. Available in multiple colors, this tee is your go-to for effortless style and comfort.
            </p>
          </div>

          {/* Project 3 */}
          <div style={projectCardStyle}>
            <Image
              src="/blogging.jpg"
              alt="Project 3"
              width={400}
              height={250}
              style={{ borderRadius: "12px", objectFit: "cover" }}
            />
            <h2 style={projectTitleStyle}>Boost Your Blog Like a Pro!</h2>
            <p style={projectDescStyle}>
              Take your blogging game to the next level with our all-in-one blogging toolkit. From sleek themes and customizable templates to SEO-friendly plugins and content planning tools, everything you need to create a stunning, high-traffic blog is right here. Perfect for beginners and seasoned bloggers alike, our products make writing, designing, and growing your blog easier than ever. Start turning your ideas into a thriving online presence today!
            </p>
          </div>

          {/* Project 4 */}
          <div style={projectCardStyle}>
            <Image
              src="/task.jpg"
              alt="Project 4"
              width={400}
              height={250}
              style={{ borderRadius: "12px", objectFit: "cover" }}
            />
            <h2 style={projectTitleStyle}>Stay Organized, Achieve More</h2>
            <p style={projectDescStyle}>
              Simplify your work and boost productivity with our powerful task management tool. Easily create, assign, and track tasks, set deadlines, and prioritize what matters most—all in one intuitive platform. Perfect for teams and individuals, it keeps projects on schedule and stress off your plate. Get things done smarter, faster, and more efficiently today!
            </p>
          </div>
        </div>
      </section>

      <section id="skills" style={sectionStyle}>
  <h1 style={headingStyle}>Skills</h1>
  <div style={skillsColumnsStyle}>
    {/* Front-End */}
    <div style={{ ...skillCategoryStyle, backgroundColor: "#4B0082", padding: "16px", borderRadius: "12px" }}>
      <h2 style={skillHeadingStyle}>Front-End (Client-Side) Skills</h2>
      <ul style={{ ...skillListStyle, color: "white" }}>
        <li>HTML/CSS – Building and styling web pages</li>
        <li>JavaScript – Adding interactivity and dynamic behavior</li>
        <li>Front-End Frameworks/Libraries – React, Angular, Vue.js, Svelte</li>
        <li>Responsive Design – Mobile, tablet, desktop</li>
        <li>UI/UX Principles – User experience & design best practices</li>
        <li>Version Control Basics – Git/GitHub</li>
      </ul>
    </div>

    {/* Back-End */}
    <div style={{ ...skillCategoryStyle, backgroundColor: "#4B0082", padding: "16px", borderRadius: "12px" }}>
      <h2 style={skillHeadingStyle}>Back-End (Server-Side) Skills</h2>
      <ul style={{ ...skillListStyle, color: "white" }}>
        <li>Server-Side Languages – Node.js, Python, Ruby, Java, PHP, C#</li>
        <li>Databases – SQL (MySQL, PostgreSQL) & NoSQL (MongoDB, Firebase)</li>
        <li>API Development – RESTful APIs, GraphQL</li>
        <li>Authentication & Authorization – Secure user management</li>
        <li>Server Management & Deployment – AWS, Azure, Docker, Kubernetes</li>
      </ul>
    </div>

    {/* Other Essential Skills */}
    <div style={{ ...skillCategoryStyle, backgroundColor: "#4B0082", padding: "16px", borderRadius: "12px" }}>
      <h2 style={skillHeadingStyle}>Other Essential Skills</h2>
      <ul style={{ ...skillListStyle, color: "white" }}>
        <li>Version Control Systems – Git, GitHub/GitLab/Bitbucket</li>
        <li>Problem-Solving & Algorithms – Efficient, clean code</li>
        <li>Testing & Debugging – Unit tests, integration tests</li>
        <li>DevOps Basics – CI/CD, containerization</li>
        <li>Soft Skills – Communication, teamwork, adaptability</li>
      </ul>
    </div>
  </div>
</section>


      <section id="tech" style={sectionStyle}>
  <h1 style={headingStyle}>Technology</h1>

  {/* Front-End Technologies */}
  <div style={{ ...techCategoryStyle, backgroundColor: "#4B0082", padding: "16px", borderRadius: "12px" }}>
    <h2 style={techHeadingStyle}>Front-End (Client-Side) Technologies</h2>
    <ul style={{ ...techListStyle, color: "white" }}>
      <li>HTML5 & CSS3 – Markup and styling of web pages</li>
      <li>JavaScript – Core scripting language for interactivity</li>
      <li>Front-End Frameworks/Libraries: React.js, Angular, Vue.js, Svelte</li>
      <li>CSS Frameworks: Bootstrap, Tailwind CSS, Material UI</li>
      <li>Responsive Design & Media Queries – Ensuring mobile-friendly layouts</li>
      <li>AJAX / Fetch API – Communicating with back-end servers asynchronously</li>
    </ul>
  </div>

  {/* Back-End Technologies */}
  <div style={{ ...techCategoryStyle, backgroundColor: "#4B0082", padding: "16px", borderRadius: "12px" }}>
    <h2 style={techHeadingStyle}>Back-End (Server-Side) Technologies</h2>
    <ul style={{ ...techListStyle, color: "white" }}>
      <li>Programming Languages: Node.js, Python (Django/Flask), Java (Spring Boot), Ruby (Rails), PHP (Laravel), C# (.NET Core)</li>
      <li>Server Frameworks: Express.js (Node.js), Django, Flask, Spring, Rails</li>
      <li>Databases:
        <ul>
          <li>Relational (SQL): MySQL, PostgreSQL, Oracle, SQL Server</li>
          <li>NoSQL: MongoDB, Firebase, Cassandra, CouchDB</li>
        </ul>
      </li>
      <li>API Development: RESTful APIs, GraphQL</li>
      <li>Authentication & Security: OAuth, JWT, HTTPS, encryption techniques</li>
    </ul>
  </div>

  {/* DevOps & Deployment Tools */}
  <div style={{ ...techCategoryStyle, backgroundColor: "#4B0082", padding: "16px", borderRadius: "12px" }}>
    <h2 style={techHeadingStyle}>DevOps & Deployment Tools</h2>
    <ul style={{ ...techListStyle, color: "white" }}>
      <li>Version Control: Git, GitHub, GitLab, Bitbucket</li>
      <li>Containerization: Docker, Kubernetes</li>
      <li>Cloud Platforms: AWS, Azure, Google Cloud</li>
      <li>CI/CD Tools: Jenkins, GitHub Actions, GitLab CI</li>
      <li>Server Management: Nginx, Apache, Linux basics</li>
    </ul>
  </div>

  {/* Additional Tools & Technologies */}
  <div style={{ ...techCategoryStyle, backgroundColor: "#4B0082", padding: "16px", borderRadius: "12px" }}>
    <h2 style={techHeadingStyle}>Additional Tools & Technologies</h2>
    <ul style={{ ...techListStyle, color: "white" }}>
      <li>Testing Tools: Jest, Mocha, Selenium, Cypress</li>
      <li>Package Managers: npm, yarn, pip</li>
      <li>Task Runners / Bundlers: Webpack, Gulp, Parcel</li>
      <li>Real-Time Communication: WebSockets, Socket.io</li>
      <li>Monitoring & Analytics: New Relic, Google Analytics</li>
    </ul>
  </div>
</section>


    </main>
  );
}

// Styles
const aboutSectionStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "40px",
  paddingTop: "20px",
};

const profilePicWrapper = {
  flexShrink: 0,
};

const aboutTextStyle = {
  maxWidth: "600px",
};

const sectionStyle = {
  minHeight: "100vh",
  paddingTop: "40px",
};

const headingStyle = {
  fontWeight: 600,
  fontSize: "2.2rem",
  marginBottom: "16px",
};

const paragraphStyle = {
  fontWeight: 300,
  lineHeight: 1.8,
  fontSize: "1.1rem",
  marginBottom: "16px",
};

const getStartedButtonStyle = {
  marginTop: "24px",
  padding: "12px 28px",
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "white",
  backgroundColor: "#4B0082",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const projectsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  marginTop: "24px",
};

const projectCardStyle = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#111",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(75,0,130,0.3)",
};

const projectTitleStyle = {
  fontWeight: 600,
  fontSize: "1.5rem",
  marginTop: "12px",
  marginBottom: "8px",
};

const projectDescStyle = {
  fontWeight: 300,
  fontSize: "1rem",
  lineHeight: 1.6,
};

const skillsColumnsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "40px",
  marginTop: "16px",
};

const skillCategoryStyle = {
  flex: "1 1 300px",
  minWidth: "250px",
  marginBottom: "24px",
};

const skillHeadingStyle = {
  fontWeight: 500,
  fontSize: "1.3rem",
  marginBottom: "12px",
};

const skillListStyle = {
  listStyleType: "disc",
  paddingLeft: "20px",
  lineHeight: 1.7,
  fontWeight: 300,
  fontSize: "1.05rem",
};

const techCategoryStyle = {
  flex: "1 1 300px",
  minWidth: "250px",
  marginBottom: "24px",
};

const techHeadingStyle = {
  fontWeight: 500,
  fontSize: "1.3rem",
  marginBottom: "12px",
};

const techListStyle = {
  listStyleType: "disc",
  paddingLeft: "20px",
  lineHeight: 1.7,
  fontWeight: 300,
  fontSize: "1.05rem",
};
