import React, { useState, useEffect } from "react";
import MusicIcon from "../assets/music.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [state, setState] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const navigate = useNavigate();

    const navigation = [
        { title: "About", path: "/About" },
        { title: "Why us", path: "/Why-us" },
        { title: "Contact", path: "/Contact" },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            if (!e.target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const handleNavigation = () => {
        setIsHidden(true);
        navigate("/download"); // Redirige sin recargar
    };

    return (
        <header className="bg-gray-950">
            <nav className={`pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                <div className="gap-x-14 items-center max-w-screen mx-auto px-4 md:flex md:px-8">
                    {/* LOGO */}
                    <div className="flex items-center justify-between py-5">
                        <div className="flex items-center transform transition-transform duration-300 hover:scale-110">
                            <button onClick={() => navigate("/")} className="">
                                <img src={MusicIcon} className="icon-white h-10 w-10" alt="Music Logo" />
                            </button>
                            <span className="text-white ml-2 flex flex-col text-xl">
                                LazDev <span className="text-bold text-transparent bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 ">Music</span>
                            </span>
                        </div>
                        <button className="menu-btn text-gray-400 hover:text-gray-300 md:hidden"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* MENÚ */}
                    <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden md:block'} `}>
                        <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-8 md:space-y-0">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="text-gray-300 hover:text-gray-400">
                                    <button onClick={() => navigate(item.path)} className="block">
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                            <li className="">
                                {!isHidden && (
                                    <button
                                        onClick={handleNavigation}
                                        className="transform  transition-transform duration-300 hover:scale-110 flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-sky-400 active:bg-sky-600  rounded-full md:inline-flex"
                                    >
                                        Get started
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
