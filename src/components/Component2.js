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
            <div className="relative w-full h-screen mt-8">
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website.svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-20 px-30"
                />



            </div>
            <div className="relative w-full h-screen my-8">
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website (1).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-12 px-30"
                />



            </div>
            <div className="relative w-full h-screen ">
                <Image
                    src="/Csqopy of Dark Blue Photographic Conference Event Website (3).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-8 px-30"
                />
            </div>
            <div className="relative w-full h-screen my-8  " id='about'>
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website (2).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-12 px-30"
                />



            </div>

            <div className="relative w-full h-[110vh] " id='about'>
                <Image
                    src="/Copy of Dark Blue Photographic Conference Event Website (3).svg"
                    alt="Logo"
                    fill
                    priority
                    className="object-cover p-12 px-30"
                />



            </div>


            <div className="relative w-full h-[110vh] " id='chairman'>
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
