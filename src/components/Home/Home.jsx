import Info from "./Info"
const Home = () => {
    return (
        <>
            <div className="h-screen bg-cover" style={{ backgroundImage: "url('public/images/bg/serv-grales-2.jpg')" }} >
                <h3 className="p-4 ml-[50vw] text-7xl drop-shadow text-customGrey">TU SERVICE YA</h3>
                <p className="p-4 ml-[50vw] text-3xl right-32 top-32 drop-shadow text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, provident reiciendis labore dignissimos odit vitae minus explicabo? At qui eligendi, optio aliquam, obcaecati labore quos illo quibusdam quisquam, recusandae accusamus?</p>
            </div>
            {/* <hr className="h-1 bg-customOrange" /> */}

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