import books from "../public/assets/books.svg"
import student from "../public/assets/student.svg"
import donation from "../public/assets/donation.svg"
import logo from "../public/logo.png"
import { CiFacebook, CiInstagram, CiLinkedin, CiLocationOn, CiMail, CiPhone, CiYoutube } from "react-icons/ci"
import { RiTelegramLine, RiTwitterXFill } from "react-icons/ri"
import { useState } from "react"
import DonateButton from "./DonateButton"
import DonateModal from "./DonateModal"


const Footer = () => {
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="relative bg-[url(/src/public/assets/footerwave.svg)] bg-cover bg-no-repeat  ">
                <div className="relative w-full z-10 flex flex-col  flex-wrap gap-10 xs:p-8 xs:items-center ">
                    <div className="flex  xs:justify-center gap-4 items-center flex-wrap">
                        <img src={books} alt="books icon" className="w-24 h-20 object-cover" />
                        <img src={student} alt="books icon" className="w-24 h-20 " />
                        <img src={donation} alt="books icon" className="w-36 object-cover " />
                    </div>
                    <h3 className="text-primary-dark font-black text-3xl w-full text-center break-words">
                        Read More,
                        Give More,  Be More
                    </h3>
                    <div className="border-t-[0.0005px] border-primary-light/30 w-full ">
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-10 ">
                        <div className=" p-4 flex flex-col gap-5 just items-center">
                            <a href="/" className="flex sm:flex-row flex-col   flex-shrink  items-center sm:gap-5  gap-2  w-full">
                                <img src={logo} className="w-auto object-cover " />
                                <div className="flex flex-col w-full ">
                                    <h1 className="text-3xl font-bold text-secondary  w-full text-center sm:text-start break-words">OFLAD</h1>
                                    <p className="text-sm text-primary-light/80 w-full break-words 
                                text-center sm:text-start ">Organization For Learning and Development</p>
                                </div>
                            </a>
                            <p className="text-sm text-center text-white/60 w-full break-words">
                                Organization for Learning and Development (OfLaD) is an Ethiopian nonprofit established in 2021 to empower communities through literacy and lifelong learning. We enhance public libraries, promote digital literacy, and provide skill-based training for children and youth.

                                Our Girls Club initiative empowers girls through book clubs, life skills training, and mentorship. At OfLaD, we believe education transforms lives. Join us in making a lasting impact!
                            </p>



                            <div className="flex flex-wrap gap-5 items-center text-5xl ">
                                <a href="https://web.facebook.com/p/Organization-for-Learning-and-Dev-Community-Library-100075708772586/?_rdc=1&_rdr">
                                    <CiFacebook className="bg-secondary/30 rounded-full  p-[4px] text-primary-light hover:text-white hover:bg-primary-dark/30" />

                                </a>

                                <a href="https://www.instagram.com/ofladlibrary/">
                                    <CiInstagram className="bg-secondary/30 rounded-full  p-[4px] text-primary-light hover:text-white hover:bg-primary-dark/30" />

                                </a>
                                <a href="https://t.me/FamComLib">
                                    <RiTelegramLine className="bg-secondary/30 rounded-full  p-[4px] text-primary-light hover:text-white hover:bg-primary-dark/30" />

                                </a> <a href="https://x.com/SieleShifferaw">
                                    <RiTwitterXFill
                                        className="bg-secondary/30 rounded-full  p-[4px] text-primary-light hover:text-white hover:bg-primary-dark/30" />

                                </a>

                                <a href="https://www.linkedin.com/in/siele-shifferaw/">
                                    <CiLinkedin className="bg-secondary/30 rounded-full  p-[4px] text-primary-light hover:text-white hover:bg-primary-dark/30" />
                                </a>
                                <a href="https://www.youtube.com/@OfLaD2021">
                                    <CiYoutube className="bg-secondary/30 rounded-full  p-[4px] text-primary-light hover:text-white hover:bg-primary-dark/30" />
                                </a>

                            </div>


                        </div>
                        <div className="text-white/80  flex flex-col gap-5 p-4">
                            <h3 className=" w-full break-words font-semibold text-xl  ">Quick Links</h3>
                            <a href="" className="text-lg hover:text-primary-dark">
                                Home
                            </a>
                            <a href="#about" className="text-lg hover:text-primary-dark">
                                Who we are
                            </a>
                            <a href="#our-efforts" className="text-lg hover:text-primary-dark">
                                Our Efforts
                            </a>
                            <a href="#get-involved" className="text-lg hover:text-primary-dark">
                                Get involved
                            </a>
                            <div className="md:p-5">
                                <DonateButton setIsDonateModalOpen={setIsDonateModalOpen} />
                            </div>


                        </div>
                        <div className="text-white/80 flex flex-col p-4 w-full gap-5 ">
                            <h3 className=" w-full break-words font-semibold text-xl  ">Get In Touch</h3>
                            <div className="flex gap-3 items-center text-lg text-slate-100/80 hover:text-primary-dark">
                                <CiLocationOn className="text-3xl text-primary-dark" />
                                <p className="w-full break-words">Addis Ababa,   Ethiopia</p>
                            </div>
                            <div className="flex gap-3 items-center text-lg text-slate-100/80 hover:text-primary-dark">
                                <CiPhone className="text-3xl text-primary-dark" />
                                <p className="w-full break-words">+251 941 779393</p>
                            </div>
                            <div className="flex gap-3 items-center text-lg text-slate-100/80 hover:text-primary-dark">
                                <CiMail className="text-3xl text-primary-dark" />
                                <a
                                    href="mailto:info@oflad.org" className="w-full break-words">info@oflad.org</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-[0.0005px] border-primary-light/30 w-full ">

                    </div>
                    <p className="text-sm text-slate-100/50">&copy;{currentYear} | developed by Abebe Wondwosen  <span >
                        <a href="mailto:abebewondwosen3@gmail.com" className="hover:text-primary-dark">

                            abebewondwosen3@gmail.com
                        </a>
                    </span></p>

                </div>


            </footer>

            {isDonateModalOpen && <DonateModal isOpen={isDonateModalOpen} setIsOpen={setIsDonateModalOpen} />}


        </>
    )
}

export default Footer