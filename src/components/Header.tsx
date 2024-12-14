import logo from "../public/logo.png";
import { useEffect, useState } from "react";
import NavSheet from "./NavSheet";
import DonateModal from "./DonateModal";
import DonateButton from "./DonateButton";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="w-full  "></div>
            <header className={`flex p-5 border-b border-black/10 w-full flex-wrap  sticky top-0 z-[9999] ${isScrolled ? "bg-slate-50" : "md:bg-transparent bg-slate-50"}  `}>
                <nav className="flex justify-between items-center w-full">
                    <a href="/" className="flex flex-col justify-center ">
                        <div className="flex flex-col flex-shrink sm:flex-row">
                            <img src={logo} className="w-10 sm:w-auto object-cover" />
                            <h1 className={`text-3xl font-bold  sm:mt-5 ${isScrolled ? "text-secondary" : "md:text-white text-secondary"}`}>OFLAD</h1>
                        </div>
                        <h2 className={`hidden lg:block  text-lg font-montserrat font-bold ${isScrolled ? "text-secondary" : "md:text-slate-200 text-secondary"}`}>Organization for Learning and Development</h2>
                    </a>

                    {/* Desktop View */}
                    <ul className={`hidden md:flex flex-1 lg:gap-10 md:gap-4 justify-end items-center align-middle flex-wrap p-4 text-[1rem] font-bold ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        <li><a href="#" className="navlink_hover">Home</a></li>
                        <li><a href="#about" className="navlink_hover">Who We Are</a></li>
                        <li><a href="#our-efforts" className="navlink_hover">Our Efforts</a></li>
                        <li><a href="#get-involved" className="navlink_hover">Get involved</a></li>
                        <li><a href="#contact-us" className="navlink_hover">Contact us</a></li>
                    </ul>

                    {/* Mobile View */}
                    <div className="flex items-center gap-4">
                        <DonateButton setIsDonateModalOpen={setIsDonateModalOpen} style="hidden xs:inline-flex " />
                        {/* Hamburger Menu Button */}
                        <button
                            className="group md:hidden inline-flex w-12 h-12 text-slate-800 text-center items-center justify-center rounded transition focus:outline-none "
                            aria-pressed={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Menu</span>
                            <svg className="w-6 h-6 fill-secondary-dark hover:fill-primary-dark pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <rect className="origin-center -translate-y-[5px] translate-x-[0px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]" y="7" width="16" height="2" rx="1"></rect>
                                <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-[45deg]" y="7" width="16" height="2" rx="1"></rect>
                                <rect className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[45deg]" y="7" width="16" height="2" rx="1"></rect>
                            </svg>
                        </button>
                    </div>
                </nav>
                <NavSheet isOpen={isOpen} setIsOpen={setIsOpen} />
            </header>
            {isDonateModalOpen && <DonateModal isOpen={isDonateModalOpen} setIsOpen={setIsDonateModalOpen} />}
        </>
    );
};

export default Header;
