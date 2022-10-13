import nodemailer from 'nodemailer'

export const sendMail = async ( session ) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })

    // const html = prepareHtml(session, products)

    try {
        await transporter.sendMail({
            from: "rent@rent-internet.com",
            to: session.customer_details.email,
            // from: "paseolosberros@gmail.com",
            // to: "diegoeliseoiovane@gmail.com",
            subject: `Booking confirmation from Rent Internet v7`,
            html: `<p>Session id: ${session.id}`,
        })
    } catch (error) {
        return console.log('Hay Error: ', error)
    }
}