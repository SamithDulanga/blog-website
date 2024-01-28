import React, {FormEvent, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css"

export function Contact() {
    const [isSending, setIsSending] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            setIsSending(true);

            emailjs.sendForm('service_7p05p38', 'template_o77t6v8', form.current, 'MICGmiq9tqDzOQTR8')
                .then((result) => {
                    console.log(result.text);
                    if (form.current) {
                        form.current.reset(); // Reset the form
                        setIsSending(false);
                    }
                })
                .catch((error) => {
                    console.log(error.text);
                    setIsSending(false);
                });
        }
    };

    const handleButtonClick = () => {
        // Remove button focus
        const button = document.activeElement as HTMLElement;
        if (button) {
            button.blur();
        }
    };


    return (
        <div>
            <div className="px-4 py-20 bg-black w-full">
            <div className="text-white  text-center">
                <h1 className="lg:text-7xl text-5xl leading-snug font-bold">Contact Form</h1>

                <p className="text-gray-100 lg:w-3/5 mx-auto text-xl mt-3 font-primary">
                    Don't hesitate to put your valuable suggestions, ideas, and complaints here.
                </p>
            </div>
            </div>

        <div className="w-full flex flex-col  items-center justify-evenly lg:flex-row max-w-7xl mx-auto ">
            <div className="p-10 flex flex-col items-center justify-center sm:w-[600px] w-full mt-10 ">

                <h1 className="regular text-xl w-1/2 font-bold text-center  flex items-center">We value your input! If you have any suggestions or comments about the content on our website, we are eager to hear from you. Your feedback is crucial in helping us enhance our services for the future. Feel free to share your thoughts – we're committed to providing the best possible experience, and your input is invaluable to us! </h1>

            </div>

            <div className="flex items-center justify-center">

        <div className="border-2 p-10 m-10 rounded-lg drop-shadow-2xl shadow-2xl border-gray-400 sm:w-[500px] w-[350px]">

        <form className="max-w-sm mx-auto " ref={form} onSubmit={sendEmail}  >
            <div className="mb-5">
                <label className="text-xl block mb-2  font-medium text-gray-900 ">
                    Name</label>
                <input type="text" id="user_name" name="user_name"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="Enter Your Name" required/>
            </div>
            <div className="mb-5">
                <label  className="text-xl block mb-2  font-medium text-gray-900 ">
                    Email</label>
                <input type="email" id="user_email" name="user_email"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="Enter Your Email Address" required/>
            </div>

            <div className="mb-5">

            <label htmlFor="message" className="block mb-2 text-xl font-medium text-gray-900 ">
                Message</label>
            <textarea id="message" rows={4} name="message"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Leave a comment...">

            </textarea>
            </div>

            <button type="submit" value="Send"  onClick={handleButtonClick}  disabled={isSending}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300">
                {isSending ? 'Sending...' : 'Send'}
            </button>
        </form>
        </div>
        </div>
        </div>
        </div>


    );
}