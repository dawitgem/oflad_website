import img1 from "../public/assets/img44.jpg"
import img2 from "../public/assets/img18.jpg";
import img3 from "../public/assets/img45.jpeg";
import img4 from "../public/assets/img45.jpeg";
import img5 from "../public/assets/img47.jpg";
import img6 from "../public/assets/img46.jpg";
import logo1 from "../public/assets/logo-123 (1).jpg"
import logo2 from "../public/assets/logo-345.jpg"
import logo3 from "../public/assets/logo-6734.jpg"
import logo4 from "../public/assets/logo-8643.png"
import logo5 from "../public/assets/logo3333.jpg"
import logo6 from "../public/assets/new-Logo-7.png"
import logo7 from "../public/assets/logo-1211.jpg"

import libImg from "../public/assets/img21.png"
import exbImg from "../public/assets/img10.jpeg"
import festImg from "../public/assets/img22.jpg"
import studImg from "../public/assets/img23.jpg"
import dontImg from "../public/assets/img24.jpg"
export const getInvolvedConsts = [
    {

        item: 0,
        cardImg: img1,
        img: img2,
        title: "Donate Material",
        titleDescription: "Support learning and growth by donating books, school supplies, or other educational materials. Your contributions can change lives!",
        detailDescription: {
            intro: "Do you have books, school supplies, or educational materials to share? Join us in making a lasting impact by donating resources that foster learning and empower communities. Your contributions will support children, youth, and adults in creating brighter futures through education.",
            subtitles: [
                {
                    subtitle: "What You Can Donate",
                    content: [
                        "Gently used or new books (fiction, non-fiction, textbooks, children’s books).",
                        "School supplies (notebooks, pens, pencils, erasers, rulers, backpacks).",
                        "Educational tools (science kits, art supplies, globes, calculators).",
                        "Digital resources (laptops, tablets, e-readers, educational software)."
                    ]
                },
                {
                    subtitle: "Criteria for Donations",
                    content: [
                        "Materials should be in good condition and free from damage.",
                        "Books must be age-appropriate, inclusive, and free from discriminatory content.",
                        "Digital devices should be functional and include chargers if required.",
                        "Supplies must be clean, safe, and suitable for educational use."
                    ]
                },
                {
                    subtitle: "Past Events",
                    content: [
                        "Community Book Drive (2023): Collected over 5,000 books to establish two community libraries in Addis Ababa, benefitting more than 1,200 children and youth.",
                        "Back-to-School Campaign (2022): Distributed school supplies to 800 children from underserved communities, ensuring they had the tools to succeed.",
                        "Digital Literacy Boost (2021): Received donations of laptops and tablets, equipping 50 youth with skills to thrive in the modern digital economy."
                    ]
                },
                {
                    subtitle: "How to Donate",
                    content: [
                        "Drop off your materials at our designated donation centers.",
                        "Schedule a pickup by contacting us directly.",
                        "Mail your contributions to our main office."
                    ]
                }
            ],
            form: false,
            donateButton: false

        }
    },
    {
        item: 1,
        cardImg: img3,
        img: img4,
        title: "Support Us Financially",
        titleDescription: "Empower communities by supporting our programs with a financial contribution. Every donation makes a difference!",
        detailDescription: {
            intro: "Your financial support helps us deliver impactful programs and services, from building libraries to running community workshops. Together, we can create opportunities and inspire change.",
            subtitles: [
                {
                    subtitle: "Why Donate ?",
                    content: [
                        "Fund the establishment of libraries and community hubs.",
                        "Support skill development and education programs.",
                        "Provide essential resources for underserved communities.",
                        "Ensure sustainability of our community-focused initiatives."
                    ]
                },
                {
                    subtitle: "How to Donate",
                    content: [
                        "Online via our secure donation portal.",
                        "Direct bank transfer to our organization’s account.",
                        "In-person donations at our main office."
                    ]
                },
                {
                    subtitle: "Impact of Your Contribution",
                    content: [
                        "Helped over 1,000 students access educational resources in 2023.",
                        "Funded life skill training for 500 youth in rural areas.",
                        "Provided critical support for women empowerment workshops."
                    ]
                }
            ],
            form: false,
            donateButton: true
        }
    },
    {
        item: 2,
        cardImg: img5,
        img: img6,
        title: "Volunteer",
        titleDescription: "Share your time and skills to make a lasting impact in your community. Join us as a volunteer today!",
        detailDescription: {
            intro: "Volunteers are the backbone of our initiatives. By dedicating your time and expertise, you help us bring life-changing programs to those who need them most.",
            subtitles: [
                {
                    subtitle: "Volunteer Opportunities",
                    content: [
                        "Organize and facilitate reading sessions for children and youth.",
                        "Assist in skill development and entrepreneurship training.",
                        "Provide digital literacy training to community members.",
                        "Support our campaigns and fundraising events."
                    ]
                },
                {
                    subtitle: "Why Volunteer?",
                    content: [
                        "Make a direct impact in your local community.",
                        "Gain valuable experience and develop new skills.",
                        "Be part of a supportive and passionate team.",
                        "Help empower individuals to achieve their full potential."
                    ]
                },
                {
                    subtitle: "How to Get Involved",
                    content: [
                        "Fill out our volunteer application form below.",
                        "Attend our volunteer orientation sessions.",
                        "Choose a program or area that aligns with your skills and interests."
                    ]
                }
            ],
            form: true,
            donateButton: false
        }
    },

];

