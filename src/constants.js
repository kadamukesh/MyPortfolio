// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";

import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";

import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import klLogo from "./assets/education_logo/gla_logo.png";
import chaitanyaLogo1 from "./assets/education_logo/bsa_logo.png";
import chaitanyaLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import erp from "./assets/work_logo/erp.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import ami from "./assets/work_logo/ami.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

//This page just we created array of objects with all the data we want to use
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Material UI", logo: materialuiLogo },
      // { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      // { name: "Node JS", logo: nodejsLogo },
      // { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      // { name: "MongoDB", logo: mongodbLogo },
      // { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },

      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },

      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },

      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];
export const education = [
  {
    id: 1,
    img: chaitanyaLogo1, // Replace with your KL University logo variable
    school: "KL University, Guntur",
    date: "June 2022 - June 2026",
    grade: "9.6 CGPA",
    desc: "I am pursuing my B.Tech in Computer Science and Engineering at KL University, Guntur. The university is known for its academic excellence, innovation-driven curriculum, and vibrant campus environment. My coursework and projects have strengthened my skills in programming, web development, and problem-solving.",
    degree:
      "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
  {
    id: 2,
    img: klLogo, // Replace with your Sri Chaitanya logo variable
    school: "Sri Chaitanya Techno School / Junior College",
    date: "2020 - 2022",
    grade: "943 / 1000",
    desc: "I completed my Intermediate (MPC) at Sri Chaitanya, where I developed a solid foundation in Mathematics, Physics, and Chemistry. The rigorous academic environment helped me prepare for engineering entrance exams and built my analytical skills.",
    degree: "Intermediate - MPC",
  },
  {
    id: 3,
    img: chaitanyaLogo, // Same logo as above if needed
    school: "Sri Chaitanya Techno School",
    date: "2019 - 2020", // Assuming date; update if needed
    grade: "581 / 600",
    desc: "I completed my Class X at Sri Chaitanya Techno School, where I focused on Science and Mathematics and built a strong academic base.",
    degree: "SSC",
  },
];

export const projects = [
  {
    id: 0,
    title: "ERP  For Educational System",
    description:
      "A customizable ERP system for educational institutions to manage academics, administration, scheduling, records, and communication across Admin, Teacher, Student, and Administrator roles.",
    image: erp,
    tags: ["React JS", "Spring Boot", "MySQL"],
    github: "https://github.com/kadamukesh/ERP",
    webapp: "https://mherp.vercel.app/",
  },
  {
    id: 1,
    title: "Image gallery",
    description:
      "A responsive and minimal image gallery website with category-based navigation, built using HTML, CSS,Java Script",
    image: csprepLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kadamukesh/Album",
    webapp: "https://kadamukesh.github.io/Album/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/kadamukesh/ReactMovieApp",
    webapp: "https://react-movie-app-bay.vercel.app/",
  },
  {
    id: 3,
    title: "QR Generator",
    description:
      "A QR Code Generator is a web tool built with HTML, CSS, and JavaScript that takes user input (text or URL) and dynamically generates a scannable QR code using a JavaScript library like qrcode.js.",
    image: npmLogo,
    tags: ["HTML", "CSS", "Java Script"],
    github: "https://github.com/kadamukesh/QR",
    webapp: "https://kadamukesh.github.io/QR/",
  },
  {
    id: 4,
    title: "Amazon-Clone",
    description:
      "An Amazon clone is a web application that replicates the core features of Amazon, including product listings, search, cart, and checkout, using HTML, CSS, JavaScript, and optionally backend technologies.",
    image: ami,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/kadamukesh/Amazon-Clone",
    webapp: "https://kadamukesh.github.io/Amazon-Clone/",
  },
  {
    id: 5,
    title: "Passanger Counter App",
    description:
      "Developed a Passenger Counter using HTML, CSS, and JavaScript to dynamically track and display the number of people entering or exiting.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kadamukesh/passenger-counter",
    webapp: "https://dainty-naiad-3b2bf4.netlify.app/",
  },
  {
    id: 6,
    title: "Event Management System",
    description:
      "Developed an enterprise-level Event Management System with role-based access (Admin, Faculty, Student), modular architecture, and integrated Razorpay for seamless registration and certificate management using JSP, JSF, and Servlets.",
    image: cmLogo,
    tags: ["JSF", "JSP", "Servlets", "MySQL"],
    github: "https://github.com/kadamukesh/Event-Management-System",
    webapp: "https://github.com/kadamukesh/Event-Management-System",
  },
  {
    id: 7,
    title: "Astrology Prediction System",
    description:
      "Engineered a Django-based Astrology Prediction System delivering personalized zodiac sign detection, daily/weekly horoscopes, and real-time analysis using Django, HTML, CSS, and PostgreSQL",

    image: imagesearchLogo,
    tags: ["DJANGO", "HTMl", "CSS", "PostgreSQL"],
    github: "#",
    webapp: "#",
  },
  {
    id: 8,
    title: "Weather Prediction System",
    description:
      "Developed a Weather API project using Django to fetch and display real-time weather data based on user input",
    image: removebgLogo,
    tags: ["DJANGO", "HTMl", "CSS", "PostgreSQL"],
    github: "#",
    webapp: "#",
  },
];
