const Hero = () => {
    return (
        <div className="h-screen bg-cover" style={{ backgroundImage: "url('/images/bg/serv-grales-2.jpg')" }} >
            <div className="ml-[50vw] p-4 py-[100px] flex flex-col gap-[100px] text-customGrey">
                <h3 className="font-bold text-7xl drop-shadow font-arial">TU SERVICE YA</h3>
                <p className="text-3xl right-32 top-32 drop-shadow">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, provident reiciendis labore dignissimos odit vitae minus explicabo? At qui eligendi, optio aliquam, obcaecati labore quos illo quibusdam quisquam, recusandae accusamus?</p>
                <button className="p-6 text-3xl font-bold text-white bg-customOrange max-w-[300px] place-self-center">Pedir Cotización</button>
            </div>
        </div>
    )
}

export default Hero