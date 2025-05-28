import { FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaBlog, FaEnvelope } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const metaData = {
  baseUrl: "https://nextfolio-template.vercel.app/",
  title: "38Afolio",
  name: "Choi Hyeonjin",
  ogImage: "/opengraph-image.png",
  description:
    "A clean, fast, and lightweight portfolio template built with Next.js, Vercel, and Tailwind CSS for optimal performance.",
};

export const socialLinks = [
  {
    name: 'Twitter',
    url: "https://velog.io/@choihjin/posts",
    icon: FaBlog
  },
  {
    name: 'GitHub',
    url: "https://github.com/choihjin",
    icon: FaGithub
  },
  {
    name: 'Instagram',
    url: "https://www.instagram.com/",
    icon: FaInstagram
  },
  {
    name: 'LinkedIn',
    url: "https://www.linkedin.com/in/%ED%98%81%EC%A7%84-%EC%B5%9C-772649364/",
    icon: FaLinkedin
  },
  {
    name: 'Email',
    url: "mailto:choihjin@handong.ac.kr",
    icon: FaEnvelope
  }
];

export const siteConfig = {
  name: "Portfolio",
  description: "My Portfolio",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Awards & Honor",
      href: "/awards",
    },
    {
      title: "Others",
      href: "/others",
    },
  ],
  links: {
    github: "https://github.com/yourgithub",
    linkedin: "https://linkedin.com/in/yourlinkedin",
  },
}
