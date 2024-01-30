import React, { useState, useEffect } from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {FaClock} from "react-icons/fa";
import {GiClick} from "react-icons/gi";
import {SideBar} from "../sideBar/SideBar.tsx";
import {NotFound} from "../not-found/NotFound.tsx";

const baseUrl="/api/v1/blogs";
interface Blog {
    id: string;
    title: string;
    link: string;
    image:string;
    reading_time:string;
    content:Abc[];
    // Add other properties if present in your blog object
}

interface Abc {
    id:string;
    title:string;
    description:string;
}

export function SingleBlog() {
    const { id } = useParams<{ id: string }>();

    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        async function getBlog() {
            let url = `${baseUrl}/${id}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data,"samith");

                // Check if data is an object before setting state
                if (typeof data === 'object' && data !== null) {
                    setBlog(data.blogs);
                } else {
                    console.error('API response is not a blog object:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getBlog();
    }, [id]);

    return (
        <div>
        <div className="px-4 py-20 bg-black w-full">
            <div className="text-white  text-center">
                <h1 className="lg:text-7xl text-5xl leading-snug font-bold">Blog Page</h1>
                <p className="text-gray-100 lg:w-3/5 mx-auto text-xl mt-3 font-primary">
                    Accurate information in an understandable manner
                </p>

            </div>

        </div>
        <div className="max-w-7xl mx-auto m-10 sm:mt-0 mt-[90px] ">

            {blog ? (
                <div className="w-3/4 mx-auto m-10">
                    <div>
                        <img src={blog.image} alt="content-image" className="w-full mx-auto rounded-lg drop-shadow-2xl shadow-2xl"/>

                    </div>
                    {/* Render individual blog elements here */}
                    <h1 className="text-3xl font-bold mt-8 mb-4 ">{blog.title}</h1>
                    <p><FaClock className="inline-flex items-center mr-2" />{blog.reading_time}</p>
                    <NavLink className="mb-4  font-semibold flex items-center hover:text-blue-800 cursor-pointer" to={blog.link} target="_blank">
                        Click here to watch  <GiClick className="text-xl"/>
                    </NavLink>


                    {
                        blog.content.map((content)=>
                        <div key={content.id} className="mb-5">
                            <p className="text-xl font-bold">{content.id}.{content.title}</p>

                            <p>{content.description}</p>



                        </div>
                        )
                    }



                    {/* Add more elements based on your blog structure */}
                </div>

            ) : (

                <NotFound/>
            )}

        </div>
        </div>
    );
}
