import WhatsAppLogo from './icons/WhatsAppLogo.jsx';

const WhatsApp = () => {

    const phoneNumber = '1133066712'
    const encodedMessage = 'Prueba'
    return (
        <>

            <a href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`} target="_blank"
                rel="noopener noreferrer">
                <WhatsAppLogo height="70" fill='white' className="w-16 text-green-500 duration-200 filltransition-colors hover:text-green-700" />
            </a>
            <div>
                <p className='font-bold text-xxl black text- font-inter'>{phoneNumber}</p>
                <p className='text-lg font-inter'>Contactanos por Whatsapp</p>
            </div>
        </>
    )
}

export default WhatsApp