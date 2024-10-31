import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-customGrey">
            <div className="flex items-center justify-between px-4 py-4">
                <button
                    className="ml-auto text-customWhite focus:outline-none md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                <ul className="flex-row hidden w-full md:flex text-customWhite font-inter">
                    <li className="flex-1">
                        <Link
                            to="/"
                            className="block py-8 font-bold text-center transition duration-300 rounded hover:bg-customOrange"
                        >
                            INICIO
                        </Link>
                    </li>
                    <li className="flex-1">
                        <Link
                            to="/rowa"
                            className="block py-8 font-bold text-center transition duration-300 rounded hover:bg-customOrange"
                        >
                            Reparación de Bombas Rowa
                        </Link>
                    </li>
                    <li className="flex-1">
                        <Link
                            to="/plomeria"
                            className="block py-8 font-bold text-center transition duration-300 rounded hover:bg-customOrange"
                        >
                            Plomería
                        </Link>
                    </li>
                    <li className="flex-1">
                        <Link
                            to="/calefon-termotanque"
                            className="block py-8 font-bold text-center transition duration-300 rounded hover:bg-customOrange"
                        >
                            Calefón / Termotanque
                        </Link>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <ul className="flex flex-col md:hidden text-customWhite font-inter">
                    <li>
                        <Link
                            to="/"
                            className="block py-4 font-bold text-center transition duration-300 rounded hover:bg-customOrange"
                            onClick={() => setIsOpen(false)}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/rowa"
                            className="block py-4 font-bold text-center transition duration-300 rounded hover:bg-customOrange"
                            onClick={() => setIsOpen(false)}
                        >
                            Reparación de Bombas Rowa
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/plomeria"
                            className="block py-4 font-bold text-center transition duration-300 rounded hover:bg-customOrange"
                            onClick={() => setIsOpen(false)}
                        >
                            Plomería
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/calefon-termotanque"
                            className="block py-4 font-bold text-center transition duration-300 rounded hover:bg-customOrange"
                            onClick={() => setIsOpen(false)}
                        >
                            Calefón / Termotanque
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
