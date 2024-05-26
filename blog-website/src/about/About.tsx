import Logo from "../assets/Logo.png";
import {Link} from "react-router-dom";
export function About() {
    return (
        <div >
            <div className="px-4 py-20 bg-black w-full">
                <div className="text-white  text-center">
                    <h1 className="lg:text-7xl text-5xl leading-snug font-bold">About Us</h1>
                    <p className="text-gray-100 lg:w-3/5 w-full mx-auto text-xl mt-3 font-primary">
                        What We are Going to Offer.
                    </p>
                </div>
            </div>
        <div className="px-4 py-10  w-full">

                {/*<h1 className="lg:text-7xl text-5xl leading-snug font-bold text-center">About Us</h1>*/}
                <div className="text-gray-100 lg:w-3/5  mx-auto text-xl font-primary border rounded-2xl p-10 bg-emerald-700 flex flex-col  ">
                   <div> 🚀 <span className="font-bold text-amber-500">ThingsToKnow</span> is your passport to a world of curated insights,
                    helping you navigate the complexities of travel destinations,
                    choose the finest products, and delve into the captivating stories behind the
                    world's most famous landmarks. Our articles provide in-depth details on
                    sought-after destinations, honest product reviews, and a glimpse into the rich
                    histories and architectural wonders that define our world. Join us on a journey of
                    discovery as we uncover hidden gems, offer practical tips, and showcase the extraordinary
                    in travel, products, and global icons.
                   </div>
                    <div className="my-5 flex flex-col justify-center items-center border-2 p-5 gap-2 " >
                        <div className="  flex items-center justify-center">
                            <img src={Logo} alt="logo" className="w-60 drop-shadow-2xl hover:scale-110 duration-300"/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl text-center font-bold border-2 p-3 mb-2 rounded-2xl hover:scale-110 duration-300 ">Things To Know</h1>
                            <h1 className="text-center">Click on below link</h1>
                            <Link to="https://www.youtube.com/@thingstoknow5847" className="text-sm hover:scale-110 duration-300 px-5 flex items-center underline-offset-2 underline" target="_blank">thingstoknow</Link>
                            <h1 className="text-center flex flex-row text-[16px]">Don't forget to subscribe our channel</h1>
                        </div>



                    </div>
                </div>



        </div>
        </div>
    );
}