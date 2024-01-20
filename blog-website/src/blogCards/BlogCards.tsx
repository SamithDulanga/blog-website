import React from "react";
import {Link} from "react-router-dom";
import {GiClick} from "react-icons/gi";
import {FaArrowRightLong} from "react-icons/fa6";
interface BlogCardsProps {
    blogs: any[]
}

export function BlogCards({blogs}: BlogCardsProps) {
    const filteredBlogs=blogs;
    console.log(filteredBlogs);
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mx-3" >
            {
                filteredBlogs.map((blog)=>
                    <div className="shadow-lg rounded-lg px-5 py-5">
                        <img src={blog.image} alt="" className="w-full"/>
                        <h3 className="mt-4 mb-2 font-bold ">{blog.title}</h3>
                        <Link className="mb-2 text-gray-500 font-semibold  flex items-center hover:text-blue-800 cursor-pointer " to={blog.link} target="_blank">Click here to watch  <GiClick className="text-xl"/> </Link>
                        <h3 className="flex items-center gap-3 hover:text-red-500 cursor-pointer text-gray-500">Read More <FaArrowRightLong /></h3>
                    </div>
                )
            }
        </div>
    );
}