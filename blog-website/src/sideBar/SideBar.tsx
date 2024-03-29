import {FaArrowRightLong} from "react-icons/fa6";
import React from "react";
import {NavLink} from "react-router-dom";

interface SideBarProps {
    blogs: any[]
}

export function SideBar({blogs}: SideBarProps) {
    // const filteredBlogs=blogs;
    return (
        <div>
            <h1 className="text-2xl font-semibold px-5">Latest Blogs</h1>
            {
                blogs.map((blogs)=>
                    <div key={blogs.id} className="text-left lg:w-[300px] border-b-2 my-5 px-5 border-spacing-2">
                        <h3  className="font-medium mb-2">{blogs.title}</h3>
                        <NavLink to={`blog/${blogs.id}`} className="flex items-center gap-3 hover:text-red-500 cursor-pointer text-gray-500">Read more <FaArrowRightLong /></NavLink>
                    </div>
                )
            }
        </div>
    );
}