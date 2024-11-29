import { Dispatch, Fragment, SetStateAction, useState } from "react";

import { getInvolvedConsts } from "../utils/constants";
import { IoMdArrowForward } from "react-icons/io";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { FaHandPointRight, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import DonateButton from "./DonateButton";
import VolunteerForm from "./forms/VolunteerForm";
import DonateModal from "./DonateModal";

const DetailModal = ({
    openModal,
    setOpenModal,
    item,
}: {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    item: any | null;
}) => {
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
    return (
        <>
            <Transition appear show={openModal} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 w-screen"
                    onClose={() => setOpenModal(false)}
                >
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </TransitionChild>
                    <div className="fixed w-full top-10 inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="w-full max-w-[90%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all text-gray-800 space-y-10">
                                    <div className="p-4 flex md:flex-row flex-col gap-10">
                                        <img
                                            src={item?.img}
                                            alt={item?.title}
                                            className="max-w-md min-h-[300px]"
                                        />
                                        <div className="flex w-full flex-col gap-10 self-center p-5">
                                            <DialogTitle
                                                as="h3"
                                                className="text-4xl font-extrabold leading-6 text-secondary-dark"
                                            >
                                                {item?.title || "Details"}
                                            </DialogTitle>
                                            <div className="border-2 border-secondary-dark border-dashed w-full"></div>
                                            <p className="text-lg font-medium">
                                                {item?.detailDescription?.intro}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:p-4 py-4 flex flex-col gap-10">
                                        {item?.detailDescription?.subtitles?.map((subItem: any, idx: number) => (
                                            <div
                                                key={idx}
                                                className="flex w-full flex-col gap-10 self-center md:p-5"
                                            >
                                                <h1 className="text-4xl font-extrabold">{subItem.subtitle}</h1>
                                                <div className="border-2 border-secondary-dark w-full"></div>
                                                <ul className="flex flex-col gap-10">
                                                    {subItem?.content.map((content: string, idx: number) => (
                                                        <li
                                                            key={idx}
                                                            className="flex gap-5 items-center"
                                                        >
                                                            <FaHandPointRight className="hidden md:inline-flex text-2xl text-primary-dark" />
                                                            <p className="text-lg font-bold">{content}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    {item?.detailDescription?.form && <VolunteerForm />}
                                    {item?.detailDescription?.donateButton && (
                                        <div className="md:p-5">
                                            <DonateButton setIsDonateModalOpen={setIsDonateModalOpen} />
                                        </div>
                                    )}
                                    <div className="w-full flex flex-col gap-5 md:p-5 bg-primary-light/30">
                                        <h1 className="text-4xl font-extrabold text-gray-800">Contact</h1>
                                        <div className="border-2 border-secondary-dark w-full"></div>
                                        <div className="w-full flex gap-5 items-center">
                                            <FaPhoneAlt className="text-4xl text-primary-dark" />
                                            <p className="text-lg font-semibold">+251 941 779393</p>
                                        </div>
                                        <div className="w-full flex gap-5 items-center">
                                            <MdMail className="text-4xl text-primary-dark" />
                                            <p className="text-lg font-semibold">info@oflad.org</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md bg-secondary-dark/80 px-4 py-2 text-sm font-medium text-white hover:bg-secondary-dark/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg-secondary focus-visible:ring-offset-2"
                                            onClick={() => setOpenModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {isDonateModalOpen && <DonateModal isOpen={isDonateModalOpen} setIsOpen={setIsDonateModalOpen} />}
        </>
    );
};

const GetInvolved = () => {
    const [HoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);
    console.log(HoveredIndex)

    return (
        <>
            <div
                id="get-involved"
                className="w-full flex flex-col justify-center items-center gap-8 p-10 bg-primary-dark/20 text-secondary-dark text-xl"
            >
                <h1 className="w-full lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-black font-montserrat text-secondary-dark text-center break-words">
                    Get Involved,
                    <br /> Make a Difference
                </h1>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Challenges in Ethiopia</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Only <strong className="text-red-500">1 in 3</strong> Grade 2 and 3
                            students can read at a functional level.
                        </li>
                        <li>
                            In the 2021-22 national exams, only{" "}
                            <strong className="text-red-500">3.3%</strong> of students scored
                            above 50%.
                        </li>
                        <li>
                            There is an urgent need to improve literacy, enhance education, and
                            create better opportunities for the future.
                        </li>
                    </ul>
                </div>
                <h3 className="text-lg font-semibold text-secondary-dark text-center">
                    Join us in changing these trends. Together, we can build a brighter
                    tomorrow.
                </h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {getInvolvedConsts.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col bg-white shadow-md rounded-md max-w-[380px] md:h-[450px] sm:h-[500px] h-[600px]   gap-5 overflow-hidden relative transition-all duration-500 "
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="w-full transition-all duration-500">
                                <img
                                    src={item?.cardImg}
                                    alt="donate_image"
                                    className={`w-full object-cover h-full transition-all ${HoveredIndex === idx ? "max-h-[170px]" : "min-h-[300px] md:max-h-[300px]"
                                        }`}
                                />
                            </div>
                            <div
                                className={`relative p-4 flex flex-col items-center gap-4 text-center transition-all duration-500 will-change-transform ${HoveredIndex === idx ? "-translate-y-[20px]" : "md:translate-y-[20%] sm:translate-y-[40%] translate-y-[50%]"
                                    }`}
                            >
                                <h1 className="text-3xl font-extrabold text-gray-700">
                                    {item.title}
                                </h1>
                                <div className="border-2 border-secondary-dark border-dashed w-full"></div>
                                <div
                                    className={`lg:absolute p-2 top-full flex flex-col gap-4 md:text-md text-sm  font-medium text-gray-700 transition-opacity duration-500 ${HoveredIndex === idx ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <p>{item.titleDescription}</p>
                                    <button
                                        className="max-w-[160px] group relative flex justify-start items-center gap-2 text-xl text-primary font-semibold overflow-hidden"
                                        onClick={() => {
                                            setOpenDetail(true);
                                            setSelectedItem(idx);
                                        }}
                                    >
                                        {/* Content */}
                                        <span>Learn More</span>
                                        <IoMdArrowForward className="text-4xl transform transition-transform duration-300 group-hover:translate-x-3" />

                                        {/* Underline */}
                                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {openDetail && (
                <DetailModal
                    openModal={openDetail}
                    setOpenModal={setOpenDetail}
                    item={getInvolvedConsts[selectedItem]}
                />
            )}
        </>
    );
};

export default GetInvolved;
