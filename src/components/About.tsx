import img1 from "../public/assets/main_logo.png";
import img2 from "../public/assets/img5.jpg";
import { FaEye } from 'react-icons/fa';
import { FaBullseye, FaHandHoldingHeart } from 'react-icons/fa6';
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useSprings } from "@react-spring/web";
import FocusAreas from "./FocusArea";

const About = () => {
    const { ref: heroRef, inView: heroView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const { ref: wwaRef, inView: wwaView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });



    const words = ["Read", "Learn", "Grow"];
    const colors = ['#1a1c1b', '#d1a312', '#084b52'];

    const wordSprings = useSprings(
        words.length,
        words.map((_, index) => ({
            opacity: heroView ? 1 : 0,
            transform: heroView ? 'translateY(0)' : 'translateY(50px)',
            config: { tension: 220, friction: 30 },
            delay: 200 * index,
        }))
    );


    const heroAnimation = useSpring({
        opacity: heroView ? 1 : 0,
        transform: heroView ? 'translateY(0)' : 'translateY(50px)',
        config: { tension: 280, friction: 60 },
    });

    const logoAnimation = useSpring({
        opacity: wwaView ? 1 : 0,
        transform: wwaView ? 'translateX(0)' : 'translatex(-50px)',
        config: { tension: 280, friction: 60 },

    })
    const WhoWeAreTextAnimation = useSpring({
        opacity: wwaView ? 1 : 0,
        transform: wwaView ? 'translateX(0)' : 'translatex(50px)',
        config: { tension: 280, friction: 60 },
    })

    const { ref: mvRef, inView: mvView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const mvSectionAnimation = useSprings(
        3,
        [0, 1, 2].map((index) => ({
            opacity: mvView ? 1 : 0,
            transform: mvView
                ? 'scale(1)'
                : 'scale(0.8)',
            config: { tension: 250, friction: 30 },
            delay: 400 * index,
        }))
    )

    return (
        <div className="w-full md:mt-10 flex flex-col  bg-gray-50">
            {/* Hero Section */}
            <animated.div
                ref={heroRef}
                style={heroAnimation} // Apply animation styles
                className="text-center px-6 py-12 text-gray-800"
            >
                <h1 className="text-6xl lg:text-7xl font-extrabold font-montserrat mb-4 w-full break-words space-x-6 flex gap-2 sm:flex-row flex-col items-center justify-center  ">
                    {wordSprings.map((props, index) => (
                        <animated.span
                            key={index}
                            style={{
                                ...props,
                                color: colors[index],
                            }}
                            className="font-montserrat"
                        >
                            {words[index]}.
                        </animated.span>
                    ))}
                </h1>
                <h3 className="text-2xl lg:text-3xl font-bold font-montserrat text-secondary w-full break-words">
                    Organization for Learning and Development (OfLaD)
                </h3>
            </animated.div>

            {/* Who We Are Section */}
            <div id="about" className="flex flex-col lg:flex-row items-center gap-10 px-8 md:px-16 py-16 bg-white" ref={wwaRef}>

                <animated.div
                    className="flex-1 max-w-md"
                    style={logoAnimation}
                >
                    <img src={img1} alt="OfLaD Logo" className="w-full" />
                </animated.div>
                <animated.div
                    className="flex-1 space-y-6"
                    style={WhoWeAreTextAnimation}
                >
                    <h2 className="text-4xl font-bold font-montserrat text-secondary text-center">
                        Who We Are
                    </h2>
                    <p className="sm:text-lg  text-gray-700">
                        The <span className="font-bold">Organization for Learning and Development (OfLaD)</span> is a local nonprofit organization
                        established in Ethiopia on August 26, 2021. Our mission is to empower communities
                        through literacy, focusing building the capacity of public libraries to foster a culture of
                        reading and lifelong learning.
                        We strive to provide safe and free reading spaces, promote digital literacy, and create
                        learning opportunities for children and youth through various skill-based training
                        programs.
                    </p>
                    <p className="sm:text-lg text-gray-700">
                        We strive to provide safe and free reading spaces, promote digital literacy, and create informal learning opportunities for children and youth through various skill-based training programs.
                    </p>
                </animated.div>

            </div>

            {/* Mission, Vision, and Core Values Section */}
            <div ref={mvRef} className="w-full bg-secondary-light/10 py-16 px-8 md:px-16">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    <animated.div
                        className="flex gap-5"
                        style={mvSectionAnimation[0]}
                    >
                        <div className="flex flex-col gap-5 items-center text-center">
                            <div className="p-4 flex items-center justify-center bg-slate-50 rounded-full shadow-lg group">
                                <FaEye className="text-8xl text-secondary-dark icon-flip" />
                            </div>
                            <h2 className="text-3xl font-bold text-secondary mt-4 font-montserrat">
                                <span className='text-primary-dark'>Our</span> Vision
                            </h2>
                            <p className="text-gray-600 font-medium sm:text-lg mt-2">
                                To see an educated and holistically developed generation of children and youth.
                            </p>
                        </div>
                        <div className="hidden lg:block w-[3px] border-r border-secondary/40 h-full mx-auto"></div>
                    </animated.div>

                    {/* Mission Section */}
                    <animated.div
                        className='flex gap-5'
                        style={mvSectionAnimation[1]}
                    >
                        <div className="flex flex-col gap-5 items-center text-center">
                            <div className="p-4 flex items-center justify-center bg-slate-50 rounded-full shadow-lg group">
                                <FaBullseye className="text-8xl text-secondary-dark icon-flip" />
                            </div>
                            <h2 className="text-3xl font-bold text-secondary mt-4 font-montserrat">
                                <span className='text-primary-dark'>Our</span> Mission
                            </h2>
                            <p className="text-gray-600 font-medium sm:text-lg mt-2">
                                To broaden opportunities for individuals, contributing to lifelong learning beginning at birth.
                            </p>
                        </div>
                        <div className="hidden lg:block w-[3px] border-r border-secondary/40 h-full mx-auto">
                        </div>
                    </animated.div>

                    {/* Core Values Section */}
                    <animated.div
                        className="flex flex-col gap-5  items-center"
                        style={mvSectionAnimation[2]}
                    >
                        <div className="p-4 flex justify-center bg-slate-50 rounded-full shadow-lg group">
                            <FaHandHoldingHeart className="text-8xl text-secondary-dark icon-flip" />
                        </div>
                        <h2 className="text-3xl font-bold text-secondary mt-4 font-montserrat">
                            <span className='text-primary-dark'>Our</span> Value
                        </h2>
                        <ul className="mt-2 text-gray-600 sm:text-lg font-medium space-y-2">
                            <li><strong>Access:</strong> Equitable and open access for all.</li>
                            <li><strong>Volunteerism:</strong> Encouraging and valuing volunteers.</li>
                            <li><strong>Welcoming:</strong> Creating safe spaces for all.</li>
                            <li><strong>Innovation:</strong> Constantly evolving and improving.</li>
                        </ul>
                    </animated.div>
                </div>
            </div>


            {/* Highlight Section */}
            <div className="relative w-full h-[450px] md:h-[550px]">
                <img
                    src={img2}
                    alt="Community Library"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/70"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
                    <h2 className="text-3xl md:text-7xl font-black font-montserrat">
                        Empowering Communities Through Literacy
                    </h2>
                    <p className="mt-4 lg:text-2xl md:text-xl sm:text-lg  font-semibold max-w-3xl">
                        OfLaD serves as a vibrant community center, offering public libraries, technology skills training,
                        and diverse educational courses to empower individuals and foster lifelong learning.
                    </p>

                </div>
            </div>
            <FocusAreas />

        </div>
    );
};

export default About;
