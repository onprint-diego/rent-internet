import { api } from './woocommerce'

export const setWooOrder = (session) => {

    //Format the incoming detail from Stripe line items to Woo orders format
    // const lineItems = products.map(product => {
    //     return {
    //         name: product.description,
    //         quantity: product.quantity,
    //         price: product.price.unit_amount / 100,
    //     }
    // })

    const data = {
        id: session.id,
        payment_method: "Card",
        payment_method_title: "Card",
        set_paid: true,
        billing: {
            first_name: session.metadata.customerName,
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: session.metadata.customerEmail,
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
                name: 'Item',
                quantity: 2,
                price: 10,
            },
        ],
    };

    api.post("orders", data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}