"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="relative h-[110vh] pt-8 w-full bg-white">
            {/* Background Image */}
            <Image
                src="/Copy of Dark Blue Photographic Conference Event Website (7).svg" // ✅ put your image here (PNG/JPG is safer than SVG)
                alt="Darshan Group Background"
                fill
                priority
                className="object-cover object-center "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content Above Image */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-16 text-white">
                {/* Logo + About Us button */}
                <div className="w-full flex justify-between items-start">


                </div>

                {/* Center Title */}
                <div className="flex  space-y-4 md:space-y-6 md:text-left justify-end">
                    {/* <a href="#about" className="px-6 py-4   mt-[30%] " >
                        <button className="px-6 py-4 border-2 border-teal-600 bg-teal-600 cursor-pointer w-[200px] rounded-md font-bold hover:bg-transparent transition">  ABOUT US</button>
                    </a> */}
                </div>

                {/* Bottom Buttons */}
                <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-4 pt-8 md:space-y-0">
                    <a href="#contact" className="px-8 py-4 border-2 border-teal-600 bg-teal-600 cursor-pointer font-bold rounded-md mt-4 text-white hover:bg-transparent transition">
                        CONTACT US
                    </a>
                    <a href="#chairman" >
                        <button className="px-14 py-3  border-2 border-teal-600 bg-teal-600 cursor-pointer font-bold rounded-md text-white hover:bg-transparent transition">  CHAIRMAN&apos;S CORNER</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
