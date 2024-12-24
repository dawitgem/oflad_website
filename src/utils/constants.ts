import img1 from "../../public/assets/img44.jpg"
import img2 from "../../public/assets/img18.jpg";
import img3 from "../../public/assets/img45.jpeg";
import img4 from "../../public/assets/img45.jpeg";
import img5 from "../../public/assets/img47.jpg";
import img6 from "../../public/assets/img46.jpg";
import logo1 from "../../public/assets/logo-123 (1).jpg"
import logo2 from "../../public/assets/logo-345.jpg"
import logo3 from "../../public/assets/logo-6734.jpg"
import logo4 from "../../public/assets/logo-8643.png"
import logo5 from "../../public/assets/logo3333.jpg"
import logo6 from "../../public/assets/new-Logo-7.png"
import logo7 from "../../public/assets/logo-1211.jpg"
import logo8 from "../../public/assets/logo-2111.jpg"
import logo9 from "../../public/assets/logo-awaqi.jpg"

import lib1Img from "../../public/assets/img51.jpg"
import lib1Img2 from "../../public/assets/img50.jpg"
import lib1Img3 from "../../public/assets/img64.jpg"
import lib2Img from "../../public/assets/img12.jpeg"
import lib2Img2 from "../../public/assets/img62.jpg"
import lib2Img3 from "../../public/assets/img63.jpg"
import festImg from "../../public/assets/img22.jpg"
import festImg2 from "../../public/assets/img52.jpg"
import festImg3 from "../../public/assets/img53.jpg"
import studImg from "../../public/assets/img23.jpg"
import studImg2 from "../../public/assets/img57.jpg"
import studImg3 from "../../public/assets/img54.jpg"
import dontImg from "../../public/assets/img67.jpg"
import dontImg1 from "../../public/assets/img24.jpg"
import dontImg2 from "../../public/assets/img59.jpg"
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

export const partnersLogo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]

