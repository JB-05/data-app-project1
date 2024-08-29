import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src={Single} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className="text-center font-bold text-4xl py-8">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">Single user</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#000300]">Start Trial</button>
                </div>

                <div className="w-full bg-gray-150 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img src={Double} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                    <p className="text-center font-bold text-4xl py-8">$199</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
                        <p className="py-2 border-b mx-8">3 Users Allowed</p>
                        <p className="py-2 border-b mx-8">Send up to 10 GB</p>
                    </div>
                    <button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#00df9a]">Start Trial</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src={Triple} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                    <p className="text-center font-bold text-4xl py-8">$299</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
                        <p className="py-2 border-b mx-8">10 Users Allowed</p>
                        <p className="py-2 border-b mx-8">Send up to 20 GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#000300]">Start Trial</button>
                </div>
            </div>
        </div>
    );
}

export default Cards