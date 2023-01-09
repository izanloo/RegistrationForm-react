import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-[#f6f6f6] h-screen pt-5">
            <div className="flex items-center justify-center h-screen">
                <Link to='/register' className="text-xl bg-rozeVip text-white px-5 py-4 rounded-lg">Register</Link>
            </div>
        </div>
    )
}