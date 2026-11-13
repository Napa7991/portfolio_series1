import React,{useState} from "react";

const Header: React.FC = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
 

    
  return (
    <>
    <header className="bg-gray-600 text-white shadow-md">
        <div className="header_container flex items-center justify-between px-6 py-4 md:px-10">
            <div className="logo_section flex items-center gap-2 text-2xl font-bold">
                <span>Logo</span>
                <span>Brooklyn</span>
            </div>
            <nav className="hidden gap-8 text-lg md:flex">
                <a href="#home" className="transition-colors hover:text-gray-300">Home</a>
                <a href="#about" className="transition-colors hover:text-gray-300">About</a>
                <a href="#projects" className="transition-colors hover:text-gray-300">Projects</a>
                <a href="#contact" className="transition-colors hover:text-gray-300">Contact</a>
            </nav>
            <button
            onClick={()=>setIsOpen((prev)=>!prev) }
             className="text-3xl cursor-pointer focus:outline-none md:hidden" aria-label="Toggle Navigation" type="button">
                {isOpen? '✕':'☰'}
            </button>
        </div>
    </header>
    </>
  )
}

export default Header