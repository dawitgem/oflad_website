import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { FaGlobeAfrica, FaHandshake, FaLaptop } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";


const Achievements = () => {
    const [inView, setInView] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the component is visible
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    const achievements = [
        { id: 1, title: "Books Donated", value: 500, icon: <GiWhiteBook /> },
        { id: 2, title: "Volunteers Engaged", value: 300, icon: <FaHandshake /> },
        { id: 3, title: "Training Sessions", value: 20, icon: <FaLaptop /> },
        { id: 4, title: "Community Members Reached", value: 1000, icon: <FaGlobeAfrica /> },
    ];

    return (
        <div ref={componentRef} id="our-efforts" className="p-8 bg-[url(/src/public/assets/img21.png)] bg-no-repeat bg-cover text-center  min-h-[450px] flex flex-col justify-center items-center relative ">
            <div className="w-full absolute inset-0 
            bg-gradient-to-t from-black/85 via-black/85 to-black/85
              "></div>

            <div className="grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 items-center relative z-[60]">
                {achievements.map((achievement) => (
                    <div
                        key={achievement.id}
                        className="flex flex-col items-center rounded-lg "
                    >
                        <div className="text-yellow-500 text-5xl mb-4">
                            {achievement.icon}
                        </div>
                        <div className="text-4xl font-bold text-primary-dark">
                            {inView && (
                                <CountUp
                                    start={0}
                                    end={achievement.value}
                                    duration={2.5}
                                    separator=","
                                    suffix={achievement.id === 4 ? "+" : ""}
                                />
                            )}
                        </div>
                        <div className="text-2xl text-white font-bold font-montserrat">
                            {achievement.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
