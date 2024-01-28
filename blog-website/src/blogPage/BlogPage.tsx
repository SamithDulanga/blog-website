import {useEffect, useState} from "react";
import {BlogCards} from "../blogCards/BlogCards.tsx";
import {SideBar} from "../sideBar/SideBar.tsx";
import {Slider} from "../slider/Slider.tsx";
import "../../server.js";
import {data} from "autoprefixer";

export function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        async function getAll(){
            // let url='http://localhost:3000/allDetails';
            let url='/api/v1/blogs';
            const response=await fetch(url);
            const data= await response.json();
            console.log(data,"test");
            setBlogs(data.blogs);
        }
        getAll();
    },[]);

    console.log(blogs);
    return (
        <div className="max-w-7xl mx-auto">

            <div>
                <Slider blogs={blogs}/>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 mb-5 ">

                <BlogCards blogs={blogs}/>
                <div >
                    <SideBar  blogs={blogs}/>
                </div>
            </div>


        </div>
    );
}