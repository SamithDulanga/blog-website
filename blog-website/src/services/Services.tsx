import Donation from "../assets/donation.jpg"
export function Services() {
    return (
        <div >
            <div className="px-4 py-20 bg-black w-full">
                <div className="text-white  text-center">
                    <h1 className="lg:text-7xl text-5xl leading-snug font-bold">Services We Hope to Offer </h1>
                    <p className="text-gray-100 lg:w-3/5 mx-auto text-xl mt-3 font-primary">
                        Enjoy the Happiness of Others.
                    </p>
                </div>
            </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 p-5 max-w-7xl mx-auto ">

            <div className="flex flex-col items-center justify-center gap-2  p-5 ">
                <img src={Donation} className="w-[450px] rounded-2xl shadow-2xl drop-shadow-2xl"/>

                <a href="https://www.vecteezy.com/free-vector/book-donation">Image Credit : Book Donation Vectors by Vecteezy</a>

            </div>

            <div className="flex items-center justify-center  p-5">
                <div className="w-5/6 text-center">
                    <h1 className="text-3xl ">
                        "Our mission is to support children who genuinely need assistance in achieving their dreams.
                        We invite you to take a step towards helping these children and experience the authentic joy
                        reflected on their faces. We assure you that witnessing this genuine happiness will inspire you
                        to continue helping these children even more."
                    </h1>

                </div>


            </div>



        </div>
        </div>
    );
}