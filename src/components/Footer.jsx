import WhatsAppLogo from './icons/WhatsAppLogo.jsx';

const Footer = () => {
    return (
        <footer className='flex flex-row justify-around py-20 text-white bg-customGrey'>
            <div className='flex items-center text-3xl'>
                <WhatsAppLogo fill='white' className="w-16 text-green-500 duration-200 filltransition-colors hover:text-green-700" />
                <div className='ml-4'>
                    <p className='text-xl font-bold black'>+57 314 123 4567</p>
                    <p className='text-xs '>Contactanos por Whatsapp</p>
                </div>
            </div>
            <div className='self-center'>Copyright 2024</div>
        </footer>
    )
}

export default Footer