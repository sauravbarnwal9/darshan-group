"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ContactSection from './Footer';

const Component2 = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Only access window in client
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>
            <div className="relative w-full md:h-screen h-[180px] md:mt-8 ">
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website.svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-2 md:p-20 md:px-30"
                />



            </div>
            <div className="relative w-full md:h-screen h-[180px] md:my-8">
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website (1).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-2 md:p-12 md:px-30"
                />



            </div>
            <div className="relative w-full md:h-screen h-[200px]  ">
                <Image
                    src="/Csqopy of Dark Blue Photographic Conference Event Website (3).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-2 md:p-8 md:px-30"
                />
            </div>
            <div className="relative w-full md:h-screen h-[200px] md:my-8  " id='about'>
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website (2).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-2 md:p-12 md:px-30"
                />



            </div>

            <div className="relative w-full md:h-[110vh]  h-[200px]" id='about'>
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website (3).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-2 md:p-12 md:px-30"
                />



            </div>


            <div className="relative w-full md:h-[110vh] h-[200px]  " id='chairman'>
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website (9).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover "
                />

            </div>
        </>
    );
};

export default Component2;