export const projects = [
    {
        id: 1,
        title: "Mekanissa Family Community Library",
        image: lib2Img, // Replace with actual image URL
        images: [lib2Img3, lib2Img2],
        shortDescription:
            "OfLaD has opened a Family Community Library in Nifas Silk Lafto Subcity, near the Mekanissa and Kore condominium areas. The library serves local children, including those from the Kori Kids project, providing essential educational resources.",
        longDescription:
            "OfLaD proudly opens the Family Community Library at Nifas Silk Lafto Subcity, strategically located near the Mekanissa and Kore condominium areas, which are home to a significant number of residents. The library serves as an educational haven for local children, including those from the Kori Kids project who live near the Addis Abeba dumpster area (Koshe). The library provides a rich variety of books, digital resources, and interactive learning materials, offering children a safe and nurturing space to develop essential literacy skills. With its focus on community outreach, the library also hosts activities and programs aimed at fostering a love for reading, enhancing academic success, and empowering children with the tools they need for a brighter future."
    },
    {
        id: 2,
        title: "Sarbet Family Community Library",
        image: lib1Img, // Replace with actual image URL
        images: [lib1Img3, lib1Img2],
        shortDescription:
            "OfLaD has opened a Family Community Library at Sarbet , Lideta Subcity Woreda 4 Youth Center, providing valuable educational services to youth and children, including students from Tesfa Public School.",
        longDescription:
            "OfLaD’s second library is located at Sarbet, Lideta Subcity’s Woreda 4 Youth Center, a key location offering vital educational support to the local community, particularly youth and children. The library is strategically placed to benefit students from Tesfa Public School, located nearby, by providing access to a diverse collection of books, digital learning tools, and interactive educational programs. This library serves as a hub for personal and academic development, helping students improve literacy, engage in extracurricular activities, and explore new subjects. Additionally, the library hosts various workshops and community programs designed to encourage lifelong learning, critical thinking, and social interaction, empowering students and fostering a sense of belonging within their community."
    },
    {
        id: 3,
        title: "Reading Festivals",
        image: festImg, // Replace with actual image URL
        images: [festImg2, festImg3],
        shortDescription:
            "OfLaD’s reading festivals are vibrant, community-centered events that celebrate the joy of reading. By bringing together students, parents, and educators, these festivals aim to foster consistent reading habits and spark curiosity.",
        longDescription:
            "Reading campaigns have been a cornerstone initiative of OfLaD, and our Reading Festivals bring this vision to life. These vibrant, community-centered events celebrate the joy of reading by uniting students, parents, educators, and local leaders in a shared mission to foster a love for books and learning. Through engaging activities like storytelling sessions, book fairs, reading competitions, and interactive workshops, the festivals aim to inspire curiosity and ignite a lifelong passion for reading. \n\nOfLaD collaborates with schools, libraries, publishers, and volunteers to make these events impactful and inclusive. By distributing free books and educational materials at the festivals, we ensure that children from underprivileged backgrounds have access to quality reading resources. Our storytelling sessions, often led by authors, teachers, and community role models, create an engaging and immersive experience that captivates young minds. \n\nIn addition to sparking interest in reading, the festivals promote the importance of parental involvement in children's literacy journeys. Parents are encouraged to participate in reading workshops, where they learn practical tips on fostering a reading culture at home. Educators benefit from professional development opportunities that focus on creative teaching methods to enhance reading engagement in classrooms. \n\nThese festivals are more than just events; they are a movement to build a reading culture that extends beyond the festivities. By embedding a love for reading in communities and reinforcing the importance of lifelong learning, OfLaD strives to create an environment where education is celebrated and knowledge is shared across generations."
    },
    {
        id: 4,
        title: "Volunteer-Led Summer Classes & Skill Training",
        image: studImg, // Replace with actual image URL
        images: [studImg2, studImg3],
        shortDescription:
            "During the summer, OfLaD organizes volunteer-led classes to help students prepare for the upcoming school year. Volunteers focus on foundational subjects like math, reading, and writing, to ensure that students are academically ready.",
        longDescription:
            "OfLaD’s Volunteer-Led Summer Classes aim to help students get ready for the school year by focusing on essential academic subjects like math, reading, and writing. These volunteer-led sessions are designed to support students in reinforcing the fundamentals, boosting their academic confidence, and ensuring they are prepared for the challenges of the upcoming school year. The summer classes provide a safe, structured environment where students can improve their academic skills with the help of dedicated volunteers. Alongside the summer sessions, OfLaD offers year-round programs at its community hubs. These hubs provide students with opportunities to develop digital literacy, art, and other important life skills. The community hubs are open throughout the year, offering a variety of educational activities that allow students to gain essential skills at their own pace. The hubs also provide a space where students can learn creative and practical skills such as digital skills and artistic expression, preparing them for both academic success and personal growth."
    },
    {
        id: 5,
        title: "Book Donations",
        image: dontImg,
        images: [dontImg1, dontImg2],
        shortDescription:
            "To bridge the educational resource gap, OfLaD focuses on donating essential books alongside other learning materials such as stationery and digital tools.",
        longDescription:
            `OfLaD is committed to addressing the educational resource gap by providing schools with essential books and learning materials. Books play a crucial role in fostering literacy and nurturing a culture of reading. By donating textbooks, library books, and other educational resources, we aim to support underprivileged schools in building well-rounded libraries and improving students' access to learning materials. In addition to books, we provide stationery and digital tools to enhance the learning experience.  
            
            To make these donations possible, OfLaD works closely with partner organizations, individual donors, and volunteers. Through community drives, fundraising campaigns, and donation events, we collect high-quality books, educational software, and classroom supplies such as notebooks, pens, and art materials. Our approach is not just about donating physical items, but also collaborating with educators and administrators to understand their unique needs and ensure our support is impactful.  
    
            By focusing on books and learning tools, we strive to create sustainable change and promote educational equity. OfLaD believes that by empowering schools with the right resources, we can help students develop the skills and knowledge necessary for a brighter future in an increasingly digital world.`
    }

];
