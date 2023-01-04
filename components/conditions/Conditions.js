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

const Conditions = () => {

    const data = [
        {
            id: 1,
            q: 'CONDICIONES GENERALES',
            a: 'http://rent-internet.com (RENT INTERNET) es un sitio web operado por Onprint Media, una empresa registrada en Suiza. Estas Condiciones Generales mantienen las condiciones de alquiler, que se describen en el Contrato de Alquiler entre usted y Onprint Media, como Arrendador. Al aceptar estas Condiciones Generales, usted acepta las condiciones del Contrato de Alquiler y se convierte en el Arrendatario.',
        },
        {
            id: 2,
            q: 'DESCRIPCIÓN DE LOS SERVICIOS',
            a: 'RENT INTERNET alquila puntos de acceso móviles 4G/LTE (dispositivos) para su uso en Suiza, Europa y Estados Unidos (en los países cubiertos). Los datos incluidos mientras dure el alquiler dependen del plan solicitado (25gb o 50gb). Cada dispositivo puede mantener hasta 5 conexiones simultáneas.',
        },
        {
            id: 3,
            q: 'PROCESO DE RESERVA EN LÍNEA',
            a: 'A continuación se indican los principales pasos para realizar una reserva en línea:<p>(1) Primer paso: selección del servicio. El Arrendatario selecciona sus criterios de alquiler, incluyendo las fechas de alquiler y el equipamiento opcional. La moneda a cobrar será expresada en todos los casos en USD (dólar estadounidense).</p><p>(2) Segundo paso: El arrendatario introduce su dirección de facturación, incluyendo el nombre, los apellidos, la dirección completa, la dirección de correo electrónico y el número de teléfono móvil.</p><p>(3) Tercer paso: Datos de pago. El Arrendatario puede elegir entre pagar con tarjeta de crédito o mediante transferencia bancaria. Se introducirán los datos de la tarjeta de crédito o recibirá los datos bancarios del Arrendador e instrucciones para realizar el pago por correo electrónico.</p><p>(4) Cuarto paso: El Arrendatario es informado de los gastos de penalización en caso de no devolver el aparato, sus accesorios y equipos opcionales, mediante correo electrónico.</p><p>(5) Quinto paso: Se ejecutará el pago y se confirmará la reserva.</p><p>(6) Sexto paso: El arrendatario sube una copia de su pasaporte o documento de identidad para finalizar la reserva. Es un requisito legal de la legislación suiza. Tenga en cuenta que podemos pedirle que nos envíe otra copia si nos envía una de baja calidad.</p>',
        },
        {
            id: 4,
            q: 'CONFIRMACIÓN DE LA RESERVA',
            a: 'Al final del proceso de reserva, el Arrendatario recibirá un correo electrónico de confirmación con los detalles de la reserva.',
        },
        {
            id: 5,
            q: 'VIAJEROS COMPROMISO WIFI',
            a: '<p>RENT INTERNET se esforzará razonablemente en proporcionar al Arrendatario una calidad de servicio. Sin embargo, RENT INTERNET no garantiza que el servicio (1) no se interrumpa, (2) se preste a tiempo, (3) sea seguro o (4) esté libre de fallos y (5) se preste en los países no cubiertos.</p><p>Los riesgos relativos al desgaste habitual serán asumidos por RENT INTERNET, que reparará sin demora los daños que perjudiquen materialmente el funcionamiento del Equipo, y/o sustituirá el Equipo en un plazo de 48 horas. RENT INETRNET proporcionará un reembolso de acuerdo con la política de reembolso.</p>',
        },
        {
            id: 6,
            q: 'USO DE DATOS',
            a: 'Los datos de alta velocidad incluidos dependen del país de uso y de las políticas de servicio de los prestadores.',
        },
        {
            id: 7,
            q: 'RECEPCIÓN DEL HOTSPOT MÓVIL',
            a: 'El Arrendatario recibirá el dispositivo, cargado y listo para su uso, así como un cargador de pared totalmente funcional, un cable USB y un equipo opcional (si se ha pedido). Las reclamaciones por parte del Arrendatario en relación con el aparato y/o los accesorios deben ser comunicadas al Arrendador inmediatamente después de su recepción (en un plazo de 24 hs).',
        },
        {
            id: 8,
            q: 'COMPROMISOS DEL ARRENDATARIO',
            a: '<p>Al utilizar el Equipo o los Servicios proporcionados por RENT INTERNET, el Arrendatario no debe realizar ninguna acción: - que sea abusiva, ilegal o fraudulenta; - que provoque que la Red se vea perjudicada o dañada; - que modifique la finalidad del router hotspot móvil.</p><p>El Arrendatario deberá: proteger razonablemente el Equipo contra el riesgo de destrucción, daño, pérdida, robo, etc.; mantener el Equipo en un estado ordenado y funcional. No eliminar ningún elemento de la misma (cambiar o quitar la tarjeta SIM).</p>',
        },
        {
            id: 9,
            q: 'DEVOLUCIÓN DEL ROUTER HOTSPOT MÓVIL',
            a: 'El dispositivo, así como todos los accesorios y equipos opcionales enumerados en el contrato de alquiler, deben enviarse en buenas condiciones a través del sobre prefranqueado que se recibirá junto al dispositivo móvil. El arrendatario será responsable de todos los daños y perjuicios en caso de devolución tardía, así como de los daños accidentales. El aparato y sus accesorios pueden devolverse depositando el sobre prefranqueado, que contendrá todos los accesorios y equipos opcionales, en cualquier buzón de la empresa de correos. El Arrendatario puede pedir en su hotel de alojamiento que realizan la devolución del sobre.',
        },
        {
            id: 10,
            q: 'DEVOLUCIÓN RETRASADA',
            a: 'Si el dispositivo y sus accesorios se devuelven con más de 1 día de retraso, se cobrará un día de alquiler adicional por cada período de día o parte del mismo.',
        },
        {
            id: 11,
            q: 'EXTENSIÓN DEL PLAZO DE ALQUILER',
            a: 'Una extensión de la relación de alquiler solo es posible con el consentimiento por escrito del Arrendador, antes de la terminación de la relación de alquiler en curso. El Arrendador tiene derecho a rechazar una extensión, sin dar razones para ello. En la medida en que el Arrendador haya acordado una extensión del período de alquiler, todas las disposiciones del Contrato de Alquiler original seguirán aplicándose sin cambios, a menos que se haya acordado algo diferente por escrito.',
        },
        {
            id: 12,
            q: 'IDENTIFICACIÓN DEL ARRENDATARIO',
            a: 'La ley suiza de telecomunicaciones solicita una copia del pasaporte o documento de identidad del Arrendatario. El Arrendatario acepta que tiene que subir una copia de su pasaporte o DNI. Los datos privados del Arrendatario se tratan de forma altamente confidencial.',
        },
        {
            id: 13,
            q: 'PRECIO DE ALQUILER',
            a: 'El período de alquiler se calcula por día de alquiler. El primer día de duración del alquiler es el día de recogida/entrega; el último día el día de regreso. Todos los precios incluyen el 8% de impuestos. El precio del alquiler se establece en el Contrato de alquiler y comprende el uso del Dispositivo tal como se indica en el Contrato de alquiler durante la duración acordada, así como cualquier tarifa adicional que se haya acordado para equipos opcionales. Las tarifas de alquiler están estipuladas en base quincenal o en base mensual.',
        },
        {
            id: 14,
            q: 'FORMA DE PAGO',
            a: 'El pago se puede realizar mediante Transferencia Bancaria y las siguientes tarjetas de crédito: "Mastercard", "Visa", "Discovery", “American Express”',
        },
        {
            id: 15,
            q: 'MODIFICACIÓN/CANCELACIÓN/REEMBOLSO',
            a: '<p>El Arrendatario puede cancelar cualquier pedido sin cargo hasta 7 días antes de la fecha de recogida/entrega.</p><p>Para el resto de los periodos de cancelación los cargos son los siguientes:</p><p>Hasta 6 días antes de la fecha de inicio del alquiler: 40 % del costo total del pedido;</p><p>Hasta 2 días antes de la fecha de inicio del alquiler: 70% del costo total del pedido;</p><p>En caso de que el equipo de alquiler ya haya sido enviado a los servicios postales o de mensajería para su entrega, no se pueden aplicar reembolsos.</p><p>En los casos en que no sea posible reparar los daños, lo que afecta materialmente el funcionamiento del Dispositivo, y/o reemplazar el Dispositivo dentro de las 48 horas, RENT INTERNET proporcionará un reembolso parcial al Arrendatario.</p><p>El reembolso no se proporcionará en los casos en que el Arrendatario no haya informado inmediatamente a RENT INTERNET sobre (a) cualquier problema o defecto del Dispositivo; (b) entrega inoportuna del Dispositivo; (c) imposibilidad/decisión de no recoger el Dispositivo en el momento acordado; (d) ausencia de señal de red o conexión a Internet; (e) rendimiento inadecuado del punto de acceso móvil.</p><p>Para cualquier solicitud de cambio, modificación y cancelación de la reserva, el Arrendatario deberá ponerse en contacto con RENT INETRNET: info@rent-internet.com</p>',
        },
        {
            id: 16,
            q: 'CARGOS POR PÉRDIDA Y DAÑO',
            a: '<p>El Arrendatario es el único responsable de toda pérdida o daño del equipo durante el período de alquiler. En caso de pérdida o daño, se cobrarán las siguientes cantidades:</p><ul><li>Pérdida o daño total de la caja WIFI de RENT INTERNET que contiene el Dispositivo y sus accesorios: CHF 150.00</li><li>Dispositivo WIFI: CHF 100.00</li><li>Tarjeta SIM: CHF 50.00</li><li>Batería: CHF 25,00</li><li>Cargador de pared: CHF 15,00</li><li>Cable USB: CHF 15.00</li><li>Inserto de madera: CHF 20.00</li><li>Cargador de coche: CHF 15,00</li></ul>',
        },
        {
            id: 17,
            q: 'PRIVACIDAD',
            a: 'Todos los datos proporcionados por el Arrendatario durante el alquiler y el uso del Dispositivo WIFI de RENT INTERNET estarán protegidos de acuerdo con la Ley Federal de Protección de Datos (DPA) y el Reglamento General de Protección de Datos (GDPR) de Suiza. Todos los datos proporcionados por el cliente guardados por RENT INTERNET se utilizarán explícitamente para fines de cumplimiento contractual y para informar al cliente sobre los productos relacionados con su acuerdo contractual. En este sentido, el cliente acepta explícitamente que aprueba y acepta el envío de dicha información, también con fines de marketing y en formato electrónico, p. vía correo electrónico. La revocación del consentimiento podrá ser notificada en cualquier momento, pero deberá efectuarse por escrito a RENT INTERNET, indicando las direcciones de correo electrónico afectadas.Más información sobre la privacidad de RENT INTERNET está disponible <a href="#" target="_blank" rel="noopener noreferrer">aquí</a>.',
        },
        {
          id: 18,
          q: 'PAÍSES CUBIERTOS',
          a: '',
        },
        {
          id: 19,
          q: 'DERECHOS DE PROPIEDAD INTELECTUAL',
          a: 'Todos los textos, gráficos, iconos de botones, imágenes (colectivamente, "Contenido") pertenecen exclusivamente a Onprint Media. El Contenido está protegido por las leyes internacionales de derechos de autor. Rent Internet y el logotipo de Rent Internet son marcas registradas, pertenecen exclusivamente a Onprint Media. El uso de cualquiera de las marcas registradas sin el consentimiento expreso por escrito de Onprint Media está estrictamente prohibido.',
        },
        {
          id: 20,
          q: 'RESPONSABILIDAD',
          a: '<p>RENT INTERNET no será responsable:</p><p>(a) en los casos en que el trabajo del Dispositivo se vea interrumpido o limitado debido a apagones o tiempos de inactividad de las instalaciones públicas de telecomunicaciones o energía; o condiciones locales especiales (es decir, uso del Dispositivo en el desierto o bajo tierra);</p><p>(b) para cualquier evento o circunstancia que esté más allá del control razonable de RENT INTERNET y que RENT INTERNET no pueda prever ni evitar razonablemente y que resulte o cause la incapacidad de cumplir con las obligaciones de RENT INTERNET en virtud de estos Términos y condiciones.</p>',
        },
        {
          id: 21,
          q: 'JURISDICCIÓN Y LEY APLICABLE',
          a: '<p>Estos Términos y condiciones se regirán por la ley sustantiva suiza (con exclusión de las disposiciones sobre conflicto de leyes y la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional) de Mercancías (CISG) de 11 de abril de 1980).</p><p>Cualquier disputa que surja de o en conexión con estos Términos y Condiciones será exclusivamente remitido a los tribunales competentes de la ciudad de Zürich, Suiza.</p>',
        },
        {
          id: 22,
          q: 'MENCIONES LEGALES',
          a: '<p>Oficina registrada:</p><p>Onprint Media</p><p>Dohlenweg 24</p><p>8050 Zürich, Suiza</p><p>Número de teléfono: +41</p><p>Correo electrónico: info@rent-internet.com</p><p>UID: CH-400.4.441.186-2</p><p>Número de IVA suizo: CHE-247.520.822</p><p>El Sitio y su contenido, características y funcionalidad originales son propiedad de Onprint Media y están protegidos por derechos de autor internacionales, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad.</p>',
        },
    ]

    const [ isOpenId, setIsOpenId ] = useState(0)

    const handleToggle = (id) => {
        setIsOpenId( id !== isOpenId ? id : null)
    }

    return (
        <Container id="faq-section">
            <Inner>
                <Title>Términos y condiciones</Title>
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

export default Conditions