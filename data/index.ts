import {
  BiHomeAlt as HomeIcon,
  BiBriefcase as BriefcaseIcon,
  BiChat as ContactIcon,
  BiCodeAlt as SkillsIcon,
  BiGridAlt as ProjectsIcon,
} from "react-icons/bi";

export const navItems = [
  { name: "About", link: "#about", icon: HomeIcon },
  { name: "Projects", link: "#projects", icon: ProjectsIcon },
  { name: "Skills", link: "#skills", icon: SkillsIcon },
  { name: "Experience", link: "#experience", icon: BriefcaseIcon },
  { name: "Contact", link: "#contact", icon: ContactIcon },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritise client interaction and encourage transparency.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm quite flexible with time zone interactions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My main stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech geek with an appetite for creative growth",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a React Native mobile app",
    description: "Behind The Scenes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Would you like to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CarePulse- Healthcare management system",
    description: " is a comprehensive healthcare management system designed to streamline the process of booking medical appointments. The web app allows patients to easily find and schedule appointments with preferred doctors. The system also includes an admin page to manage the schedules, making healthcare more accessible and organized.",
    img: "/projects-img/CarePulse.webp",
    iconLists: ["/next.svg", "/skills-icon/appwrite.svg", "/tail.svg", "/skills-icon/sentry.svg", "/skills-icon/twilio.svg"],
    link: "https://careplus-six.vercel.app",
    code: 'https://github.com/GIT-Gizmo/docthud'
  },
  {
    id: 2,
    title: "AI ChatBot - Generative AI Web App",
    description: "an interactive chatbot with real-time AI communication and UI enhancements.",
    img: "/projects-img/AI-ChatBot.webp",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg", "/skills-icon/bard.svg", "/skills-icon/vite.svg"],
    link: "https://ai-chat-bot-cyan.vercel.app/",
    code: 'https://github.com/167-RIAZ/Ai-chatBot'
  },
  {
    id: 3,
    title: "Apple-visionPRO-website",
    description: "This project aims to create a website for Apple Vision Pro, possibly a fictional product or service related to Apple’s technology. The website may showcase features, benefits, and other information related to this product/service.",
    img: "/projects-img/VissionPro.webp",
    iconLists: ["/next.svg", "/tail.svg", "/skills-icon/mongo.svg"],
    link: "https://apple-vision-pro-project.vercel.app/",
    code: 'https://github.com/167-RIAZ/Apple-visionPro-project'
  },
  {
    id: 4,
    title: "Magma-3D - Real estate Services Company",
    description: "An interactive 3D animated website using HTML, CSS, and JavaScript. It focuses on structuring content, styling animations, employing the Canvas API for dynamic graphics, and implementing scrolling effects while ensuring responsiveness.",
    img: "/projects-img/Magma3D.webp",
    iconLists: ["/next.svg", "/tail.svg", "/skills-icon/express.svg", "/skills-icon/node.svg", "/fm.svg"],
    link: "https://Magma-3-d.vercel.app/",
    code: 'https://github.com/167-RIAZ/Magma-3D-',
  },
  {
    id: 5,
    title: "Portfolio",
    description: " a modern portfolio project created with Next.js, showcasing a unique combination of technologies including Three.js, Framer Motion, and Tailwind CSS, designed to enhance user engagement and experience. It emphasizes various innovative features like interactive 3D elements, dynamic testimonials, and a responsive layout that adapt seamlessly across devices.",
    img: "/projects-img/Portfolio.webp",
    iconLists: ["/next.svg", "/tail.svg", "/fm.svg", "/ts.svg", "/npm.svg", "/shadcn.svg"],
    link: "https://anime-crypt.vercel.app",
    code: 'https://github.com/GIT-Gizmo/anime-crypt'
  },
  {
    id: 6,
    title: "Movie Review Website",
    description: "The Movie Review Webpage is a dynamic and user-friendly platform that allows users to quickly access essential information about their favorite movies. Built using HTML, CSS, JavaScript, and API fetching, this web application enables users to search for a movie by its name and receive comprehensive details.",
    img: "/projects-img/movie.webp",
    iconLists: ["/skills-icon/js.svg"],
    link: "movie-review-web-page.vercel.app",
    code: 'https://github.com/167-RIAZ/Movie-Review-WebPage'
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure to work with Syed as he led our website revamp with exceptional skill. His high-quality work, ability to solve complex issues, and collaborative spirit were instrumental to the project's success. A talented developer and team player, David creates a positive work environment. I highly recommend him and would gladly work with him again.",
    name: "Timileyin Ogunleye",
    title: "CEO of Adroit Handyman Services",
    profileImg: "/timi.webp",
  },
  {
    quote:
      "Syed Md Riaz is an outstanding developer who consistently goes above and beyond to achieve excellent results. He is not only a talented professional who loves to learn new things, he is also someone who knows a little about a lot of things and is ready to share.",
    name: "Omotoyinbo Oluwadunsin",
    title: "UI/UX Developer",
    profileImg: "/dunsin.webp",
  },
  {
    quote:
      "Syed Md Riaz is an exceptional React front-end developer with impressive skills in HTML, CSS, and JavaScript. He creates visually appealing, user-friendly interfaces and stays current with industry trends. His attention to detail, dedication, and problem-solving abilities make him an invaluable asset to any development team.",
    name: "Mr. Oluwaseun Matthew",
    title: "Business Automation Expert",
    profileImg: "/mr-seun.webp",
  },
];

