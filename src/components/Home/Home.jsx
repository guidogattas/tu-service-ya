import Info from "./Info"
import Hero from "./Hero"
import Cards from "./Cards"
const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <hr className="h-1 bg-customOrange" />
            <section className="flex flex-col ph-[100px] bg-customWhite text-center gap-4">
                <h3 className="font-bold m-[100px] text-5xl container">¿Buscas TECNICOS ESPECIALIZADOS en plomería en Ciudad de Buenos Aires ?</h3>
                <Cards />
                <p className="container flex mt-20 mb-20 text-2xl font-semibold place-self-center text-customGrey">Todos nuestros trabajos  tienen garantía y están realizados por profesionales matriculados ¡Comuníquese con nuestra empresa SERVICIO HOY en Ciudad de Buenos Aires y le brindaremos soluciones de calidad!</p>
            </section>

        </>
    )
}

export default Home