import {NavLink, Outlet} from "react-router-dom";
import Logo from "/src/assets/Logo.png";
import "./Main.css"
import React, {useState} from "react";

import {FaBars} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import {Footer} from "../footer/Footer.tsx";
export function Main() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems= [
        {name:"Home",navLink:"home"},
        {name: "Service",navLink:"service"},
        {name:"About",navLink:"about"},
        {name:"Contact",navLink:"contact"}
    ]

    function handleClick1(){
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div >
            <header className=" sm:relative fixed w-full z-50   text-white bg-black">
                <nav className="flex sm:justify-around justify-between items-center  py-5 px-5 ">
                    <div className="flex justify-center items-center gap-5">

                        {/*<img className="w-32" src={Logo}/>*/}
                        <h1 className="font-bold sm:text-3xl text-2xl">ThingsTo<span className="text-amber-500">Know</span></h1>
                    </div>
                    <div>
                        <ul className="flex justify-center items-center gap-5">
                            {
                                navItems.map((item,index) => (
                                    <NavLink key={index} to={item.navLink} >
                                        <li className={`hidden sm:flex sm:text-xl font-semibold hover:text-amber-500 hover:cursor-pointer duration-300 block ${item.navLink === "home" ? "active" : ""}`}>
                                            {item.name}
                                        </li>
                                    </NavLink>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="sm:hidden">
                        <button onClick={handleClick1} className="cursor-pointer">
                            {
                                isMenuOpen ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5" />
                            }

                        </button>
                    </div>
                </nav>

                <div className="bg-black">
                    <ul className={`sm:hidden gap-12 text-lg block space-y-4 px-5 py-6 font-semibold bg-white 
                    ${isMenuOpen ? "fixed w-full transition-all ease-out duration-300" : "hidden"} `}>

                        {

                            navItems.map((item,index)=>(
                                <NavLink to={item.navLink} key={index}>
                                <li onClick={handleClick1} className={`duration-300 mb-2 text-black ${item.navLink === "home" ? "active" : ""}`}>{item.name}</li>
                                </NavLink>
                            ))

                        }

                    </ul>
                </div>

            </header>
            <div >
                <Outlet/>
            </div>
            <div className="flex justify-center bg-gray-800 ">
                <Footer/>
            </div>



        </div>
    );
}