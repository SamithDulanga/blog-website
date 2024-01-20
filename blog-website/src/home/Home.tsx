import {Banner} from "../banner/Banner.tsx";
import {BlogPage} from "../blogPage/BlogPage.tsx";
import {useEffect, useState} from "react";

export function Home() {

    return (
        <div className="flex-col justify-center items-center w-full">
            {/*<h1>Home</h1>*/}
            <div>
                <Banner/>
            </div>


            <div className="max-w-7xl mx-auto">
                <BlogPage/>
            </div>
        </div>
    );
}