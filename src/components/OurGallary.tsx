import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import img1 from '../../public/assets/img13.jpeg';
import img2 from "../../public/assets/img32.jpg"
import img3 from "../../public/assets/img34.jpg"
import img4 from "../../public/assets/img35.jpg"
import img5 from "../../public/assets/img36.jpg"
import img6 from "../../public/assets/img41.jpg"
import img7 from "../../public/assets/img37.jpg"
import img8 from "../../public/assets/img38.jpg"
import img9 from "../../public/assets/img39.jpg"
import img10 from "../../public/assets/img40.jpg"
import img11 from "../../public/assets/img56.jpg"

import img12 from "../../public/assets/newImg12.jpeg"
import img13 from "../../public/assets/newImg13.jpeg"
import img14 from "../../public/assets/newImg14.jpeg"
import img15 from "../../public/assets/newImg15.jpeg"
import img16 from "../../public/assets/newImg16.jpeg"
import img17 from "../../public/assets/newImg17.jpeg"
import img18 from "../../public/assets/newImg18.jpeg"
import img19 from "../../public/assets/newImg19.jpeg"
import img20 from "../../public/assets/newImg20.jpeg"
import img21 from "../../public/assets/newImg21.jpeg"
import img22 from "../../public/assets/newImg22.jpeg"
import img23 from "../../public/assets/newImg23.jpeg"
import img24 from "../../public/assets/newImg24.jpeg"
import img25 from "../../public/assets/newImg25.jpg"
import img26 from "../../public/assets/newImg26.jpg"
import img27 from "../../public/assets/newImg27.jpg"
import img28 from "../../public/assets/newImg28.jpg"
import img29 from "../../public/assets/newImg29.jpg"

const galleryImages = [
    // { id: 1, src: img1, alt: 'Image 1', description: '' },
    // { id: 2, src: img2, alt: 'Image 2', description: '' },
    // { id: 3, src: img3, alt: 'Image 3', description: '' },
    // { id: 4, src: img4, alt: 'Image 4', description: '' },
    // { id: 5, src: img5, alt: 'Image 5', description: '' },
    // { id: 6, src: img6, alt: 'Image 6', description: '' },
    // { id: 7, src: img7, alt: 'Image 7', description: '' },
    // { id: 8, src: img8, alt: 'Image 8', description: '' },
    // { id: 9, src: img9, alt: 'Image 9', description: '' },
    // { id: 10, src: img11, alt: 'Image 10', description: '' },
    // { id: 11, src: img10, alt: 'Image 10', description: '' },

    { id: 12, src: img12, alt: 'Image 12', description: '' },
    { id: 14, src: img14, alt: 'Image 14', description: '' },
    { id: 15, src: img15, alt: 'Image 15', description: '' },
    { id: 13, src: img13, alt: 'Image 13', description: '' },
    { id: 16, src: img16, alt: 'Image 16', description: '' },
    { id: 17, src: img17, alt: 'Image 17', description: '' },
    { id: 18, src: img18, alt: 'Image 18', description: '' },
    { id: 19, src: img19, alt: 'Image 19', description: '' },
    { id: 20, src: img20, alt: 'Image 20', description: '' },
    { id: 21, src: img21, alt: 'Image 21', description: '' },
    { id: 22, src: img22, alt: 'Image 22', description: '' },
    { id: 23, src: img23, alt: 'Image 23', description: '' },
    { id: 24, src: img24, alt: 'Image 24', description: '' },
    { id: 25, src: img25, alt: 'Image 25', description: '' },
    { id: 26, src: img26, alt: 'Image 26', description: '' },
    { id: 28, src: img27, alt: 'Image 27', description: '' },
    { id: 27, src: img28, alt: 'Image 28', description: '' },
    { id: 29, src: img29, alt: 'Image 29', description: '' },
];

const OurGallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openModal = (index: number) => setSelectedImageIndex(index);
    const closeModal = () => setSelectedImageIndex(null);

    const goToNext = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % galleryImages.length);
    };

    const goToPrevious = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex(
            (prevIndex) => (prevIndex! - 1 + galleryImages.length) % galleryImages.length
        );
    };

    // Fade-in animation for each image
    const GalleryImage = ({ image, index }: { image: any, index: number }) => {
        const { ref, inView } = useInView({
            triggerOnce: true, // Trigger animation only once
            threshold: 0.1, // Trigger when 10% of the element is in the viewport
        });

        // Apply fade-in effect based on inView
        const fadeInStyle = useSpring({
            opacity: inView ? 1 : 0, // Fade in when in view
            config: { tension: 200, friction: 30 },
        });

        return (
            <animated.div
                ref={ref} // Attach the observer to the grid item
                className="relative group cursor-pointer"
                style={fadeInStyle} // Apply animation to each item
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover rounded-lg transition-transform transform group-hover:scale-105"
                    onClick={() => openModal(index)}
                />
            </animated.div>
        );
    };

    return (
        <div id="our-gallery" className="bg-gray-50 p-8">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Gallery</h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1">
                {galleryImages.map((image, index) => (
                    <GalleryImage key={image.id} image={image} index={index} />
                ))}
            </div>

            {/* Full-Screen Modal */}
            <Transition
                show={selectedImageIndex !== null}
                as="div"
                className="fixed inset-0 bg-black bg-opacity-90 z-[999999999] flex items-center justify-center"
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {selectedImageIndex !== null && (
                    <>
                        <img
                            src={galleryImages[selectedImageIndex].src}
                            alt={galleryImages[selectedImageIndex].alt}
                            className="max-w-full max-h-full object-contain"
                        />
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-5 right-5 text-white bg-gray-600 bg-opacity-75 p-2 rounded-full hover:bg-opacity-100"
                        >
                            <IoMdClose />
                        </button>

                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-opacity-0 hover:bg-opacity-75 bg-gray-600 text-white"
                        >
                            <GrPrevious />
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-opacity-0 hover:bg-opacity-75 bg-gray-600 text-white"
                        >
                            <GrNext />
                        </button>
                        <div className="absolute bottom-4 left-4 text-gray-300 text-sm bg-black bg-opacity-50 px-3 py-2 rounded">
                            {galleryImages[selectedImageIndex].description}
                        </div>
                    </>
                )}
            </Transition>
        </div>
    );
};

export default OurGallery;
