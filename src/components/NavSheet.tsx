import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import DonateButton from "./DonateButton";
import DonateModal from "./DonateModal";

interface SheetProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavSheet = ({ isOpen, setIsOpen }: SheetProps) => {
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
    return (
        <>
            <Transition show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="md:hidden inline-flex relative z-50 h-full"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    {/* Backdrop */}
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-400"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed top-28 inset-0 bg-black bg-opacity-30" />
                    </TransitionChild>

                    {/* Sliding Panel */}
                    <div className="fixed top-[104px]   inset-0 flex justify-end">
                        <TransitionChild
                            as={Fragment}
                            enter="transform transition ease-out duration-500"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in duration-900"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <DialogPanel className="w-full max-w-md bg-white h-full shadow-xl flex flex-col p-6">

                                <nav className="space-y-8 text-xl text-gray-700">
                                    <a
                                        href=""
                                        className="block hover:text-primary transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#about"
                                        className="block hover:text-primary transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Who we are
                                    </a>
                                    <a
                                        href="#our-efforts"
                                        className="block hover:text-primary transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Our Efforts
                                    </a>
                                    <a
                                        href="#get-involved"
                                        className="block hover:text-primary transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Get involved
                                    </a>
                                    <a
                                        href="#contact-us"
                                        className="block hover:text-primary transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact us
                                    </a>

                                    <DonateButton setIsDonateModalOpen={setIsDonateModalOpen} style="xs:hidden inline-flex" />
                                </nav>

                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>

            {isDonateModalOpen && <DonateModal isOpen={isDonateModalOpen} setIsOpen={setIsDonateModalOpen} />}
        </>
    );
};

export default NavSheet;
