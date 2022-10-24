import { api } from "../../utils/woocommerce"

export async function CreateWooCommerceTransferOrder(data) {

    const order = {
        payment_method_title: "Transferencia bancaria",
        billing: {
            first_name: "email",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "email",
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
    }


    try {

        const response = await api.post("orders", order)
        // return response
    } catch (error) {
        // throw new Error(error)
        console.log('ERROR.................', error)
    }

}