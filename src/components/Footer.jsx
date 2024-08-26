import WhatsApp from './WhatsApp.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className='flex flex-row items-start justify-around py-20 text-white align-middle bg-customGrey'>
            <div className='flex items-center gap-4 text-3xl'>
                <WhatsApp />
            </div>
            <div className='flex flex-row self-center gap-4'>
                <a
                    className='flex gap-2'
                    href="mailto:guido.gattas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
                    <span className='text-lg'>CONTACTANOS POR EMAIL</span>
                </a>
            </div>

            <div className='self-center'>Copyright 2024</div>
        </footer>
    )
}

export default Footer