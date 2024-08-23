import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  bootstrap,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  dot,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  tryon,
  resume,
  yout,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Technohacks Edutech",
    icon: dot,
    iconBg: "#383E56",
    date: "Aug 2023 - Sept 2023",
    points: [
      " Contributed to frontend and backend development using React and Node.js to create dynamic web applications.",
" Collaborated with cross-functional teams to translate business requirements into technical implementations.",
"Optimized application performance, enhancing user experience and reducing load times.",
"Managed code repositories with Git and participated in deployment processes for seamless updates.",
    ],
  },
  {
    title: "Frontend  Developer",
    company_name: "Double MM Merimed",
    icon: dot,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Mar 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "Webliska Technologies",
    icon: dot,
    iconBg: "#383E56",
    date: "Jan 2024 - Mar 2024",
    points: [
      "Developed and maintained server-side logic, APIs, and databases using Node.js to support web applications.",
"Worked closely with frontend developers to integrate user-facing elements with server-side functionality.",
"Optimized database queries and server performance, improving application speed and reliability.",
"Implemented security best practices, including data encryption and authentication protocols, to safeguard user data.",
    ],
  },
 
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Virtual try On",
    description:
      "Developed a 2D virtual try-on application in Python, allowing users to visualize clothing on virtual models.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "mediapipe",
        color: "pink-text-gradient",
      },
    ],
    image: tryon,
    source_code_link: "https://github.com/ShivaniBhard/VirtualTryOn/",
  },
  {
    name: "Resume Optimizer Pro",
    description:
      "Created an ATS score checker tool, to evaluate and enhance resumes for better alignment with job descriptions and improve applicant tracking system compatibility.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gemini",
        color: "green-text-gradient",
      },
      {
        name: "base64",
        color: "pink-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://github.com/ShivaniBhard/ATS",
  },
  {
    name: "Youtube Clone",
    description:
      "Developed a YouTube clone with features such as video uploading, playback, and user authentication, simulating the core functionalities of the popular video-sharing platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: yout,
    source_code_link: "https://github.com/ShivaniBhard/Youtube-clone",
  },
];

export { services, technologies, experiences,  projects };
