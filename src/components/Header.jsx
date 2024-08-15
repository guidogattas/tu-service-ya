import WhatsAppLogo from './icons/WhatsAppLogo.jsx';
import NavBar from './NavBar.jsx';

const Header = () => {
    return (
        <>
            <section className='flex flex-row items-center justify-around px-4 py-8 bg-customGrey text-customWhite font-inter font-bold text-[24px]'>
                <div>
                    <img className='object-scale-down w-[350px]' src="public\images\Logo-tsy-png-white.png" alt="Logo Tu Service Ya" />
                </div>
                <div className='flex items-center text-3xl'>
                    <WhatsAppLogo fill='white' className="w-16 text-green-500 duration-200 filltransition-colors hover:text-green-700" />
                    <div>
                        <p className='text-xl font-bold black text- font-inter'>+57 314 123 4567</p>
                        <p className='text-xs font-inter'>Contactanos por Whatsapp</p>
                    </div>
                </div>
            </section>
            <NavBar />
        </>
    )
}

export default Header