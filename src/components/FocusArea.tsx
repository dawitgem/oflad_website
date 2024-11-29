import { useInView } from "react-intersection-observer";
import { FaBook, FaBookOpen, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';
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
            <div className="grid lg:grid-cols-2 justify-center items-center align-middle gap-10">
                <FocusAreaItem
                    index={0}
                    title="Education"
                    icon={<FaBook className="text-secondary-dark text-6xl" />}
                >
                    <p className=" text-gray-700 mt-4">
                        At OfLaD, we believe in the power of education to transform lives. By supporting public libraries and community learning spaces, we aim to enhance literacy and provide vital educational resources.
                    </p>
                    <ul className="list-disc list-inside  text-gray-700 mt-4 space-y-2">
                        <li>Improving the quality and availability of public libraries.</li>
                        <li>Hosting educational workshops and seminars.</li>
                        <li>Creating inclusive spaces for learning and growth.</li>
                    </ul>
                </FocusAreaItem>

                <FocusAreaItem
                    index={1}
                    title="Reading Habit"
                    icon={<FaBookOpen className="text-secondary-dark text-6xl" />}
                >
                    <p className="text-gray-700 mt-4">
                        Fostering a love for reading is central to our mission. OfLaD works to develop the reading habits of children and young adults, promoting lifelong learning.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Organizing storytelling sessions for children.</li>
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
                        In today’s digital age, essential tech skills are critical for success. OfLaD empowers communities by promoting digital literacy through various programs.
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
                    title="Informal Learning"
                    icon={<FaChalkboardTeacher className="text-secondary-dark text-6xl" />}
                >
                    <p className="text-gray-700 mt-4">
                        OfLaD extends learning beyond formal education by providing opportunities for skill-based training. We focus on empowering youth and children through practical programs such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Conducting workshops on life skills such as communication and leadership.</li>
                        <li>Offering training in vocational skills (e.g., carpentry, sewing).</li>
                        <li>Facilitating entrepreneurship and innovation programs.</li>
                        <li>Engaging youth in community-based projects to apply practical knowledge.</li>
                    </ul>
                </FocusAreaItem>
            </div>
        </div>
    );
};

export default FocusAreas;
