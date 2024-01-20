import React from "react";
import {FcLike} from "react-icons/fc";
import "./Contact.css"

export function Contact() {
    return (
        <div className="w-full flex flex-col mt-5 items-center justify-evenly lg:flex-row">
            <div className="p-10 flex flex-col items-center justify-center sm:w-[600px] w-full ">

                <h1 className="regular text-xl w-1/2 font-bold text-center  flex items-center">We value your input! If you have any suggestions or comments about the content on our website, we are eager to hear from you. Your feedback is crucial in helping us enhance our services for the future. Feel free to share your thoughts – we're committed to providing the best possible experience, and your input is invaluable to us! </h1>

            </div>

            <div className="flex items-center justify-center">

        <div className="border-2 p-10 my-10 rounded-lg drop-shadow-2xl shadow-2xl border-gray-400 sm:w-[500px] w-[350px]">

        <form className="max-w-sm mx-auto  ">
            <div className="mb-5">
                <label htmlFor="email" className="text-xl block mb-2  font-medium text-gray-900 dark:text-white">
                    Name</label>
                <input type="text" id="name"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="Enter Your Name" required/>
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="text-xl block mb-2  font-medium text-gray-900 dark:text-white">
                    Email</label>
                <input type="email" id="email"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="Enter Your Email Address" required/>
            </div>

            <div className="mb-5">

            <label htmlFor="message" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                Message</label>
            <textarea id="message" rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Leave a comment...">

            </textarea>
            </div>

            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Send
            </button>
        </form>
        </div>
        </div>
        </div>
    );
}