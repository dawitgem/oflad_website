import { Dispatch, SetStateAction } from 'react'
import { IoIosHeart } from 'react-icons/io'

const DonateButton = ({ setIsDonateModalOpen, style }: { setIsDonateModalOpen: Dispatch<SetStateAction<boolean>>, style?: string }) => {

    return (

        <button className={`btn 
                    relative  
                    items-center justify-center overflow-hidden font-medium transition-all bg-secondary rounded-xl hover:bg-white group p-3 focus:ring-1 focus:ring-primary hover:ring-2 hover:ring-primary hover:shadow-md ${style}`}
            onClick={() => setIsDonateModalOpen(true)}
        >
            <span className="w-full h-48 rounded bg-primary absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative  flex items-center w-full text-left text-primary  gap-2 transition-colors duration-300 ease-in-out group-hover:text-secondary  text-lg">
                <p>Donate </p>
                <IoIosHeart className="text-xl " />
            </span>
        </button>
    )
}

export default DonateButton