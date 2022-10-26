import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_KEY);

export default async (req, res) => {
    // const content = req.body
    const email = 'rent@rent-internet.com'
    const subject = 'Confirmación de reserva de módem Rent Internet'

    // const header = `
    //     <h1>${customer.last_name} ${customer.first_name}, gracias</h1>
    //     <p>El número de tu reserva es: ${content.id}</p>
    // `
    // const itemsList = content.line_items.map(item => `<p>${item.name} - u$d${item.total}</p>`).join('<br>')
    // const footer = `Total $${content.total}`

    // const html = header + itemsList + footer

    const msg = {
        to: 'diegoeliseoiovane@gmail.com',
        from: email,
        subject,
        html: `<h1>hola</h1>`,
    };

    try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent` })
    } catch (error) {
        res.status(500).json({ error: 'Error sending email' })
    }
}