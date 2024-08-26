import WhatsAppLogo from './icons/WhatsAppLogo.jsx';
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
            <a
                className="fixed z-50 transition-transform duration-300 bottom-4 right-6 md:bottom-4 md:right-10 md:transform md:animate-bounce md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 hover:scale-110"
                href={`https://web.whatsapp.com/send?phone=1533066712&text=Prueba`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsAppLogo height="70" fill="white" className="w-16 text-green-500 transition-colors duration-200 hover:text-green-700" />
            </a>
        </>
    )
}

export default Header