import Portfolio from "../assets/Dn.png";
import DiceTo100 from "../assets/projects/DiceTo100.png";
import GuessMyNumber from "../assets/projects/GuessMyNumber.png";
import MembershipDashboard from "../assets/projects/MembershipDashboard.png";
import GPLogo from "../assets/projects/GPLogo.png";
import headstarter from "../assets/projects/headstarter.png";

export const HERO_CONTENT =
  "I am a dedicated full stack developer from Atlanta, Georgia, with a talent for creating robust and scalable web applications. My goal is to continually develop my skills and knowledge to become a better developer and engineer.";

export const ABOUT_TEXT = `I am actively seeking hands-on experience through internships, startup collaborations, and challenging projects. For me, software engineering is about crafting innovative solutions and addressing real-world problems. As a self-taught developer, I have expanded my technical skills by exploring new technologies and undertaking personal projects. I can work in dynamic environments where creativity and technology intersect and am eager to connect with others to create exceptional solutions. If you are wanting to collab or be in contact, please reach out to me.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Software Developer Engineer Intern",
    company: "Gov't Portal",
    description: `Developed new softwares and POS systems for multiple companies which increased the companies revenue by 25%. Delivered a comprehensive Park & Recs management system by collaborating with a team of 4 developers, resulting in a 40% increase in operational efficiency for municipal management.`,
    technologies: ["php", "tailwindcss", "phpMyAdmin", "mySQL", "Git"],
    image: GPLogo,
  },
  {
    year: "July 2024 - Present",
    role: "Software Engineer Fellowship",
    company: "HeadStart.ai",
    description: `HeadStart.ai is an AI-driven recruitment platform that enhances the hiring process by matching job seekers with employers more effectively through data-driven insights, reducing biases and improving efficiency. It focuses on diversity and inclusion, anonymizing candidate data to prioritize skills and qualifications.`,
    technologies: ["JS", "HTML", "CSS", "Python", "React", "Git"],
    image: headstarter,
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "React"],
  },
  {
    title: "Management Dashboard Software",
    image: MembershipDashboard,
    description:
      "Developed a web-based Membership Management Software using PHP and MySQL with a team of 4 developers, designed to automate registration, renewal, and verification processes. Implemented secure user authentication and QR code generation using TailwindCSS and Endroid QRCode library, enhancing user experience and data protection.",
    technologies: ["php", "TailwindCSS", "mySQL", "phpMyAdmin"],
  },
  {
    title: "Dice to 100",
    image: DiceTo100,
    description:
      "Dice to 100 is a simple and fun dice game for two players. The objective of the game is to be the first player to reach or exceed 100 points.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Guess My Number",
    image: GuessMyNumber,
    description: `"Guess My Number!" is a simple number guessing game. The game generates a random secret number between 1 and 20, and the player has to guess the number.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  phoneNo: "(404) 729-9501",
  email: "dannynguyen032@gmail.com",
};
