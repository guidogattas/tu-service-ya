import Cards from "../Home/Cards/Cards";
import Info from "../Home/Info";
import Zones from "../common/Zones/Zones";
import { motion } from "framer-motion";

const Plomeria = () => {
    return (
        <>
            <div className="relative">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
                    style={{ backgroundImage: "url('/images/bg/side-view-man-working-as-plumber.webp')" }}
                ></div>

                <div className="relative z-10 p-4 py-16 flex flex-col gap-12 text-customGrey md:ml-[2vw] md:mr-[50vw] md:py-[100px] md:gap-[100px] md:items-start items-center">
                    <motion.h3
                        className="text-4xl font-bold text-center md:text-left text-customGrey drop-shadow md:text-7xl font-arial"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 50, damping: 10 }}
                    >
                        Plomería General
                    </motion.h3>
                    <motion.p
                        className="text-xl text-center text-black md:text-left md:text-3xl drop-shadow"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
                    >
                        Soluciones rápidas y garantizadas para su hogar. Nuestro equipo de técnicos especializados está listo para brindarle la mejor atención en reparaciones y mantenimiento, con un servicio confiable y de calidad.
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
                <h3 className="p-8 text-4xl font-bold">Nuestra forma de trabajo</h3>
                <p className="p-8 text-2xl font-semibold text-center">
                    Realizamos una visita a su hogar para evaluar el estado de la grifería y los sistemas de plomería. Nuestro equipo especializado se encargará de ofrecer un análisis detallado y recomendaciones personalizadas para cada situación. A continuación, le proporcionamos un presupuesto claro y preciso para los servicios necesarios. Una vez que contemos con la aprobación del cliente, procederemos a llevar a cabo las reparaciones y mantenimientos necesarios, asegurando un trabajo de calidad y eficiencia.
                </p>

                <div className="flex flex-col gap-10 p-10 text-2xl font-semibold text-left md:flex-row text-customGrey">
                    {/* Sección Plomería General */}
                    <div className="w-full p-8 bg-white rounded-lg shadow-md md:w-1/2">
                        <h4 className="mb-6 text-3xl font-bold">Plomería General</h4>
                        <ul className="pl-5 space-y-4 list-disc">
                            <li><strong>Cambio y mantenimiento de grifería:</strong> instalación de nuevas griferías y mantenimiento preventivo.</li>
                            <li><strong>Reparación de pérdidas de agua:</strong> solución de fugas en cañerías y juntas.</li>
                            <li>
                                <strong>Armado de cañerías nuevas:</strong> diseño e instalación de sistemas de cañerías para nuevos proyectos.
                            </li>
                            <br /><span className="text-lg font-bold text-red-600">Nota: no realizamos destapaciones.</span>
                        </ul>
                    </div>

                    {/* Sección Sanitarios y Baños */}
                    <div className="w-full p-8 bg-white rounded-lg shadow-md md:w-1/2">
                        <h4 className="mb-6 text-3xl font-bold">Sanitarios y Baños</h4>
                        <ul className="pl-5 space-y-4 list-disc">
                            <li><strong>Reparación y mantenimiento de inodoros y bidets:</strong> ajuste y cambio de flexibles y piezas defectuosas.</li>
                            <li><strong>Cambio y reparación de mochilas de baño:</strong> revisión completa de las mochilas, incluyendo flotantes y mecanismos internos.</li>
                            <li><strong>Instalación y reparación de cuadros de duchas:</strong> adaptado a cualquier tipo de instalación.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Cards />
            <hr className="h-2 bg-customOrange" />
            <Info />
            <hr className="h-2 bg-customOrange" />
            <Zones />
        </>
    );
};

export default Plomeria;
