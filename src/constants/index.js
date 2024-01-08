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
    mongodb,
    git,
    figma,
    docker,
    ownsport,
    openclassrooms,
    cslb,
    youtube,
    projet2,
    projet3,
    projet5,
    projet6,
    projet7,
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
      icon: mobile,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Content Creator",
      company_name: "YouTube",
      icon: youtube,
      iconBg: "#ffffff",
      date: "Jun 2022 - Dec 2022",
      points: [
        "Create and narrative-driven content that chronicles solo travel experiences, showcasing cultural encounters, and personal reflections.",
        "Edit footage to tell a story, incorporating music, transitions, and visual effects to enhance the overall viewing experience.",
        "Conduct street interviews on thought-provoking or existential questions. Showcase diverse perspectives, cultural insights, and spontaneous interactions.",
        "Collaborate with other content creators to produce high-quality videos. Work with videographers to create compelling content.",
      ],
    },
    {
      title: "Sports Trainer",
      company_name: "Ownsport",
      icon: ownsport,
      iconBg: "#383838",
      date: "Oct 2022 - Feb 2023",
      points: [
        "Develop and implement customized workout plans tailored to the individual needs and fitness goals of clients, ensuring a well-rounded and effective training regimen.",
        "Help clients overcome challenges, stay focused, and maintain commitment to their fitness journey.",
        "Conduct thorough assessments of clients' fitness levels, strengths, and areas for improvement.",
        "Educate clients on the importance of a balanced diet, hydration, and overall wellness to enhance their overall health and fitness outcomes.",
      ],
    },
    {
      title: "Web Developer Degree",
      company_name: "OpenClassrooms",
      icon: openclassrooms,
      iconBg: "#7451EB",
      date: "Jul 2023 - Jan 2024",
      points: [
        "Develop and maintain web applications using languages such as HTML, CSS, JavaScript, and other relevant technologies. Ensure code quality, efficiency, and adherence to best practices.",
        "Identify and resolve technical issues, bugs, and challenges in web development projects. Conduct thorough testing to ensure functionality, compatibility, and security.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Stay updated on the latest web development trends, tools, and technologies.",
      ],
    },
    {
      title: "Basketball Instructor",
      company_name: "CSLB",
      icon: cslb,
      iconBg: "#FFFFFF",
      date: "Sept 2023 - Today",
      points: [
        "Plan and conduct age-appropriate basketball training sessions focusing on fundamental skills such as dribbling, shooting, passing, and defense.",
        "Foster a positive team environment by promoting teamwork, communication, and leadership skills among young athletes.",
        "Develop and implement game strategies, emphasizing tactical understanding and situational awareness.",
        "Instill important life skills such as discipline, sportsmanship, and resilience through basketball coaching.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Booki",
      description:
        "A travel agency home page using HTML and CSS.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: projet2,
      source_code_link: "https://github.com/Lucadol/Projet-2",
    },
    {
      name: "Sophie Bluel - Portfolio",
      description:
        "A dynamic web page with JavaScript for a photographer's portfolio.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: projet3,
      source_code_link: "https://github.com/Lucadol/Projet-3",
    },
    {
      name: "Nina Carducci",
      description:
        "Debug and optimize a photographer's website.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: projet5,
      source_code_link: "https://github.com/Lucadol/Projet-5",
    },
    {
      name: "Kasa",
      description:
        "Real estate rental web application with React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
      ],
      image: projet6,
      source_code_link: "https://github.com/Lucadol/Projet-6",
    },
    {
      name: "Mon Vieux Grimoire",
      description:
        "Develop the back-end of a book rating site.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: projet7,
      source_code_link: "https://github.com/luca-dol/Projet-7-OC",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  