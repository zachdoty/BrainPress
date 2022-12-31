import Link from "next/link";
import { FC } from "react";

interface NavBarProps {
    title?: string;
}

const NavBar: FC<NavBarProps> = ({ title }) => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <Link
                    className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
                    href="/"
                >
                    Canvas Viewer {title ? `- ${title}` : ""}
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
