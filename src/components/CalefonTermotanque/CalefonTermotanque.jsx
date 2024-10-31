import Cards from "../Home/Cards/Cards";
import Info from "../Home/Info";
import Zones from "../common/Zones/Zones";
import { motion } from "framer-motion";

const CalefonTermotanque = () => {
  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-60"
          style={{ backgroundImage: "url('/images/bg/iStock-1329466922-1920w.webp')" }}
        ></div>

        <div className="relative z-10 p-4 py-16 flex flex-col gap-12 text-customGrey md:ml-[2vw] md:mr-[50vw] md:py-[100px] md:gap-[100px] md:items-start items-center">
          <motion.h3
            className="text-4xl font-bold text-center md:text-left text-customGrey drop-shadow md:text-7xl font-arial"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          >
            Calefón / Termotanque
          </motion.h3>
          <motion.p
            className="text-xl text-center text-black md:text-left md:text-3xl drop-shadow"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
          >
            Nuestro equipo especializado asegura un servicio rápido y confiable para instalación, mantenimiento y reparación de calefones y termotanques, brindando siempre la mejor atención y resultados garantizados.
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
        <h3 className="p-8 text-4xl font-bold text-center">Nuestra forma de trabajo</h3>
        <p className="p-8 text-2xl font-semibold text-center">
          Realizamos la visita a domicilio para analizar el problema a solucionar.
          Brindamos un análisis y diagnóstico del problema para resolver de la manera más rápida y eficiente.
          Se detalla el presupuesto y las tareas de mantenimiento y/o reparación a realizar.
          Con el consentimiento del cliente procedemos a la reparación.
          Como último, realizamos un ajuste y limpieza del equipo para aumentar su durabilidad y asegurar un correcto funcionamiento.
        </p>

        <h4 className="mx-6 my-10 text-3xl font-bold text-center">Instalación de Termotanques y Calefones</h4>
        <p className="mx-6 mb-4 text-2xl">Ofrecemos instalación de termotanques y calefones de manera profesional.</p>

        <div className="flex gap-10 p-10 text-2xl font-semibold text-left ustify-center text-customGrey">
          {/* Sección Calefón */}
          <div className="w-full p-8 bg-white rounded-lg shadow-md md:w-1/2">
            <h4 className="mb-6 text-3xl font-bold">Calefón</h4>
            <ul className="pl-5 space-y-4 list-disc">
              <li><strong>Soldadura de serpentina:</strong> realizamos trabajos de soldadura especializados para el correcto funcionamiento del calefón.</li>
              <li><strong>Mantenimiento completo:</strong> diagnóstico, limpieza y ajustes para prolongar la vida útil del equipo.</li>
            </ul>
          </div>

          {/* Sección Termotanque */}
          <div className="w-full p-8 bg-white rounded-lg shadow-md md:w-1/2">
            <h4 className="mb-6 text-3xl font-bold">Termotanque</h4>
            <ul className="pl-5 space-y-4 list-disc">
              <li><strong>Service completo:</strong> incluye limpieza y revisión exhaustiva para asegurar un funcionamiento óptimo.</li>
              <li><strong>Importante:</strong> no realizamos reparaciones de pinchaduras en el termotanque, ya que no tienen solución duradera.</li>
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

export default CalefonTermotanque;
