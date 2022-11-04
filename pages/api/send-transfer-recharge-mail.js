import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_KEY);

export default async (req, res) => {
    const content = req.body
    const email = 'rent@rent-internet.com'
    const name = 'Rent Internet'
    const subject = 'Confirmación de recarga de módem Rent Internet'

    const html = `
          <div style="width: 75%;background-color: #f7f7f7;padding-bottom: 10rem;margin: 0 auto;border-radius: 4px; overflow: hidden;">
            <div style="background-color: #ffffff;width: 90%;max-width: 550px;margin: 0 auto;border-radius: 3px;border;1px solid #e0e0e0;overflow: hidden;">
            <div style="background-color: #1966d1;padding: 2rem;color: #ffffff;">
                <h1>Gracias por su reserva</h1>
            </div>
            <div style="padding: 2rem;">
                <p>Hemos recibido tu orden de reserva. El número de orden es:</p>
                <p style="text-align: center;font-size: 4rem;font-weight: bold;margin: 2rem 0;color: #1966d1;">${content.id}</p>
                <table style="border-collapse: collapse;border-spacing: 0;margin-top: 1rem;width: 95%;border-radius: 4px;">
                    <thead style="background-color: #dfdfe2;">
                        <tr>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Producto</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Cantidad</th>
                            <th style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${content.line_items[0].name}</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">${content.line_items[0].quantity}</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${content.line_items[0].total}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;" colspan="2">Total</td>
                            <td style="border: 1px solid #dfdfe2;text-align: left;padding: 1rem;">USD ${content.total}</td>
                        </tr>
                    </tbody>
                </table>
                <div style="margin-top: 2rem;">
                    <p style="font-weight: bold;">Método de pago</p>
                    <p>${content.payment_method}</p>
                </div>
            </div>
            <div id="footer>
            </div>
            </div>
        </div>
    `

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