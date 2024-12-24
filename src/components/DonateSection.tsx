import { useState } from 'react'
import { IoIosHeart } from 'react-icons/io'
import DonateModal from './DonateModal'

const DonateSection = () => {
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
    console.log(isDonateModalOpen)
    return (
        <>
            <div className='bg-[url(/public/assets/Donationphoto1.jpg)] bg-cover bg-no-repeat md:h-[600px] relative'>
                <div className="w-full absolute inset-0 
             bg-gradient-to-t from-black/60 via-transparent to-black/80 backdrop-blur-[2.5px]"></div>
                <div className='flex  flex-col gap-4 relative z-20 w-full h-full justify-center items-center text-white'>
                    <h1 className='text-7xl font-black w-full text-center break-words'>Support Reading. <br /> Shape the Future.</h1>
                    <p className='text-xl text-white/80 w-2/3 text-center break-words'>
                        With your generous donation, you’re helping to create opportunities for lifelong learning and community growth, ensuring a brighter tomorrow for all.
                    </p>
                    <button className="btn 
                    relative                  
                    xs:inline-flex      
                             
                     items-center justify-center overflow-hidden font-medium transition-all bg-secondary rounded-2xl hover:bg-white group p-5 focus:ring-1 focus:ring-primary hover:ring-2 hover:ring-primary hover:shadow-md"
                        onClick={() => setIsDonateModalOpen(true)}
                    >
                        <span className="w-full h-48 rounded bg-primary absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0">
                        </span>
                        <span className="relative  flex items-center w-full text-left text-primary  gap-2 transition-colors duration-300 ease-in-out group-hover:text-secondary  text-2xl">
                            <p>Donate now</p>
                            <IoIosHeart className="text-2xl " />
                        </span>
                    </button>
                </div>

            </div>
            {isDonateModalOpen && <DonateModal isOpen={isDonateModalOpen} setIsOpen={setIsDonateModalOpen} />}
        </>
    )
}

export default DonateSection