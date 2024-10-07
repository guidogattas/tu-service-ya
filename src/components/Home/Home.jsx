import Info from "./Info";
import Hero from "./Hero";
import Cards from "./Cards";

const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <hr className="h-1 bg-customOrange" />

            <section className="flex flex-col gap-4 px-4 py-12 text-center bg-customWhite">
                <h3 className="font-bold mx-8 md:mx-[100px] text-3xl md:text-5xl mb-8 md:mb-12">
                    ¿Buscas TÉCNICOS ESPECIALIZADOS en plomería en Ciudad de Buenos Aires?
                </h3>

                <Cards />

                <p className="container mx-auto mt-12 mb-12 text-xl font-semibold md:mt-20 md:mb-20 md:text-2xl text-customGrey">
                    Todos nuestros trabajos tienen garantía y están realizados por profesionales matriculados. ¡Comuníquese con nuestra empresa SERVICIO HOY en Ciudad de Buenos Aires y le brindaremos soluciones de calidad!
                </p>
            </section>
        </>
    );
};

export default Home;

