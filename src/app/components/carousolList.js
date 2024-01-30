'use client';

import Image from 'next/image';


import rightArrow from "../../../public/rightArrow.svg";
import leftArrow from "../../../public/leftArrow.svg";

import { useState, useRef } from "react";
// import wordIcon from "./wordIcon";

const BreakpointSlides = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 530 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 530, min: 0 },
        items: 1,
    },
};

export default function carousolList(props) {

    
    const cardInfo = props.cardInfo;
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        const container = containerRef.current;
    
        if (container) {
            const scrollAmount = 150; // Adjust this value based on your desired scroll amount
            const maxScroll = container.scrollWidth - container.clientWidth;
    
            let newScrollPosition =
                direction === 'right'
                    ? scrollPosition + scrollAmount
                    : scrollPosition - scrollAmount;
    
            // Ensure the new scroll position is within the valid range
            newScrollPosition = Math.max(0, Math.min(maxScroll, newScrollPosition));
    
            container.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
    
            setScrollPosition(newScrollPosition);
        }
    };

    return (
        <div className="my-10 md:px-40 sm:px-20 px-10 ">
            <h1 className="font-bold text-black text-3xl">
                Convert to PDF
            </h1>
            <div className="relative">
                <div className="w-full overflow-x-scroll no-scrollbar relative" ref={containerRef}>
                    <div className="gap-5 inline-flex" >
                        {
                            cardInfo.map((card, index) => {
                                return (
                                    <div className=" lg:w-[17rem] md:w-[15rem] sm:w-[12rem] w-[10rem] mx-2 my-5 p-8 border-stone-200 border-[1px] hover:scale-[102%] hover:shadow-md flex flex-col rounded-2xl duration-150 ease">
                                        {/* <div className="flex flex-col gap-y-2"> */}

                                        <Image
                                            priority
                                            src={card.icon}
                                            alt="Follow us on Twitter"
                                        />
                                        <div className="text-black font-bold text-lg"> {card.title} </div>
                                        <div className="text-black font-thin text-sm"> {card.description}</div>
                                        {/* </div> */}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                
                {scrollPosition !== (containerRef.current?.scrollWidth - containerRef.current?.clientWidth) && (
                    <button className="absolute top-[35%] -right-4  bg-[rgb(255,255,255,0.5)] rounded-full backdrop-blur-sm scale-85 sm:scale-100" onClick={() => handleScroll('right')}>
                        <Image
                            priority
                            src={rightArrow}
                            height={50}
                            alt="Follow us on Twitter"
                        />
                    </button>
                )}

                {scrollPosition !== 0 && (
                    <button className="absolute top-[35%] -left-4  bg-[rgb(255,255,255,0.5)] rounded-full backdrop-blur-sm scale-85 sm:scale-100" onClick={() => handleScroll('left')}>
                        <Image
                            priority
                            src={leftArrow}
                            height={50}
                            alt="Follow us on Twitter"
                        />
                    </button>
                )}
            </div>
        </div>
    );
}
