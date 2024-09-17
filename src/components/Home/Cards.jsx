import Card from "./Card"

const Cards = () => {
    return (
        <>
            <div className="md:flex md:flex-row md:h-[200px] hidden">
                <Card
                    logo="https://img.icons8.com/ios/50/light-on--v1.png"
                    backgroundColor="bg-black"
                    textColor="text-customWhite"
                    title="SOLUCIONES"
                    description="Atención rápida y efectiva para todos tus problemas"
                />
                <Card
                    logo="https://img.icons8.com/ios/50/megaphone.png"
                    backgroundColor="bg-customGrey"
                    textColor="text-white"
                    title="CONFIABILIDAD"
                    description="Nuestros clientes son nuestra garantía"
                />
                <Card
                    logo="https://img.icons8.com/pastel-glyph/64/pencil--v2.png"
                    backgroundColor="bg-white"
                    textColor="text-customGrey"
                    title="PLANEAMIENTO"
                    description="Con una cuidadosa visita técnica planificamos los pasos a seguir"
                />
                <Card
                    logo="https://img.icons8.com/ios-filled/50/chat.png"
                    backgroundColor="bg-customOrange"
                    textColor="text-cus"
                    title="ASESORAMIENTO"
                    description="Despejamos tus dudas y te recomendamos la mejor solución"
                />
            </div>
        </>
    )
}

export default Cards