export const partnersLogo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]

export const projects = [
    {
        id: 1,
        title: "Community Library and Information Center (CLiC)",
        image: libImg, // Replace with the actual image URL
        shortDescription:
            "OfLaD successfully reopened the Community Library and Information Center (CLiC) in Lideta Subcity after it had been closed for over two years. This revitalized space now attracts an average of 30 visitors daily, providing access to a wide variety of books, digital resources, and community-led programs that encourage reading, learning, and social connection.",
        longDescription:
            "OfLaD is currently managing a Community Library and Information Center (CLiC) in Addis Ababa, Lideta Subcity Woreda 4 Youth Center. The library had been closed for 2 years, and since reopening, it has attracted an average of 30 users per day. It serves as a safe and accessible space for reading and community engagement.",
    },
    {
        id: 2,
        title: "Book Reading Exhibitions",
        image: exbImg, // Replace with actual image URL
        shortDescription:
            "Through interactive and engaging book reading exhibitions, OfLaD fosters a love for reading among children and youth. These events feature storytelling, workshops, and book donation drives, making books more accessible and literacy more appealing to the community. Click the arrow to discover how OfLaD’s exhibitions are inspiring lifelong learning!",
        longDescription:
            "OfLaD has organized multiple book reading exhibitions to inspire a love for books and promote literacy among children and youth. These exhibitions include interactive sessions, storytelling, and book donations.",
    },
    {
        id: 3,
        title: "Reading Festivals",
        image: festImg, // Replace with actual image URL
        shortDescription:
            "OfLaD’s reading festivals are vibrant, community-centered events that celebrate the joy of reading. By bringing together students, parents, and educators, these festivals aim to foster consistent reading habits and spark curiosity.",
        longDescription:
            "Reading campaigns have been a core initiative of OfLaD. These campaigns encourage children, parents, and communities to develop consistent reading habits and understand the importance of lifelong learning.",
    },
    {
        id: 4,
        title: "Volunteer-Led Summer Classes &  Skill Training",
        image: studImg, // Replace with actual image URL
        shortDescription:
            "During the summer, OfLaD organizes volunteer-led classes to help students prepare for the upcoming school year. Volunteers focus on foundational subjects like math, reading, and writing, to ensure that students are academically ready. In addition to these summer classes, students can access community hubs year-round to develop digital skills, art, and other essential life skills. These community hubs provide a consistent space for learning, equipping students with the skills they need to succeed in school and beyond.",
        longDescription:
            "OfLaD’s Volunteer-Led Summer Classes aim to help students get ready for the school year by focusing on essential academic subjects like math, reading, and writing. These volunteer-led sessions are designed to support students in reinforcing the fundamentals, boosting their academic confidence, and ensuring they are prepared for the challenges of the upcoming school year. The summer classes provide a safe, structured environment where students can improve their academic skills with the help of dedicated volunteers. Alongside the summer sessions, OfLaD offers year-round programs at its community hubs. These hubs provide students with opportunities to develop digital literacy, art, and other important life skills. The community hubs are open throughout the year, offering a variety of educational activities that allow students to gain essential skills at their own pace. The hubs also provide a space where students can learn creative and practical skills such as digital skills and artistic expression, preparing them for both academic success and personal growth."
    }
    ,
    {
        id: 5,
        title: "School Material Support",
        image: dontImg, // Replace with actual image URL
        shortDescription:
            "To bridge the resource gap in schools, OfLaD donates essential learning materials such as books, stationery, and digital tools. These efforts ensure that students, especially in underprivileged areas, have access to the resources they need for academic success.",
        longDescription:
            "OfLaD supports schools by donating books, stationery, and other essential materials to ensure students have the tools they need to succeed academically.",
    },
];
