import React, { useContext } from 'react';
import about1 from '../../assets/images/about/about-1.png'
import about2 from '../../assets/images/about/about-2.png'
import about3 from '../../assets/images/about/about-3.png'
import about4 from '../../assets/images/about/about-4.png'
import { BiCheckSquare } from "react-icons/bi";
import { AuthContex } from '../../Component/Providers/Authprovider';

const About = () => {
    const { theme } = useContext(AuthContex)
    return (
        <div className={`px-4 xl:px-[140px] 2xl:px-[240px] mode ${theme} my-14 md:my-24`}>
            <div className='md:flex items-center gap-12'>
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold'>WELCOME TO <span className='text-[#ef1721]'>Asetta Auto's</span></h1>
                        <hr className='w-24 mt-2 border-[#ef1721] border' />
                        <hr className='w-20 mt-1 border-[#ef1721] border' />
                    </div>
                    <p className={`mt-8 text-[#666] mode ${theme}`}>
                        Asetta Auto's is a clean and modern design which is useful for Car Dealer, Auto Dealer, Automotive WordPress website and any other automotive dealership business, who sell, buy or lease vehicles via website. Its stunning beauty, fashionable clean look and proper execution.
                    </p>
                    <div className={`md:flex items-center gap-20 mt-8 mode ${theme}`}>
                        <div>
                            <h4 className='font-semibold mb-4'>Running Costs</h4>
                            <div className="mt-1">
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600  mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>18″ 5-Spoke Light-Alloy Wheels</span>
                                </h6>
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600 mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>4-Wheel Disc Brakes</span>
                                </h6>
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600 mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>ABS brakes</span>
                                </h6>
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600 mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>AM/FM radio: SiriusXM</span>
                                </h6>
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600 mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>Adaptive suspension</span>
                                </h6>
					        </div>
                        </div>
                        <div>
                            <h4 className='font-semibold mb-4'>Performance</h4>
                            <div className="mt-1">
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600  mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>Auto tilt-away steering wheel</span>
                                </h6>
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600 mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>Auto-dimming Rear-View mirror</span>
                                </h6>
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600 mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>Auto-dimming door mirrors</span>
                                </h6>
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600 mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>Auto-leveling suspension</span>
                                </h6>
                                <h6 className="flex">
                                    {" "}
                                    <span className="text-red-600 mt-1 me-3">
                                        <BiCheckSquare />
                                    </span>{" "}
                                    <span className={`text-[#666] mode ${theme}`}>Automatic temperature control</span>
                                </h6>
					        </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <img src={about1} className='rounded-lg shadow-xl' />
                    <img src={about2} className='rounded-lg shadow-xl' />
                    <img src={about3} className='rounded-lg shadow-xl' />
                    <img src={about4} className='rounded-lg shadow-xl' />
                </div>
            </div>
        </div>
    );
};

export default About;