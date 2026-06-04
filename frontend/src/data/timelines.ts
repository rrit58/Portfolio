import { LuBriefcase } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
// import { LuAward } from "react-icons/lu";

type Item = {
    icon: typeof LuBriefcase;
    type: "Work" | "Education" | "Certification";
    title: string;
    org: string;
    year: string;
    description: string;
    tags?: string[];
};

const timelines: Item[] = [
    {
        icon: LuBriefcase,
        type: "Work",
        title: "Smart India Hackathon Winner",
        org: "Ministry of Education",
        year: "2025",
        description: "Built DBT Setu, an impactful platform for the Ministry of Social Justice & Empowerment. It educates citizens on Aadhaar-seeded bank accounts to streamline Direct Benefit Transfers.",
        tags: ["React", "Express", "MongoDB"],
    },
    {
        icon: LuGraduationCap,
        type: "Education",
        title: "Bachelor of Technology, Information Technology",
        org: "Guru Ghasidas Vishwavidyalaya",
        year: "2024 — 2028",
        description: "Pursuing a degree focused on software engineering, data structures, databases, and AI fundamentals.",
    },
];

export default timelines;


// {
    //     icon: LuBriefcase,
    //     type: "Work",
    //     title: "Freelance Full Stack Developer",
    //     org: "Self-employed",
    //     year: "2024 — Present",
    //     description: "Designing and shipping responsive web apps for clients from landing pages to full SaaS dashboards with auth, payments, and APIs.",
    //     tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    // },
    // {
    //     icon: LuAward,
    //     type: "Certification",
    //     title: "JavaScript & React Specialization",
    //     org: "Coursera",
    //     year: "2024",
     
    //     description: "Deep dive into modern JavaScript, hooks, state management, and component architecture.",
    //     tags: ["JavaScript", "React"],
    // },
    // {
    //     icon: LuAward,
    //     type: "Certification",
    //     title: "Full Stack Web Development",
    //     org: "Online Bootcamp",
    //     year: "2024",

    //     description: "Comprehensive program covering MERN stack, REST APIs, authentication, and deployment workflows.",
    //     tags: ["MERN", "REST", "Auth"],
    // },