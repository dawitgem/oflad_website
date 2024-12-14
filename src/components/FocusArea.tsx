import { useInView } from "react-intersection-observer";
import { FaBook, FaBookOpen, FaChalkboardTeacher, FaFemale, FaLaptopCode } from 'react-icons/fa';
import { useSpring, animated } from "@react-spring/web";


const FocusAreaItem = ({ title, icon, children, index }: any) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const focusItemAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { tension: 200, friction: 30 },
        delay: 200 * index,
    });

    return (
        <animated.div ref={ref} style={focusItemAnimation} className="sm:text-lg flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
                {icon}
                <h3 className="text-4xl font-bold text-gray-700 font-montserrat">
                    {title}
                </h3>
            </div>
            {children}
        </animated.div>
    );
};

const FocusAreas = () => {
    const { ref: focusRef } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    return (
        <div ref={focusRef} className="bg-white py-16 px-8 md:px-16 space-y-12">
            <h2 className="text-4xl text-secondary text-center font-montserrat font-extrabold">
                Our Focus Areas
            </h2>
            <div className="grid lg:grid-cols-2  justify-center items-start align-middle gap-10">

                <FocusAreaItem
                    index={0}
                    title="Reading Space"
                    icon={<FaBook className="text-secondary-dark text-6xl" />}
                >
                    <p className=" text-gray-700 mt-4">
                        Libraries remain crucial in developing countries, even as the internet expands, because they provide
                        equitable access to knowledge and resources that the digital divide often excludes. Many developing regions
                        face barriers such as unreliable electricity, limited internet access, and prohibitive costs of digital devices,
                        making libraries essential hubs for learning. Libraries offer physical books, educational materials, and spaces
                        for communal study, catering to marginalized groups who might otherwise lack educational opportunities.
                        Additionally, they serve as centers for lifelong learning and literacy promotion, equipping individuals with skills
                        that foster economic empowerment and social mobility
                    </p>
                    <ul className="list-disc list-inside  text-gray-700 mt-4 space-y-2">
                        <li>Improving the quality and availability of child friendly Public/Community libraries</li>
                        <li>Access to developmentally appropriate, diverse and engaging books.</li>
                        <li>Advocacy to community and Governance importance of child friendly libraires</li>
                        <li>Conduct book reading festivals with the community</li>
                    </ul>
                </FocusAreaItem>

                <FocusAreaItem
                    index={1}
                    title="Reading Intervention"
                    icon={<FaBookOpen className="text-secondary-dark text-6xl" />}
                >
                    <p className="text-gray-700 mt-4">
                        Research indicates that students who read for pleasure and explore diverse materials are more likely to achieve academic success.
                        <br />
                        OfLaD’s interventions focus on nurturing a love for reading in children and youth through the following initiatives:




                        Distributing books to underserved communities to foster equitable access.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>
                            Organizing storytelling sessions and book clubs for young readers.</li>
                        <li>Providing access to diverse books and educational materials.</li>
                        <li>Launching campaigns to encourage reading in schools and communities.</li>
                    </ul>
                </FocusAreaItem>

                <FocusAreaItem
                    index={2}
                    title="Digital Literacy"
                    icon={<FaLaptopCode className="text-secondary-dark text-6xl" />}
                >
                    <p className="text-gray-700 mt-4">
                        <a href="https://unevoc.unesco.org/home/TVETipedia+Glossary/show=term/term=Digital+literacy" className="text-blue-400 underline">UNESCO</a> defines digital literacy as the ability to safely and appropriately access, manage, understand,
                        integrate, communicate, evaluate, and create information using digital technologies. Literacy and digital skills
                        are key enablers for digital transformation and are key areas of focus for the Government of Ethiopia’s
                        strategies for growth. <a href="https://www.lawethiopia.com/images/Policy_documents/Digital-Ethiopia-2025-Strategy-english.pdf" className="text-blue-400 underline">Ethiopia&#39;s Digital Ethiopia Strategy 2025 </a> aims to achieve 70% digital literacy
                        nationally by 2025. Ethiopia currently ranks 112 out of 149 countries on the World Economic
                        Forum’s digital skills index.
                        <br />
                        OfLaD is working to contribute its share by making ICT equipment’s available to the community. OfLad
                        together with volunteers has provided various basic IT skills in youth centers and schools.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Providing hands-on computer skills training.</li>
                        <li>Offering courses on using productivity tools (e.g., MS Office, Google Suite).</li>
                        <li>Teaching programming and web development basics.</li>
                        <li>Promoting safe and effective internet usage.</li>
                    </ul>
                </FocusAreaItem>

                <FocusAreaItem
                    index={3}
                    title="Life skill training"
                    icon={<FaChalkboardTeacher className="text-secondary-dark text-6xl" />}
                >
                    <p className="text-gray-700 mt-4">
                        OfLaD extends learning beyond formal education by providing opportunities for skill-based training. We focus on empowering youth and children through practical programs such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Conducting workshops on life skills such as communication and leadership.</li>

                        <li>Facilitating entrepreneurship and innovation programs.</li>
                        <li>Engaging youth in community-based projects to apply practical knowledge.</li>
                    </ul>
                </FocusAreaItem>
                <FocusAreaItem
                    index={3}
                    title="Girls Club"
                    icon={<FaFemale className="text-secondary-dark text-6xl" />}
                >
                    <p className="text-gray-700 mt-4">
                        Investing in girls’ education can bring change in a generation. According to UNICEF,
                        53% girls complete primary school, 25 percent of school aged girls are attending
                        secondary school, and an estimated only 10 per cent go on to enroll in college.
                        <br />
                        OfLad is dedicated to support the girls club by organizing book clubs, life skill
                        training etc. to empower girls and enable them decision makers in their own life.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Organizing book clubs to encourage reading
                        </li>

                        <li>Conducting life skills training</li>
                        <li>Promoting girls’ leadership and decision-making abilities</li>
                    </ul>
                </FocusAreaItem>
            </div>
        </div>
    );
};

export default FocusAreas;