export const skills = [
  {
    id: 1,
    name: "JavaScript",
    img: "/skills-icon/js.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    img: "/ts.svg",
  },
  {
    id: 3,
    name: "Python",
    img: "/skills-icon/python.svg",
  },
  {
    id: 4,
    name: "PHP",
    img: "/skills-icon/php.svg",
  },
  {
    id: 5,
    name: "Node.js",
    img: "/skills-icon/node.svg",
  },
  {
    id: 6,
    name: "ReactJS",
    img: "/re.svg",
  },
  {
    id: 7,
    name: "NextJS",
    img: "/next.svg",
  },
  {
    id: 8,
    name: "ExpressJS",
    img: "/skills-icon/express.svg",
  },
  {
    id: 9,
    name: "MongoDB",
    img: "/skills-icon/mongo.svg",
  },
  {
    id: 10,
    name: "React Native",
    img: "/re.svg",
  },
  {
    id: 11,
    name: "Tailwind",
    img: "/tail.svg",
  },
  {
    id: 12,
    name: "ThreeJS",
    img: "/three.svg",
  },
  {
    id: 13,
    name: "Framer Motion",
    img: "/fm.svg",
  },
  {
    id: 14,
    name: "Google Cloud",
    img: "/skills-icon/gcp.svg",
  },
  {
    id: 15,
    name: "Firebase",
    img: "/skills-icon/firebase.svg",
  },
  {
    id: 16,
    name: "Docker",
    img: "/dock.svg",
  },
  {
    id: 17,
    name: "ShadCn UI",
    img: "/skills-icon/shadcn.svg",
  },
  {
    id: 18,
    name: "Github",
    img: "/skills-icon/github.svg",
  },
  {
    id: 19,
    name: "Postman",
    img: "/skills-icon/postman.svg",
  },
  {
    id: 20,
    name: "Vite",
    img: "/skills-icon/vite.svg",
  },
  {
    id: 21,
    name: "Appwrite",
    img: "/app.svg",
  },
  {
    id: 22,
    name: "Google Analytics",
    img: "/skills-icon/analytics.svg",
  },
  {
    id: 23,
    name: "Vercel",
    img: "/skills-icon/vercel.svg",
  },
  {
    id: 24,
    name: "Figma",
    img: "/skills-icon/figma.svg",
  },
  {
    id: 25,
    name: "Payload CMS",
    img: "/skills-icon/payload.svg",
  },
  {
    id: 26,
    name: "Npm",
    img: "/skills-icon/npm.svg",
  },
  {
    id: 27,
    name: "Jest",
    img: "/skills-icon/jest.svg",
  },
  {
    id: 28,
    name: "Hostinger",
    img: "/host.svg",
  },
  {
    id: 29,
    name: "SCSS",
    img: "/skills-icon/scss.svg",
  },
  {
    id: 30,
    name: "Material UI",
    img: "/skills-icon/material.svg",
  },
  {
    id: 31,
    name: "Git",
    img: "/skills-icon/git.svg",
  },
  {
    id: 32,
    name: "Sentry",
    img: "/skills-icon/sentry.svg",
  },
  {
    id: 33,
    name: "Twilio",
    img: "/skills-icon/twilio.svg",
  },
]

export const workExperience = [
  {
    id: 1,
    title: "Summer Intern - Alloy Steels Plant",
    description: "Designed and implemented advanced network systems, enhancing communication infrastructure and documenting network performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern - Tech Solutions",
    description: "Contributed to developing and deploying full-stack applications, including integrating APIs and optimizing performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer - Creative Web Designs",
    description: "Built responsive and user-friendly web interfaces, translating designs from Figma to functional React components.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Academic Project - Heritage Institute of Technology",
    description: "Optimized a circular antenna array using the Particle Swarm Optimization (PSO) algorithm as part of a key academic project. Demonstrated problem-solving skills and applied advanced algorithms to improve antenna performance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  
];

export const approach = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Planning & Strategy",
    description: "We'll work together to define your website's goals, target audience, and important functionalities. We'll talk about site structure, navigation, and content requirements.",
    containerClassName: "bg-emerald-900",
    animationSpeed: 5.1
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Development & Progress Update",
    description: "Once we've decided on a strategy, I start coding while listening to my lo-fi playlist. I keep you updated at all stages, from basic ideas to polished code.",
    color: [
      [236, 72, 153],
      [232, 121, 249],
    ],
    containerClassName: "bg-pink-900",
    animationSpeed: 3
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Development & Launch",
    description: "Here's where the magic happens! Based on the accepted design, I'll translate everything into functional code and create your website from the bottom up.",
    color: [[125, 211, 252]],
    containerClassName: "bg-sky-600",
    animationSpeed: 3
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: "github",
    link: "https://github.com/167-RIAZ"
  },
  {
    id: 3,
    img: "/link.svg",
    name: "linkedin",
    link: "https://www.linkedin.com/in/syed-md-riaz-57b07a248"
  },
];