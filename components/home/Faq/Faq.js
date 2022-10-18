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
        {
            id: 2,
            q: '¿Qué cantidad de datos de alta velocidad están incluidos?',
            a: 'Usted obtiene datos de alta velocidad 4G/LTE o 5G* verdaderamente ilimitados! Tanto como quieras, tan rápido como sea posible, ¡siempre!<br> <span style="font-size: .8rem">*posible con Router 5G, dependiendo de su disponibilidad. Tiene un recargo adicional.</span>',
        },
        {
            id: 3,
            q: '¿Cuántas horas dura la batería?',
            a: 'Una batería completamente cargada durará unas 8 horas de uso continuo',
        },
        {
            id: 4,
            q: '¿Cómo puedo obtener el rúter wifi de bolsillo?',
            a: 'Podemos enviar el dispositivo a tu hotel, apartamento o a la dirección en la que te alojes.',
        },
        {
            id: 5,
            q: '¿Cómo puedo devolver el rúter wifi de bolsillo?',
            a: 'Puedes obtener un sobre con devolución de prepago que podrás dejar en cualquier buzón u oficina postal. PONGA TODO EN EL SOBRE PREFRANQUEADO QUE LE ENVIAMOS.<br>Por favor, compruebe que todos los artículos están en el sobre. DEPOSITE EN UN BUZÓN DE CORREOS. Por favor, haga clic aquí para encontrar su buzón postal más cercano. Si usted se hospeda en un hotel, puede pedir en la recepción que envíen el sobre al correo o filial DHL/Correo disponible cerca de Ud.<br>Ni bien recibamos el Router por correo, y éste esté completamente en funcionamiento. Le reembolsaremos el depósito correspondiente. En caso de que el Router este dañado o averiago, y éste no se pueda reparar, estaremos obligados a descontar el monto del depósito, parcial o enteramente. Para evitar esto, compruebe que esté todo dentro del sobre y que el router funcione como lo recibió.',
        },
    ]

    const [ isOpenId, setIsOpenId ] = useState(0)

    const handleToggle = (id) => {
        setIsOpenId( id !== isOpenId ? id : null)
    }

    console.log(isOpenId)

    return (
        <Container>
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