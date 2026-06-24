// Image imports
import ciscoImg from '../assets/cisco.png'
import dabreederImg from '../assets/dabreeder.png'
import facerecogImg from '../assets/facerecog.png'
import godotImg from '../assets/godot.png'
import portfolioImg from '../assets/portfolio.png'
import purrcafeImg from '../assets/purrcafe.png'
import studentportalImg from '../assets/studentportal.jpg'
import taragImg from '../assets/tarag.png'
import wordpressImg from '../assets/wordpress.png'
import blender3dImg from '../assets/blender3d.png'

export const profile = {
  name: "Roxanne Roxas",
  nickname: "Roxy",
  title: "ViewQwest · BSIT Magna Cum Laude, Class of 2026",
  tagline: "Junior Software Engineer | Web Developer",
  bio: "I am Roxanne Roxas, a BSIT Magna Cum Laude graduate from La Consolacion University Philippines, currently working as a Junior Software Engineer at ViewQwest. I am passionate about technology and web development, and my journey in IT has taught me to create meaningful projects, learn continuously, and adapt to new technologies.\n\nI enjoy building projects that help others and showcase my skills. My goal is to become a professional developer who can create real solutions that make a difference.",
  shortBio: "BSIT Magna Cum Laude graduate who enjoys turning complex problems into clean, functional web experiences.",
  email: "roxanneroxas23@gmail.com",
  businessEmail: "roxanne.croxas@viewqwest.com",
  phone: "+63 960 390 4241",
  address: "Bulacan, City of Malolos, Philippines",
  linkedin: "https://www.linkedin.com/in/roxanneroxas23/",
  linkedinLabel: "linkedin.com/in/roxanneroxas23",
  github: "https://github.com/roxanneroxas",
  githubLabel: "github.com/roxanneroxas",
  resume: "/assets/Resume.pdf",
}

export const experience = [
  {
    id: 1,
    company: "ViewQwest Philippines, Inc.",
    role: "Junior Software Engineer",
    period: "2026 – Present",
    type: "Full-time",
    icon: "💼",
  },
]

export const education = [
  { id: 1, level: "Elementary", school: "Isidore de Seville Integrated School", period: "S.Y. 2012 – 2016", honor: "With Honors (Grade 3–6)", icon: "school" },
  { id: 2, level: "Junior High School", school: "Stella Maris Academy of Malolos", period: "S.Y. 2016 – 2020", honor: "With Honors (Grade 7–10)", icon: "bookopen" },
  { id: 3, level: "Senior High School", school: "Bulacan Ecumenical School", period: "S.Y. 2020 – 2022", honor: "With Honors (Grade 11–12)", icon: "graduationcap" },
  { id: 4, level: "La Consolacion University Philippines", school: "Bachelor of Science in Information Technology", period: "Graduated June 11, 2026", honor: "Magna Cum Laude | Dean's Lister – 1st, 2nd, 3rd & 4th Year", icon: "landmark" },
]

export const achievements = [
  "Job Placement Award and Service Award",
  "Academic Excellence Awardee",
  "Microsoft Excel 2019 Associate Certification - May 2023",
  "Cisco Introduction to Cybersecurity, Cisco Networking Academy – December 2025",
]

export const skills = {
  "Languages & Frameworks": ["React", "JSX", "JavaScript", "Vue.js", "Laravel", "Tailwind CSS", "HTML", "CSS"],
  "Tools & Platforms": ["GitHub", "Postman", "Laravel Reverb", "Zuora", "Git", "VS Code", "Node.js", "HeidiSQL"],
  "Concepts": ["API Integration", "WebSockets", "Component Architecture", "Responsive Design", "Full-Stack Development"],
  "Database": ["MySQL", "Database Design"],
  "Networking & Security": ["Cisco Packet Tracer", "Routing", "VLANs", "VPN"],
  "Game Development": ["Godot Engine"],
  "Other": ["Python", "Java", "PHP", "OpenCV", "Kotlin", "Blender 3D"],
  "Soft Skills": ["Problem Solving", "Critical Thinking", "Team Collaboration", "Communication", "Adaptability", "Time Management"],
}

export const projects = [
  {
    id: 1,
    title: "Portfolio Website Development",
    tech: ["React.js", "Vite"],
    category: "Web Development",
    image: portfolioImg,
    description: "A personal portfolio website built with React and Vite showcasing projects, skills, and contact information.",
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "WordPress TechCare Assistance Website",
    tech: ["WordPress"],
    category: "Web Development",
    image: wordpressImg,
    description: "TechCareAssistance – a WordPress site enhancing tech support for LCUP.",
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Face Recognition System",
    tech: ["Python", "PyCharm", "OpenCV"],
    category: "Python Tools",
    image: facerecogImg,
    description: "A face recognition system built with Python and OpenCV for real-time facial detection and identification.",
    github: "",
    demo: "",
  },
  {
    id: 4,
    title: "2D Game Development Project",
    tech: ["Godot Engine"],
    category: "Game Development",
    image: godotImg,
    description: "A 2D game developed using the Godot Engine featuring custom sprites, levels, and game mechanics.",
    github: "",
    demo: "",
  },
  {
    id: 5,
    title: "Purr Café POS System",
    tech: ["Java", "NetBeans"],
    category: "Desktop App",
    image: purrcafeImg,
    description: "A point-of-sale system for Purr Café built with Java and NetBeans for managing orders and inventory.",
    github: "",
    demo: "",
  },
  {
    id: 6,
    title: "Packet Tracer Networking Labs",
    tech: ["Cisco"],
    category: "Networking",
    image: ciscoImg,
    description: "Networking lab simulations using Cisco Packet Tracer covering routing, VLANs, and network configuration.",
    github: "",
    demo: "",
  },
  {
    id: 7,
    title: "DaBreeder",
    tech: ["Web App"],
    category: "Web Development",
    image: dabreederImg,
    description: "DaBreeder – a web application for pet breeding management with parent matching and health record verification.",
    github: "",
    demo: "",
  },
  {
    id: 8,
    title: "Student Profile System",
    tech: ["PHP", "MySQL"],
    category: "Web Development",
    image: studentportalImg,
    description: "A student profile and management system built with PHP and MySQL.",
    github: "",
    demo: "",
  },
  {
    id: 9,
    title: "Android Studio App",
    tech: ["Kotlin", "XML", "Java"],
    category: "Mobile",
    image: taragImg,
    description: "A mobile application developed using Android Studio with Kotlin and Java.",
    github: "",
    demo: "",
  },
  {
    id: 10,
    title: "Blender 3D Project",
    tech: ["Blender 3D", "Animation", "Image Texturing"],
    category: "3D / Design",
    image: blender3dImg,
    description: "3D modeling and animation project created in Blender with image texturing and scene composition.",
    github: "",
    demo: "",
  },
]