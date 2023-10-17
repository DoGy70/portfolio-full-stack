import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaReact, FaPython, FaCss3Alt } from "react-icons/fa";

export const navButtons = [
  { id: 1, section: "about", url: "#about" },
  { id: 2, section: "skills", url: "#skills" },
  { id: 3, section: "projects", url: "#projects" },
  { id: 4, section: "certificates", url: "#certificates" },
  { id: 5, section: "socials", url: "#links" },
];

export const socialLinks = [
  {
    id: 1,
    name: "facebook",
    url: "https://www.facebook.com/KappaLords/",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    name: "instagram",
    url: "https://www.instagram.com/p._miroslav/",
    icon: <BsInstagram />,
  },
  {
    id: 3,
    name: "linkedin",
    url: "https://www.linkedin.com/in/miroslav-pomanov-222924295/",
    icon: <BsLinkedin />,
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://github.com/DoGy70",
    icon: <BsGithub />,
  },
];

export const skillsRating = [
  {
    id: 1,
    skill: "python",
    icon: <FaPython />,
    rating: 3,
    info: "Python is the first language that I started learning. Learning it has laid my foundations on programming. Basic knowledge.",
  },
  {
    id: 2,
    skill: "react",
    icon: <FaReact />,
    rating: 4.5,
    info: "React is the latest technology that I started learning. It is used in nearly all of my projects.",
  },
  {
    id: 3,
    skill: "html & css",
    icon: <FaCss3Alt />,
    rating: 4.5,
    info: "One can not create a website without knowing the fundamentals of CSS and HTML. I have grasped the fundamentals.",
  },
];

export const aboutMe =
  "Welcome to my website! My name is Miroslav. I am 20 years old, currently living in Sofia, Bulgaria, studying Computer and Software Engineering at Technical University - Sofia, second year. Programming has been my passion ever since I discovered video games and how they are created. My first steps into the vast programming world were accompanied by creating some basic 2D games with Unity. However, I slowly came to the conclusion that web development is much more interesting and important. In my opinion, making a beautiful and user-friendly web application that users will appreciate is a must for every company because it is the first interaction, and based on the site, the user will form their first impression. In addition, it is always exciting at the end when I can take a look the product that I have produced and get feedback from people to whom I show it. On this site, you will see some of the projects I have done during my learning. My main motivation is to start a new job where I can finally earn some real-life experience, learn new skills, and make new acquaintances in the software development industry.";
