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

const Privacy = () => {

    const data = [
        {
            id: 1,
            q: 'Política de privacidad',
            a: 'Esta política de privacidad se ha compilado para brindar un mejor servicio a aquellos que están interesados por cómo se usa en línea su "Información de identificación personal" (IIP). La IIP es información que se puede usar sola o con otra información para identificar, contactar o ubicar a una sola persona, o para identificar a un individuo en contexto. Lea nuestra política de privacidad detenidamente para comprender claramente cómo recopilamos, usamos, protegemos o manejamos su información de identificación personal de acuerdo con nuestro sitio web.',
        },
        {
            id: 2,
            q: '¿Qué información personal recopilamos de las personas que visitan nuestro blog, sitio web o aplicación?',
            a: 'Al realizar un pedido o registrarse en nuestro sitio, según corresponda, se le puede solicitar que ingrese su nombre, dirección de correo electrónico, número de teléfono, copia del pasaporte u otros detalles para ayudarlo con su experiencia.',
        },
        {
            id: 3,
            q: '¿Cuándo recopilamos información?',
            a: 'Recopilamos información sobre usted cuando realiza un pedido o ingresa información en nuestro sitio.',
        },
        {
            id: 4,
            q: '¿Cómo usamos su información?',
            a: '<p>Podemos usar la información que recopilamos de usted cuando se registra, realiza una compra, se suscribe a nuestro boletín informativo, responde a una encuesta o comunicación de marketing, navega por el sitio web o usa otras funciones del sitio de las siguientes maneras:</p><ul><li>Para personalizar su experiencia y permitirnos entregar el tipo de contenido y ofertas de productos en los que está más interesado.</li><li>Para mejorar nuestro sitio web con el fin de brindarle un mejor servicio.</li><li>Para permitirnos brindarle un mejor servicio al responder a sus solicitudes de servicio al cliente.</li><li> Para solicitar calificaciones y reseñas de servicios o productos</li></ul>',
        },
        {
            id: 5,
            q: '¿Cómo protegemos tu información?',
            a: '<p>RENT INTERNET se esforzará razonablemente en proporcionar al Arrendatario una calidad de servicio. Sin embargo, RENT INTERNET no garantiza que el servicio (1) no se interrumpa, (2) se preste a tiempo, (3) sea seguro o (4) esté libre de fallos y (5) se preste en los países no cubiertos.</p><p>Los riesgos relativos al desgaste habitual serán asumidos por RENT INTERNET, que reparará sin demora los daños que perjudiquen materialmente el funcionamiento del Equipo, y/o sustituirá el Equipo en un plazo de 48 horas. RENT INETERNET proporcionará un reembolso de acuerdo con la política de reembolso.</p>',
        },
        {
            id: 6,
            q: 'Usamos escaneo de malware regular.',
            a: '<p>Su información personal está contenida detrás de redes seguras y sólo es accesible para un número limitado de personas que tienen derechos especiales de acceso a dichos sistemas y están obligadas a mantener la información confidencial. Además, toda la información crediticia/confidencial que proporcione se cifra mediante la tecnología Secure Socket Layer (SSL).</p><p>Implementamos una variedad de medidas de seguridad cuando un usuario realiza un pedido ingresa, envía o accede a su información para mantener la seguridad de su información personal.</p><p>Todas las transacciones se procesan a través de un proveedor de puerta de enlace y no se almacenan ni procesan en nuestros servidores.</p>',
        },
        {
            id: 7,
            q: '¿Utilizamos "cookies"?',
            a: '<p>No utilizamos cookies con fines de seguimiento.</p><p>Puede elegir que su computadora le avise cada vez que se envía una cookie, o puede optar por desactivar todas las cookies. Usted hace esto a través de la configuración de su navegador. Dado que el navegador es un poco diferente, mire el menú de ayuda de su navegador para conocer la forma correcta de modificar sus cookies.</p><p>Si desactiva las cookies, es posible que algunas de las funciones que hacen que su experiencia en el sitio sea más eficiente no funcionen correctamente.</p>',
        },
        {
            id: 8,
            q: 'Divulgación de terceros',
            a: 'No vendemos, intercambiamos ni transferimos de otro modo a terceros su información de identificación personal.',
        },
        {
            id: 9,
            q: 'Enlaces de terceros',
            a: 'Ocasionalmente, a nuestra discreción, podemos incluir u ofrecer productos o servicios de terceros en nuestro sitio web. Estos sitios de terceros tienen políticas de privacidad separadas e independientes. Por lo tanto, no tenemos ninguna responsabilidad por el contenido y las actividades de estos sitios vinculados. No obstante, buscamos proteger la integridad de nuestro sitio y agradecemos cualquier comentario sobre estos sitios.',
        },
        {
            id: 10,
            q: 'Google',
            a: '<p>Los requisitos publicitarios de Google se pueden resumir en los Principios publicitarios de Google. Se implementan para proporcionar una experiencia positiva a los usuarios. https://support.google.com/adw…</p><p>Utilizamos publicidad de Google AdSense en nuestro sitio web.</p><p>Google, como proveedor externo, utiliza cookies para publicar anuncios en nuestro sitio. El uso de Google de la cookie DART le permite mostrar anuncios a nuestros usuarios en función de visitas anteriores a nuestro sitio y otros sitios en Internet. Los usuarios pueden rechazar el uso de la cookie de DART visitando la política de privacidad de Google Ad and Content Network.</p><p>Nosotros, junto con proveedores externos como Google, utilizamos cookies propias (como las cookies de Google Analytics) y cookies de terceros (como la cookie de DoubleClick) u otros identificadores de terceros para recopilar datos sobre las interacciones del usuario con impresiones de anuncios y otras funciones del servicio de anuncios en relación con nuestro sitio web.</p>',
        },
        {
            id: 11,
            q: 'Optar por no participar',
            a: 'Los usuarios pueden establecer preferencias sobre cómo Google le anuncia mediante la página Configuración de anuncios de Google. Alternativamente, puede optar por no participar visitando la página de exclusión de la iniciativa de publicidad en la red o utilizando el complemento del navegador de exclusión de Google Analytics.',
        },
        {
            id: 12,
            q: 'Ley de protección de la privacidad en línea de Europa',
            a: '<p>Todos los datos proporcionados por el Arrendatario durante el alquiler y el uso del Dispositivo  de RENT INTERNET estarán protegidos de acuerdo con la Ley europea de proteccion de datos y privacidad: <a href="https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_es.htm" target="_blank" rel="noopener noreferrer">https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_es.htm</a></p><p>Todos los datos proporcionados por el cliente guardados por RENT INTERNET se utilizarán explícitamente para fines de cumplimiento contractual y para informar al cliente sobre los productos relacionados con su acuerdo contractual. En este sentido, el cliente acepta explícitamente que aprueba y acepta el envío de dicha información, también con fines de marketing y en formato electrónico, p. vía correo electrónico.</p><p>La revocación del consentimiento podrá ser notificada en cualquier momento, pero deberá efectuarse por escrito a RENT INTERNET, indicando las direcciones de correo electrónico afectadas.</p>',
        },
    ]

    const [ isOpenId, setIsOpenId ] = useState(0)

    const handleToggle = (id) => {
        setIsOpenId( id !== isOpenId ? id : null)
    }

    console.log(isOpenId)

    return (
        <Container id="faq-section">
            <Inner>
                <Title>Política de privacidad</Title>
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

export default Privacy