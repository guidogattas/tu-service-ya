import Info from "./Info"
import Hero from "./Hero"
const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <hr className="h-1 bg-customOrange" />
            <section className="flex flex-col h-screen p-[100px] bg-customWhite text-center gap-4">
                <h3 className="font-bold m-[200px] text-5xl ">¿Buscas TECNICOS ESPECIALIZADOS en plomería en Ciudad de Buenos Aires ?</h3>
                <p className="text-2xl">Todos nuestros trabajos  tienen garantía y están realizados por profesionales matriculados ¡Comuníquese con nuestra empresa SERVICIO HOY en Ciudad de Buenos Aires y le brindaremos soluciones de calidad!</p>

            </section>
        </>
    )
}

export default Home