const Info = () => {
    return (

        <div className="flex flex-wrap justify-around py-8">
            <div className="flex flex-col items-center">
                <img width="50" height="50" src="https://img.icons8.com/ios/50/bank-card-back-side--v1.png" alt="metodo de pago" />
                <p className="text-xl font-bold">MÉTODOS DE PAGO</p>
                <p>Aceptamos todos los medios de pago</p>
            </div>
            <div className="flex flex-col items-center">
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/checkmark--v1.png" alt="checkmark--v1" />
                <p className="text-xl font-bold">SOLO PROFESIONALES</p>
                <p>Nuestro personal está altamente capacitado para asesorarlo y brindarle las soluciones que necesita.</p>
            </div>
            <div className="flex flex-col items-center">
                <img width="50" height="50" src="https://img.icons8.com/ios/50/present.png" alt="present" />
                <p className="text-xl font-bold">SERVICIO 24/7</p>
                <p>Ofrecemos Servicio de Urgencias las 24 horas.</p>
            </div>
        </div>
    )
}

export default Info