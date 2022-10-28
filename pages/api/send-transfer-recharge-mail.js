import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_KEY);

export default async (req, res) => {
    const content = req.body
    const email = 'rent@rent-internet.com'
    const name = 'Rent Internet'
    const subject = 'Confirmación de reserva de módem Rent Internet'

    console.log('In mail api.............', content)

    const header = `
        <h1>Su orden de recarga ha sido recibida.</h1>
        <p>La recarga será efectuada una vez completado el pago.</p>
        <p>El número de orden es: ${content.id}</p>
    `
    const itemsList = content.line_items.map(item => `<p>${item.name} - u$d${item.total}</p>`).join('<br>')
    const footer = `Total u$d${content.total}`

    const html = header + itemsList + footer

    const msg = {
        to: content.billing.email,
        from: email,
        subject,
        name: name,
        html: html,
    };

    try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent` })
    } catch (error) {
        res.status(500).json({ error: 'Error sending email' })
    }
}