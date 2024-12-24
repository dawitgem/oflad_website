// import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import img1 from "../../public/assets/img12.jpeg";
import img2 from "../../public/assets/img7.jpg";
import img3 from "../../public/assets/img31.jpg";
import img4 from "../../public/assets/img21.jpg";

const Hero = () => {
    const images = [img1, img2, img3, img4];
    const [index, setIndex] = useState(0);

    // Automatically change the image index
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // 4 seconds interval
        return () => clearInterval(interval);
    }, []);


    const transitions = useTransition(index, {
        keys: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <div className="w-full h-screen  overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                {transitions((style, i) => (
                    <animated.div
                        key={i}
                        style={{
                            ...style,
                            backgroundImage: `url(${images[i]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="absolute inset-0 w-full h-full"
                    ></animated.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-black/60"></div>
            </div>

            {/* Hero Content */}
            <div className="relative w-full flex flex-col justify-center items-start text-slate-100 min-h-[calc(100vh-4px-100px)] z-50 sm:p-5 p-2 space-y-5 ">
                <div className="relative rounded-md z-10 bg-slate-50/10 flex flex-col gap-5 justify-center items-start p-6 w-full sm:w-3/4 md:w-1/2">
                    <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-black font-montserrat w-full break-words">
                        Today a <span className="text-primary-dark ">reader, </span>  Tomorrow  a<span className="text-secondary-dark"> leader . </span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium font-montserrat">
                        Join us in making a difference
                    </p>
                    <div className="p-4"></div>
                    {/* <button className="btn text-xl text-primary py-3 px-6 rounded-lg hover:bg-secondary transition duration-300 flex gap-2 justify-center items-center">
                        <p>Learn more</p>
                        <div className="flex gap-0">
                            <IoIosArrowForward />
                            <IoIosArrowForward className="-ml-4" />
                        </div>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
