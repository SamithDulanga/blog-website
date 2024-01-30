import "./NotFound.css";
import {Link} from "react-router-dom";
export function NotFound() {
    return (
        <div className="flex  justify-center flex-col
        items-center py-36">
            <h1 className="text-8xl font-bold text-amber-500 ">404</h1>
            <h2 className="text-3xl font-bold text-amber-500">NOT FOUND</h2>
            <h2 className="text-3xl font-bold text-amber-500">There was no such a content upto now.</h2>
            <div className="p-5 font-bold">Navigate to
                <Link className="p-2 mx-2 cursor-pointer
                hover:bg-red-700 hover:text-white duration-300
                bg-red-500 rounded"
                      to="/thingstoknow">
                    Home Page
                </Link>
            </div>
        </div>
    );
}