import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction } from "react";
import { GrLinkPrevious } from "react-icons/gr";

export const ProjectDetail = ({
    selectedProject,
    setSelectedProject,
}: {
    selectedProject: any;
    setSelectedProject: Dispatch<SetStateAction<any>>;
}) => {
    return (
        <Transition appear show={!!selectedProject} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-[70] w-full h-screen "
                onClose={() => setSelectedProject(null)}
            >
                {/* Background Overlay */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </TransitionChild>

                {/* Dialog Panel */}
                <div className="fixed inset-0 overflow-hidden bg-white h-full">
                    <div className="flex items-center justify-center min-h-full">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="absolute top-24 inset-0 bg-white p-6 z-[99] h-full overflow-y-auto space-y-4">
                                {/* Back Button */}
                                <button
                                    className="flex gap-2 text-xl font-bold p-1 text-secondary-dark items-center group relative"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <GrLinkPrevious className="text-xl transform transition-transform duration-300 group-hover:-translate-x-3" />
                                    <p>Back</p>
                                    <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </button>

                                {/* Dialog Content */}
                                <div className="w-full flex flex-col gap-10">
                                    <DialogTitle className="text-3xl font-extrabold text-secondary-dark text-center ">
                                        {selectedProject?.title}
                                    </DialogTitle>
                                    <div className="flex md:flex-row flex-col-reverse gap-10 items-center overflow-hidden">
                                        <p className="text-gray-600 text-lg ">
                                            {selectedProject?.longDescription}
                                        </p>
                                        <div className="max-w-xl ">
                                            <img src={selectedProject?.image} alt="" className="lg:min-w-[500px] " />
                                        </div>

                                    </div>
                                    <div className="mt-6 text-right">
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                                        >
                                            Close
                                        </button>
                                    </div>
                                    {/* Close Button */}
                                </div>


                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};