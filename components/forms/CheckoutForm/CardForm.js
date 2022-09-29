
const CardForm = ({ productData }) => {

    console.log(productData)

    const handlePaymentIntent = async (e) => {

        e.preventDefault()
        console.log('lsdkajlkja;lkjasd;lfjas;ldfl;adj')
        const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
            body: JSON.stringify({ productData }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json()
        console.log(data)
    }

    return (
        <form>
            <button onClick={handlePaymentIntent}>Send</button>
        </form>
    )
}

export default CardForm