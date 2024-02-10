import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    jQuery,
    html,
    css,
    reactjs,
    redux,
    bootstrap,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    calc,
    proforma,
    ethDapp,
    tripguide,
    threejs,
    linux,
    cpp,
    express,
    ejs,
    solidity,
    ethersJs,
    ethereum,
    hardhat,
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
        title: "Blockchain Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Problem Solver",
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
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
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
        name: "cpp",
        icon: cpp,
    },
    {
        name: "linux",
        icon: linux,
    },
    {
        name: "solidity",
        icon: solidity
    },
    {
        name: "ethersJs",
        icon: ethersJs
    },
    {
        name: "hardhat",
        icon: hardhat
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
        name: "BHMS Proforma",
        description:
        "Medical professionals and aspiring students at Homoeopathy Medical College have traditionally relied on paper-based casetaking. So Digitizing Case Taking and Patient Management among Homeopathy Medical students and doctors.",
        tags: [
        {
            name: "html",
            color: "blue-text-gradient",
        },
        {
            name: "css",
            color: "green-text-gradient",
        },
        {
            name: "javascript",
            color: "pink-text-gradient",
        },
        {
            name: "ejs",
            color: "orange-text-gradient",
        },
        {
            name: "expressJs",
            color: "text-lime-600",
        },
        {
            name: "mongoDB",
            color: "text-yellow-600",
        },
        ],
        image: proforma,
        live_website_link: "https://bhmsproforma.onrender.com/",
        source_code_link: "https://github.com/bosirullah/Bhms_proforma",
    },
    {
        name: "Calculator",
        description:
        "At a glance, it may resemble a standard calculator app, yet it boasts an extra layer of versatility. Uniquely, this app offers users the ability to switch between diverse themes and seamlessly toggle between three distinct operational modes.",
        tags: [
        {
            name: "html",
            color: "blue-text-gradient",
        },
        {
            name: "css",
            color: "green-text-gradient",
        },
        {
            name: "javascript",
            color: "pink-text-gradient",
        },
        ],
        image: calc,
        live_website_link: "https://bosirullah.github.io/calculator-app/",
        source_code_link: "https://github.com/bosirullah/calculator-app",
    },
    {
        name: "payEth Dapp",
        description:
        "Here any user can pay ether as a thanks to the website developer using his/her meta mask account. His name will be visible on a table which was made using React’s Material UI.",
        tags: [
        {
            name: "ReactJs",
            color: "blue-text-gradient",
        },
        {
            name: "MUI",
            color: "text-yellow-600",
        },
        {
            name: "solidity",
            color: "green-text-gradient",
        },
        {
            name: "Hardhat",
            color: "pink-text-gradient",
        },
        {
            name: "ethersJs",
            color: "text-lime-600",
        },
        ],
        image: ethDapp,
        live_website_link: "https://ethdapp.netlify.app/",
        source_code_link: "https://github.com/bosirullah/buyEthDapp",
    },
    {
        name: "Calculator",
        description:
        "At a glance, it may resemble a standard calculator app, yet it boasts an extra layer of versatility. Uniquely, this app offers users the ability to switch between diverse themes and seamlessly toggle between three distinct operational modes.",
        tags: [
        {
            name: "html",
            color: "blue-text-gradient",
        },
        {
            name: "css",
            color: "green-text-gradient",
        },
        {
            name: "javascript",
            color: "pink-text-gradient",
        },
        ],
        image: calc,
        live_website_link: "https://bosirullah.github.io/calculator-app/",
        source_code_link: "https://github.com/bosirullah/calculator-app",
    }
];

export { services, technologies, experiences, testimonials, projects };
