import { useNavigate } from "react-router-dom";
import { useRating } from "../hooks/useRating.js";

const Hero = () => {
    const navigate = useNavigate();
    const { rating, length } = useRating();

    return (
        <div className="bg-white dark:bg-gray-950">
            <section className="relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-20 py-28 sm:px-23 md:px-25 ">
                    <div className="space-y-5 max-w-4xl mx-auto text-center py-30">
                        <h2 className="text-4xl text-gray-800 dark:text-white font-extrabold mx-auto  sm:text-5xl md:text-6xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-purple-600 to-pink-600 ">Download</span> your favorite music with the best tools
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-balance">
                            Convierte cada momento en una experiencia musical única con nuestras herramientas.
                            Tu soundtrack perfecto, disponible en segundos. Descarga y disfruta.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="justify-center items-center gap-x-3 sm:flex">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2.5 text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                            />
                            <button 
                                onClick={() => navigate("/download")}
                                className="transform transition-transform duration-300 hover:scale-110 flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-sky-400 active:bg-sky-600  rounded-lg sm:mt-0 sm:w-auto cursor-pointer">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                        <div className="flex justify-center items-center gap-x-4 text-gray-500 dark:text-gray-400 text-sm">
                            <div className="flex">
                                {Array(5).fill(0).map((_, idx) => {
                                    const isFullStar = idx < Math.floor(rating);
                                    const isHalfStar = idx === Math.floor(rating) && rating % 1 !== 0;
                                    return (
                                        <svg
                                            key={idx}
                                            className="size-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={isFullStar ? "yellow" : isHalfStar ? "url(#half)" : "currentColor"}
                                            viewBox="0 0 20 20"
                                        >
                                            {isHalfStar && (
                                                <defs>
                                                    <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
                                                        <stop offset="50%" stopColor="yellow" />
                                                        <stop offset="50%" stopColor="currentColor" />
                                                    </linearGradient>
                                                </defs>
                                            )}
                                            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                                        </svg>
                                    );
                                })}
                            </div>
                            <p>
                                <span className="text-gray-700 dark:text-gray-100">{rating.toFixed(1)}</span> by over {length} users
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }} />
            </section>
        </div>
    );
};

export default Hero;
