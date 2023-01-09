import { Link } from "react-router-dom";
import Images from "../assest";

export default function Notfound() {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <img src={Images.notFound} alt="page not found" />
            <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-red-600">page not found</h1>
            <Link to='/'>Home Page</Link>
        </div>
    )
}