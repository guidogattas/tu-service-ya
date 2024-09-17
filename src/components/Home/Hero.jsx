const Hero = () => {
    return (
        <div className="relative">
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
                style={{ backgroundImage: "url('/images/bg/serv-grales-2.jpg')" }}
            ></div>
            <div className="relative z-10 ml-[50vw] p-4 py-[100px] flex flex-col gap-[100px] text-customGrey">
                <h3 className="font-bold text-customGrey drop-shadow text-7xl font-arial">TU SERVICE YA</h3>
                <p className="text-3xl text-black drop-shadow right-32 top-32">
                    Somos una empresa abocada al servicio de reparación y mantenimiento puerta a puerta. Contamos con movilidad propia, realizamos reparaciones en el día, personal calificado para asesorar y realizar informes técnicos.
                </p>
                <a
                    href={`https://web.whatsapp.com/send?phone=1533066712&text=Prueba`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 text-3xl font-bold text-white bg-customOrange max-w-[300px] place-self-center"
                >
                    Pedir Cotización
                </a>
            </div>
        </div>
    )
}

export default Hero;
