import {Banner} from "../banner/Banner.tsx";
import {BlogPage} from "../blogPage/BlogPage.tsx";
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

export function Home() {

    return (
        <div className="flex-col justify-center items-center w-full">

            <div >
                <Outlet />
            </div>
        </div>
    );
}