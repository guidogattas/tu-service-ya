import WhatsApp from './WhatsApp.jsx';

const Footer = () => {
    return (
        <footer className='flex flex-row justify-around py-20 text-white bg-customGrey'>
            <div className='flex items-center gap-4 text-3xl'>
                <WhatsApp />
            </div>
            <div className='self-center'>Copyright 2024</div>
        </footer>
    )
}

export default Footer