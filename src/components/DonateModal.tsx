import { Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import gofundmeLogo from "../public/assets/GoFundMe_Logo.png"
import boalogo from "../public/assets/boa.png"
import cbe from "../public/assets/cbe.png"

const DonateModal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-[99999999]"
                onClose={() => setIsOpen(false)}
            >
                {/* Backdrop */}
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

                {/* ModalPanelDialogPanel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <TransitionChild
                        as={Fragment}
                        enter="delay-500 ease-out duration-500"
                        enterFrom="opacity-0 translate-y-[-50px]"
                        enterTo="opacity-100 translate-y-0"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-[-50px]"
                    >
                        <DialogPanel className="w-full max-w-xl min-h-[400px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  space-y-4">
                            <DialogTitle
                                as="h3"
                                className="text-xl  leading-6 text-secondary-dark font-extrabold font-montserrat"
                            >
                                Any Support  will be appreciated
                            </DialogTitle>

                            <div className="flex flex-col  items-center gap-3 justify-center">
                                <a href={"https://www.gofundme.com/f/we-are-establishing-community-library-in-ethiopia?member=23516017&sharetype=teams&utm_campaign=p_na+share-sheet&utm_medium=social&utm_source=whatsapp"} className=" w-2/4">
                                    <img src={gofundmeLogo} alt="gofundmelogo" className="w-full object-cover" />
                                </a>
                                <a href={"https://donate.bankofabyssinia.com/dashboard/familypubliclibrary.php"} className=" w-2/4">
                                    <img src={boalogo} alt="gofundmelogo" className="w-full " />
                                </a>
                                <div className="w-full flex flex-col justify-center items-center text-xl font-semibold text-gray-700">
                                    <img src={cbe} alt="cbe-logo" className="" />
                                    <p><span>Account : </span>1000444218677</p>
                                </div>
                                <div className="flex w-full justify-center items-center gap-5">
                                    <div className="w-full h-[1px] bg-secondary-dark"></div>
                                    <p className="text-xl font-bold text-gray-700">or</p>
                                    <div className="w-full h-[1px] bg-secondary-dark"></div>
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <p className="w-full font-semibold text-xl text-gray-700">To Donate Educational materials please give us a call!</p>
                                </div>
                                <p className="text-gray-600 text-xl">+251 941 779393</p>
                            </div>

                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition >
    );
};

export default DonateModal;
