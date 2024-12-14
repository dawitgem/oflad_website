import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ProjectDetail } from "./ProjectDetails";
import { projects } from "../utils/constants";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Achievements from "./Achievements";

const Project = ({ openDialog, project, index }: { openDialog: (num: any) => void, project: any, index: number }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });


    const slideInStyle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView
            ? index % 2 === 0
                ? 'translateX(0)'
                : 'translateX(0)'
            : index % 2 === 0
                ? 'translateX(100%)'
                : 'translateX(-100%)',
        config: { tension: 200, friction: 30 },
    });

    return (
        <animated.div
            ref={ref}
            className="w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow space-y-8 max-w-xl"
            style={slideInStyle}
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover overflow-hidden"
            />
            <div className="p-4 space-y-8 flex flex-col">
                <h3 className="text-xl font-bold text-secondary-dark mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600">
                    {project.shortDescription}
                </p>
                <button
                    onClick={() => openDialog(project)}
                    className="self-end bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
                >
                    <FaArrowRight />
                </button>
            </div>
        </animated.div>
    );
};

const OurEfforts = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const openDialog = (project: any) => setSelectedProject(project);

    return (
        <div id="our-efforts" className="w-full bg-gray-50 text-center overflow-hidden">
            {/* Intro Section */}
            <div className="p-8 bg-blue-100 space-y-8 w-full">
                <h2 className="text-4xl font-extrabold font-montserrat text-secondary-dark ">Our Efforts</h2>
                <p className="text-lg font-medium text-gray-700 w-full">
                    Despite being newly established in 2021, <strong>OfLaD</strong> has made significant strides in promoting literacy  in Ethiopia. From reopening libraries and organizing reading campaigns to providing essential school materials and skill-based training, we’re proving that a young organization can make a lasting impact.
                </p>
            </div>

            {/* Projects Section */}
            <div className="p-8 space-y-4 overflow-hidden">
                <h3 className="text-start text-lg font-extrabold font-montserrat text-secondary-dark">Our Recent Projects</h3>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 overflow-hidden ">
                    {projects.map((project, index) => (
                        <div key={project.id}>
                            <Project openDialog={openDialog} project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            <ProjectDetail setSelectedProject={setSelectedProject} selectedProject={selectedProject} />
            <Achievements />
        </div>
    );
};

export default OurEfforts;
