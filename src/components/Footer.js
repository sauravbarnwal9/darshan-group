"use client";
import Image from "next/image";
import React from "react";

const ContactSection = () => {
    return (
        <div className="relative h-[110vh] pt-8 w-full bg-white" id="contact">
            {/* Background Image */}
            <Image
                src="/3.svg" // ✅ put your image here (PNG/JPG is safer than SVG)
                alt="Darshan Group Background"
                fill
                priority
                className="object-cover object-center "
            />

            {/* Dark Overlay */}

            {/* Content Above Image */}
            <div className="relative z-10 flex  flex-col justify-between h-full p-8 md:p-16 text-white">


                {/* Center Title */}
                <div className="flex  space-y-4 md:space-y-6 md:text-left justify-end  mt-[8%] mx-[15%]  h-full ">
                    <div>

                        <div>
                            <h3 className="font-semibold text-4xl">Mailing Address</h3>
                            <p className="text-2xl">
                                Punalur Paper Mills Ltd <br />
                                Punalur Paper Mills P.O. <br />
                                691332. Kerala, India.
                            </p>
                        </div>

                        <div className="my-8">
                            <h3 className="font-semibold text-4xl">Email Address</h3>
                            <p className="text-2xl">info@darshangroup.co</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-4xl">Phone Number</h3>
                            <p className="text-2xl">+91-9496003865</p>
                        </div>
                    </div>

                </div>


            </div>
        </div >
    );
};

export default ContactSection;
