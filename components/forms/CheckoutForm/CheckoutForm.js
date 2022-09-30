const CheckoutForm = ({ setOrder }) => {

    const prepareOrder = () => {
        setOrder({

        })
    }

    return (
        <form>
            <input />
            <button onClick={prepareOrder}>Pagar</button>
        </form>
    )
}

export default CheckoutForm

/*
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

*/


//LO QUE NECESITA WOO PARA ESCRIBIR LA DATA EN WOO]
/*
            payment_method: "bacs",
            payment_method_title: "Direct Bank Transfer",
            // set_paid: ,
            status: 'completed', //can be 'pending' if payment failed
            billing: {
                first_name: "John",
                last_name: "Doe",
                address_1: "969 Market",
                address_2: "",
                city: "San Francisco",
                state: "CA",
                postcode: "94103",
                country: "US",
                email: "john.doe@example.com",
                phone: "(555) 555-5555"
            },
            shipping: {
                first_name: "John",
                last_name: "Doe",
                address_1: "969 Market",
                address_2: "",
                city: "San Francisco",
                state: "CA",
                postcode: "94103",
                country: "US"
            },
            line_items: [
                {
                product_id: cart.id,
                quantity: cart.qty, // Depends on the quantity of days
                }
            ],
            shipping_lines: [
                {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "10.00"
                }
            ]
*/