import WhatsApp from './WhatsApp.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-around gap-8 py-10 text-white md:flex-row md:py-20 bg-customGrey'>
            <div className='flex items-center gap-4 text-3xl'>
                <WhatsApp />
            </div>
            <div className='flex flex-row self-center gap-4'>
                <a
                    className='flex gap-2'
                    href="mailto:pizarroguillermo13@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
                    <span className='text-lg'>CONTACTANOS POR EMAIL</span>
                </a>
            </div>
            <div className='self-center text-center'>
                Copyright 2024
            </div>
        </footer>
    );
};

export default Footer;
