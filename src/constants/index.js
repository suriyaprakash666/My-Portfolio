import {
  mobile,
  web3,
  web,
  reactt,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  ytbg,
  pointbreak,
  expenseapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "MERN Stack",
    icon: reactt,
  },
  {
    title: "Web 3.0",
    icon: web3,
  },
  {
    title: "Mobile Application",
    icon: mobile,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "YouTube Clone",
    description:
      "This application provides a user-friendly interface for searching and playing videos, with a custom player and improved user experience. It replicates many of the core features of the original YouTube platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ytbg,
    source_code_link: "https://github.com/suriyaprakash666/YouTube_Clone",
  },
  {
    name: "Point Break",
    description:
      "The adventurous tour booking application provides a user-friendly platform with comprehensive tour information, traveler details, and maps for users to easily search and book exciting tours.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "pug",
        color: "pink-text-gradient",
      },
    ],
    image: pointbreak,
    source_code_link: "https://github.com/suriyaprakash666/PointBreak",
  },
  {
    name: "Expense App",
    description:
      "Developed a web-based expense-tracking app using React. Allows users to easily track, manage and categorize daily expenses, and generate reports. Aims to improve financial planning for users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chart",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expenseapp,
    source_code_link: "https://github.com/suriyaprakash666/ExpenseTrackingApp",
  },
];

export { services, technologies, projects };
