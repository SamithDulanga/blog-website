import {useEffect, useState} from "react";
import {BlogCards} from "../blogCards/BlogCards.tsx";
import {SideBar} from "../sideBar/SideBar.tsx";
import {Slider} from "../slider/Slider.tsx";

export function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        async function getAll(){
            let url='http://localhost:3000/allDetails';
            const response=await fetch(url);
            const data= await response.json();
            console.log(data);
            setBlogs(data);
        }
        getAll();
    },[])
    return (
        <div>

            <div>
                <Slider blogs={blogs}/>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 mb-5 ">

                <BlogCards blogs={blogs}/>
                <div >
                    <SideBar  blogs={blogs}/>
                </div>
            </div>
            {/*<div>Page Category</div>*/}

        </div>
    );
}