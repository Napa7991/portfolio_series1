import React, { useState } from "react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    const handleLinkClick = (): void => {
        setIsOpen(false)
    }

    return (
        <>
            <header className="bg-gray-100 text-black shadow-md">
                <div className="header_container flex items-center justify-between px-6 py-4 md:px-10">
                    <div className="logo_section flex items-center gap-2 text-2xl font-bold">
                        <span>Logo</span>
                        <span>Brooklyn</span>
                    </div>
                    <nav className="hidden gap-8 text-lg md:flex">
                        <a href="#home" className="transition-colors hover:text-[#7c3aed] hover:bg-gray-200 rounded-md px-5 py-3 mx-1">Home</a>
                        <a href="#about" className="transition-colors hover:text-[#7c3aed] hover:bg-gray-200 rounded-md px-5 py-3 mx-1">About</a>
                        <a href="#projects" className="transition-colors hover:text-[#7c3aed] hover:bg-gray-200 rounded-md px-5 py-3 mx-1">Projects</a>
                        <a href="#contact" className="transition-colors hover:text-[#7c3aed] hover:bg-gray-200 rounded-md px-5 py-3 mx-1">Contact</a>
                    </nav>
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="cursor-pointer focus:outline-none md:hidden" aria-label="Toggle Navigation" type="button">
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>

                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        )
                        }
                    </button>
                </div>

                {/* #r Mobile dropdown Menu( renders only when isOpen is true on mobile) */}
                {isOpen && (
                    <nav className="flex flex-col gap-4 border-t border-gray-500 bg-gray-700 px-6 py-4 text-lg md:hid">
                        <a href="#home" onClick={handleLinkClick} className='transition-colors hover:text-gray-300'>Home</a>
                        <a href="#about" onClick={handleLinkClick} className='transition-colors hover:text-gray-300'>About</a>
                        <a href="#projects" onClick={handleLinkClick} className='transition-colors hover:text-gray-300'>Projects</a>
                        <a href="#contact" onClick={handleLinkClick} className='transition-colors hover:text-gray-300'>Contact</a>

                    </nav>
                )}
            </header>
        </>
    )
}

export default Header