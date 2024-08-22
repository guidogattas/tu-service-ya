import NavBar from './NavBar.jsx';
import WhatsApp from './WhatsApp.jsx';

const Header = () => {

    return (
        <>
            <section className='flex flex-row items-center justify-around px-4 py-8 bg-customGrey text-customWhite font-inter font-bold text-[24px]'>
                <div>
                    <img className='object-scale-down w-[350px]' src="\images\Logo-tsy-png-white.png" alt="Logo Tu Service Ya" />
                </div>
                <div className='flex items-center gap-3 text-3xl'>
                    <WhatsApp />
                </div>
            </section>
            <NavBar />
        </>
    )
}

export default Header