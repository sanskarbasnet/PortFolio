import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanskar Basnet",
  initials: "SB",
  url: "https://sanskarbasnet.me",
  location: "Dundee, United Kingdom",
  locationLink: "https://www.google.co.uk/maps/place/Dundee",
  description:
    "I'm a third-year Computing Science student at the University of Dundee, passionate about building innovative software solutions with skills in Java, ReactJS, and algorithm design.",
  summary:
    "I am a motivated third-year Computing Science student with a passion for building impactful software solutions. With expertise in Java, ReactJS, and algorithm design, I have developed both personal projects like a LinkedIn clone and a Pathfinding Algorithm Visualizer. I am committed to continuous learning and thrive in collaborative environments, always striving to create user-friendly, efficient applications. Currently seeking opportunities to contribute to a dynamic software engineering team.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "JavaScript",
    "Java",
    "Node.js",
    "Python",
    "C",
    "C++",
    "HTML",
    "CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sanskarbasnetitahari@gmail.com",
    tel: "+447909343990",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sanskarbasnet",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/sanskar-basnet-53a16a22a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sanskarbasnetitahari@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "University of Dundee",
      href: "https://www.dundee.ac.uk/",
      degree: "Bsc. (Hons) computing science",
      logoUrl: "/dundee.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "LinkedIn Clone",
      href: "https://linkedin-clone-11e16.web.app/",
      dates: "Jun 2023 - Jul 2023",
      active: true,
      description:
        "I developed a LinkedIn Clone that allows users to create accounts, post updates, and interact with other posts through likes and comments. Built using ReactJS, Redux, and Firebase, this platform focuses on providing a dynamic and engaging user experience. It showcases my skills in front-end development, real-time data handling, and building responsive, interactive applications.",
      technologies: [
        "ReactJS",
        "JavaScript",
        "Redux",
        "Firebase",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://linkedin-clone-11e16.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sanskarbasnet/linkedin-clone-reactJS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/linkedinclone.png",
      video:
        "",
    },
    {
      title: "Pathfinding Algorithm Visualizer",
      href: "https://github.com/sanskarbasnet/pathfinding-visualizer-java",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "I created a Pathfinding Algorithm Visualizer in Java that allows users to interactively explore algorithms like Dijkstra’s and A* in real-time. The application features a user-friendly interface built with Java Swing, enabling users to visualize the step-by-step process of these algorithms as they find the shortest path in a grid. This project demonstrates my ability to combine algorithm design with intuitive UI development to create an engaging educational tool.",
      technologies: [
        "Java",
        "Java Swing",
        "Algorithms",
        "OOP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanskarbasnet/pathfinding-visualizer-java",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pathfindingvis.png",
      video: "",
    },
    {
      title: "Operation Schedular",
      href: "https://github.com/nataliiaash/Operation-Scheduler.git",
      dates: "May 2023 - Jun 2023",
      active: true,
      description:
        "I created an Operation Scheduler in Java as part of a group project to optimize task management and resource allocation for medical professionals. The application features an intuitive user interface, designed to help users efficiently schedule and prioritize operations, improving time management and resource utilization. My contributions included integrating core functionalities, designing the UI, managing version control with Git, and facilitating team collaboration. This project showcases my ability to work in a team, solve real-world problems, and deliver a solution that improves operational efficiency by 20%.",
      technologies: [
        "Java",
        "JavaFX",
        "Git",
        "CSS",
        "GUI design",
        "OOP",
        "Data Structures",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nataliiaash/Operation-Scheduler.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/opschedular.png",
      video: "",
    },
    {
      title: "Battleship Game",
      href: "https://github.com/sanskarbasnet/BattleShip-Game.git",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "I developed a Battleship Game in JavaFX, featuring both single-player and multiplayer modes. The game includes engaging animations, a user-friendly interface, and intuitive gameplay mechanics. I applied object-oriented principles to structure the game logic and ensured smooth functionality through careful UI design. Balancing this project with academic commitments, I focused on rigorous testing and refinement to deliver a seamless user experience. This project highlights my skills in game development, UI design, and Java programming.",
      technologies: [
        "Java",
        "JavaFX",
        "OOP",
        "GUI design"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanskarbasnet/BattleShip-Game.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bship.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Quackathon",
      dates: "March 9th - 10th, 2023",
      location: "Dundee, United Kingdom",
      description:
        "In Quackathon 2022, my team developed a gamified personal finance app that helps users budget effectively while rewarding financial achievements. I contributed by designing the reward system and managing version control, ensuring smooth collaboration.",
      image:
        "/ducs.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
