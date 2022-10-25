import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_KEY);

export default async (req, res) => {
    //   const { email, subject, message, name } = req.body

    const email = 'rent@rent-internet.com'
    const to = 'diegoeliseoiovane@gmail.com'
    const subject = 'Mail de Rent Internet'
    const message = 'Un mensaje'

    const msg = {
        to: toolbar,
        from: email,
        subject,
        name,
        text: message,
    };

    try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent` })
    } catch (error) {
        res.status(500).json({ error: 'Error sending email' })
    }
}
