import {FaFacebookSquare, FaHandPointDown, FaLinkedin, FaYoutubeSquare} from "react-icons/fa";
import {FaSquareInstagram, FaSquareXTwitter, FaSquareYoutube} from "react-icons/fa6";
import React from "react";

export function Footer() {
    return (
        <div className=" text-white">
            <div className="container  ">
                <div className="grid md:grid-cols-2 grid-cols-1  py-5 mt-10  border-b-2 ">
                    <div className="py-5 sm:px-4 w-full  flex flex-col items-center  ">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-center mb-3">
                            ThingsToKnow
                        </h1>
                        <p className="text-xl text-center">Let's make a better world with correct information.</p>
                        <p className="flex gap-5 text-xl items-center">Stay touch with us <FaHandPointDown className="text-xl " />  </p>
                        <div className="flex items-center text-3xl gap-2 mt-3 ">
                            <div><FaFacebookSquare className="cursor-pointer" /></div>
                            <div><FaSquareInstagram className="cursor-pointer" /></div>
                            <div><FaLinkedin className="cursor-pointer" /></div>
                            <div><FaSquareXTwitter className="cursor-pointer" /></div>
                            <div><FaSquareYoutube className="cursor-pointer" /></div>

                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center gap-2  py-5 ">
                        <h1 className="font-bold sm:text-2xl text-xl text-center px-5">Get the latest news about our books</h1>

                        <form className="rounded sm:px-8 pt-3 pb-8 ">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                                <div>
                                    <input
                                        className="shadow border rounded  py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                                        id="username" type="email" placeholder="Enter your e-mail in here "/>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button type="button" className="border-2 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-700 duration-300 text-white">SUBSCRIBE</button>
                                </div>


                            </div>
                        </form>
                        <div className="flex items-center  justify-center  ">
                            <label className="md:w-2/3 block text-gray-500 font-bold mx-2 text-center">
                                <input className="mr-2 leading-tight" type="checkbox"/>
                                <span className="text-[16px] text-white">
                                             Send me more details about the promotions those are related to the our content
                                        </span>
                            </label>
                        </div>
                    </div>

                </div>
                <div className="py-3 flex flex-col sm:flex-row justify-between items-center px-5">
                    <div className="px-5 text-center">
                        <h1>Copyright &copy; 2023 ThingsToKnow.All Rights Reserved. </h1>

                    </div>
                    <div  className="flex flex-col sm:flex-row justify-center items-center py-3 gap-5 px-5" >
                        <h1>Terms & Conditions</h1>
                        <h1>Privacy Policy</h1>
                        <h1>Do Not Sell My Information </h1>
                    </div>

                </div>
            </div>
        </div>



    );
}