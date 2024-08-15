import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='bg-customGrey'>
            <ul className='flex flex-row text-customWhite font-inter'>
                <li className='flex-1'>
                    <Link
                        to="/"
                        className='block py-8 font-bold text-center transition duration-700 rounded hover:bg-customOrange'
                    >
                        INICIO
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link
                        to="/reparacion-bombas"
                        className='block py-8 font-bold text-center transition duration-700 rounded hover:bg-customOrange'
                    >
                        Reparación de Bombas Rowa
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link
                        to="/plomeria"
                        className='block py-8 font-bold text-center transition duration-700 rounded hover:bg-customOrange'
                    >
                        Plomería
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link
                        to="/calefon-termotanque"
                        className='block py-8 font-bold text-center transition duration-700 rounded hover:bg-customOrange'
                    >
                        Calefón / Termotanque
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar