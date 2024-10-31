import Cards from "../Home/Cards/Cards";
import Info from "../Home/Info";
import Zones from "../common/Zones/Zones";
import { motion } from "framer-motion";

const Rowa = () => {
    return (
        <>
            <div className="relative">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
                    style={{ backgroundImage: "url('/images/bg/11062b_6e2c5579935747d58f0fa1e1f-edit-rowa.jpg')" }}
                ></div>

                <div className="relative z-10 p-4 py-16 flex flex-col gap-12 text-customGrey md:ml-[50vw] md:py-[100px] md:gap-[100px]">
                    <motion.h3
                        className="text-4xl font-bold text-center text-customGrey drop-shadow md:text-7xl font-arial md:text-left"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 50, damping: 10 }}
                    >
                        Bombas ROWA
                    </motion.h3>
                    <motion.p
                        className="text-xl text-center text-black md:text-3xl drop-shadow md:text-left"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
                    >
                        Nos especializamos en bombas ROWA, asegurando el servicio. Contamos con técnicos especializados para resolver cualquier problema de manera rápida y eficiente, brindando la mejor atención.
                    </motion.p>
                    <motion.a
                        href={`https://web.whatsapp.com/send?phone=1533066712&text=Prueba`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 text-xl md:text-3xl font-bold text-white bg-customOrange max-w-[300px] place-self-center md:place-self-start hover:bg-customGrey hover:text-customOrange duration-150 rounded-3xl"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 50, damping: 10 }}
                    >
                        Pedir Cotización
                    </motion.a>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pb-8 bg-gray-100">
                <h3 className="p-8 text-4xl font-bold font ">Nuestra forma de trabajo</h3>
                <p className="p-8 text-2xl font-semibold text-center text-">
                    Realizamos la visita a domicilio para analizar el problema a solucionar.
                    Brindamos un análisis y diagnóstico del problema para resolver de la manera más rápida y eficiente.
                    Se detalla el presupuesto y las tareas de mantenimiento y/o reparación a realizar.
                    Con el Ok del cliente procedemos a la reparación.
                    Como último, realizamos un ajuste y limpieza del equipo para aumentar su durabilidad y asegurar un correcto funcionamiento.
                </p>
                <ul className="flex flex-col gap-6 p-10 text-2xl font-bold text-center">

                    <li>
                        - **Mantenimiento y reparación completa de bombas**: realizamos el diagnóstico y la reparación de bombas ROWA en el día o en un plazo de hasta 24 horas, según el problema.
                    </li>
                    <li>


                        - **Plan Canje**: ofrecemos la opción de cambiar su bomba por una nueva o repararla a nuevo con garantía escrita.
                    </li>
                    <li>
                        - **Garantía de servicio oficial**: brindamos la garantía de servicio directo y especializado para que nuestros clientes se sientan respaldados.
                    </li>

                </ul>
            </div>
            {/* <hr className="h-2 bg-customOrange" /> */}
            <Cards />
            <hr className="h-2 bg-customOrange" />
            <Info />
            <hr className="h-2 bg-customOrange" />
            <Zones />
        </>
    );
}

export default Rowa;
