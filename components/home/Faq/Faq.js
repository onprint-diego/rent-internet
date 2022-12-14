import { useState } from 'react'
import chevIco from '/public/icons/chevron.svg'
import {
    Container,
    Inner,
    Title,
    Accordion,
    Item,
    Qcontainer,
    Acontainer,
    Q,
    A,
    ChevContainer,
    Chevron,
} from './Elements'

const Faq = () => {

    const data = [
        {
            id: 1,
            q: '¿Cuántos dispositivos puedo conectar al rúter de bolsillo?',
            a: 'Puedes conectar hasta 5 dispositivos simultáneamente.',
        },
        // {
        //     id: 2,
        //     q: '¿Qué cantidad de datos de alta velocidad están incluidos?',
        //     a: 'Usted obtiene datos de alta velocidad 4G/LTE o 5G* verdaderamente ilimitados! Tanto como quieras, tan rápido como sea posible, ¡siempre!<br> <span style="font-size: .8rem">*posible con Router 5G, dependiendo de su disponibilidad. Tiene un recargo adicional.</span>',
        // },
        {
            id: 2,
            q: '¿Qué cantidad de datos de alta velocidad están incluidos?',
            a: 'Obtiene datos de alta velocidad 4G/LTE.',
        },
        {
            id: 3,
            q: '¿Cuántas horas dura la batería?',
            a: 'Una batería completamente cargada durará aproximadamente 8 horas de uso continuo.',
        },
        {
            id: 4,
            q: '¿Cómo y dónde puedo recibirlo?',
            a: 'El envío se puede efectuar directamente por correo privado en tu hotel o alojamiento en Europa.Tu dispositivo te estará esperando a tu llegada, solo debes completar el formulario de reserva con dirección europea para el envío.',
        },
        {
            id: 100,
            q: '¿Cómo puedo obtener el router wifi de bolsillo?',
            a: 'Podemos enviar el dispositivo a tu hotel o a la dirección en la que te alojes.',
        },
        {
            id: 5,
            q: '¿Cómo lo devuelvo?',
            a: 'Junto con tu dispositivo, recibirás un sobre prefranqueado del correo, para devolver el dispositivo. Sólo debes introducirlo dentro del sobre y despacharlo en la oficina de correo o filial más cercana a tu ubicación.',
        },
        {
            id: 6,
            q: '¿Cuál es el costo del alquiler por día del dispositivo Rent Internet?',
            a: 'El costo del alquiler depende de la duración de la reserva, de las opciones de envío y devolución que hayas escogido y de los accesorios que desees añadir a la reserva. Puedes calcular el precio del alquiler de tu wifi de bolsillo <a href="https://rent-internet.com/product-detail">aquí</a>.',
        },
        {
            id: 7,
            q: '¿Cuál es el alcance de la red wifi?',
            a: 'El alcance de la red wifi, si no hay obstáculos que se interpongan con el dispositivo (como una pared) es de unos 20-30m. Puedes colocar el wifi de bolsillo en tu bolso o mochila y tanto tú como todo tu grupo familiar permanecerán conectados dentro de un radio de 20-30m.',
        },
        {
            id: 8,
            q: '¿Cuáles son los métodos de pago aceptados?',
            a: 'Los pagos se pueden realizar a través de PayPal, transferencia bancaria y de las siguientes tarjetas de crédito, dependiendo de la moneda: MasterCard y Visa.',
        },
        {
            id: 9,
            q: '¿Cómo puedo cargar la batería?',
            a: 'Con el dispositivo, viene incluido un cargador de pared USB y un cable USB. También puedes cargar el router wifi de bolsillo con cualquier cargador USB, o bien agregar un cargador inalámbrico como accesorio en nuestro <a href="https://rent-internet.com/product-detail">formulario de reserva</a>.',
        },
        {
            id: 10,
            q: '¿Qué tipo de dispositivos puedo contectar al router Rent Internet?',
            a: 'El router funciona con cualquier dispositivo que se pueda conectar a través de wifi, como computadoras portátiles,  celulares , tablets o con cualquier otro dispositivo que tenga un adaptador wifi.',
        },
        {
            id: 11,
            q: '¿Puedo cancelar mi reserva? ¿Puedo obtener un reembolso?',
            a: 'Por favor, háganos saber de inmediato si usted tiene que cancelar su pedido. Daremos un reembolso completo si la cancelación es hecha como mínimo  7 días antes de la fecha de inicio de tu reserva. La cancelación en un periodo de menos de 7 días, no será posible.',
        },
        {
            id: 12,
            q: '¿Con cuántos días de anticipación debo realizar una reserva?',
            a: 'Nuestro sitio web requiere al menos 4 días hábiles de antelación para realizar un pedido. Por una cuestión de logística y el tiempo de envío, cuanto antes, mejor.',
        },
        {
            id: 13,
            q: '¿Qué debo hacer si pierdo el sobre devolución?',
            a: 'Contáctenos de inmediato para que le podamos encontrar una solución acorde para el reenvio del dispositivo.',
        },
        {
            id: 14,
            q: '¿Qué sucede si no devuelvo el dispositivo?',
            a: 'Los artículos deben ser devueltos en buen estado de funcionamiento y buena condición física al final del período de alquiler. Los artículos no devueltos incurrirá en los siguientes cargos:<br><ul><li>Wi-Fi portátil + SIM: 100 USD</li><li>Accesorios: 30 USD</li></ul><br>En caso de una devolución tardía después del final del período de alquiler, incurrirá en una multa diaria de 3 USD / día. Consideramos la fecha de devolución, la fecha en que el sobre es sellado por el correo postal y añadimos 2 días de tolerancia adicional.',
        },
        {
            id: 15,
            q: '¿Cómo puedo aumentar la cantidad de datos o solicitar datos extra?',
            a: 'Es muy sencillo, solo debes completar el siguiente <a href="https://rent-internet.com/product-detail">formulario</a> y tus datos serán acreditados automáticamente.',
        },
        {
            id: 16,
            q: '¿Debo abonar un depósito?',
            a: 'Sí, junto con el pago del alquiler de su dispositivo Rent Internet y accesorios, deberá abonar un depósito equivalente a USD 100. El mismo será devuelto inmediatamente, habiendo verificado que tanto el router como sus accesorios han sido devueltos en perfecto estado y funcionamiento.  Ni bien recibamos el Router por correo, y esté  completamente en funcionamiento, le reembolsaremos el depósito correspondiente. En caso de que el router o sus accesorios estén dañados o averiados, y éste no se pueda reparar, estaremos obligados a descontar el monto del depósito, parcial o totalmente.',
        },
        {
            id: 17,
            q: '¿Cuánto cuesta el alquiler de un dispositivo Rent Internet?',
            a: 'El costo mínimo de un dispositivo Rent Internet es de USD 50. Luego el costo será calculado en base a las fechas seleccionadas por usted en el calendario.',
        },
    ]

    const [ isOpenId, setIsOpenId ] = useState(0)

    const handleToggle = (id) => {
        setIsOpenId( id !== isOpenId ? id : null)
    }

    return (
        <Container id="faq-section">
            <Inner>
                <Title>Preguntas frecuentes</Title>
                <Accordion>
                    {
                        data.map(item => {
                            return(
                                <Item key={item.id}>
                                    <Qcontainer onClick={() => handleToggle(item.id)}>
                                        <Q>{item.q}</Q>
                                        <ChevContainer open={isOpenId === item.id}>
                                            <Chevron src={chevIco} fill />
                                        </ChevContainer>
                                    </Qcontainer>
                                    <Acontainer open={isOpenId === item.id}>
                                        <A dangerouslySetInnerHTML={{ __html: item.a }} />
                                    </Acontainer>
                                </Item>
                            )
                        })
                    }
                </Accordion>
            </Inner>
        </Container>
    )
}

export default Faq