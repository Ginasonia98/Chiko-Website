// import hero slider images
import HeroSlideImage1 from "./assets/img/dogs/dog-slide-1.png";
import HeroSlideImage2 from "./assets/img/dogs/dog-slide-2.png";
import HeroSlideImage3 from "./assets/img/dogs/dog-slide-3.png";
// import dog category images
// import social icons
import { AiFillLinkedin , AiFillInstagram, AiFillGithub } from "react-icons/ai";

export const navigation = [
  {
    name: "home",
    href: "#",
  },
  {
    name: "about us",
    href: "#",
  },
  {
    name: "contact",
    href: "#",
  },
  {
    name: "make an appointment",
    href: "#",
  },
];

export const heroSlider = [
  {
    id: 1,
    image: <HeroSlideImage1 />,
    subtitle:
      "With its intelligent eyes and beautiful fur, this is Chiko the handsome and smart Border Collie.",
  },
  {
    id: 2,
    image: <HeroSlideImage2 />,
    subtitle:
      "Chiko always manages to complete commands with remarkable speed and accuracy. Chiko loves to cuddle and play with his owners, and he is always eager to learn new tricks and skills. Chiko's beautiful coat requires regular grooming to keep it in top condition.",
  },
  {
    id: 3,
    image: <HeroSlideImage3 />,
    subtitle:
      "Not only smart, Chiko is also very friendly and always eager to make friends with anyone. He makes many new friends in the park every time he's taken for a walk.",
  },
];


export const social = [
  {
    icon: <AiFillLinkedin  />,
    href: "https://www.linkedin.com/in/ginatobing/",
  },
  {
    icon: <AiFillInstagram />,
    href: "https://instagram.com/chikocollie?igshid=YmMyMTA2M2Y=",
  },
  {
    icon: <AiFillGithub />,
    href: "https://github.com/Ginasonia98?tab=repositories",
  },
];
