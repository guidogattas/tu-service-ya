import WhatsAppLogo from '../assets/icons/WhatsAppLogo.jsx';

const WhatsApp = () => {
    const phoneNumber = '11 3126 5226';
    const encodedMessage = 'Buenos días, quisiera consultarte por...';

    return (
        <div className='flex items-center p-2 mr-6 space-x-2'>
            <a href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">
                <WhatsAppLogo height="70" fill='white' className="w-12 text-green-500 transition-colors duration-200 md:w-16 hover:text-green-700" />
            </a>
            <div className='flex flex-col'>
                <p className='text-white font-xbold text- md:text-xl font-inter'>{phoneNumber}</p>
                <p className='text-sm text-white md:text-lg font-inter'>Contactanos por WhatsApp</p>
            </div>
        </div>
    );
}

export default WhatsApp;
