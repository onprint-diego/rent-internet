import { api } from "../../utils/woocommerce"

export async function CreateWooCommerceTransferOrder(data) {

    const order = {
        payment_method: "Transferencia Bancaria",
        payment_method_title: "Transferencia bancaria",
        set_paid: false,
        billing: {
            first_name: data.customerDetails.name,
            last_name: data.customerDetails.surname,
            address_1: data.customerDetails.billingAddress,
            city: data.customerDetails.billingCity,
            postcode: data.customerDetails.billingCp,
            country: data.customerDetails.billingCountry,
            email: data.customerDetails.email,
            phone: data.customerDetails.phone
        },
        shipping: {
            address_1: data.customerDetails.deliveryAddress,
            city: data.customerDetails.deliveryCity,
            postcode: data.customerDetails.deliveryCp,
            country: data.customerDetails.deliveryCountry
        },
    }


    try {
        const response = await api.post("orders", order)
        return response
    } catch (error) {
        console.log('ERROR placing order in woocommerce', error)
    }

}


/*
    const data = {
        payment_method_title: "Transferencia bancaria",
        status: 'pending',
    }
*/

// const data = {
//     payment_method: "bacs",
//     payment_method_title: "Direct Bank Transfer",
//     set_paid: true,
//     billing: {
//       first_name: "John",
//       last_name: "Doe",
//       address_1: "969 Market",
//       address_2: "",
//       city: "San Francisco",
//       state: "CA",
//       postcode: "94103",
//       country: "US",
//       email: "john.doe@example.com",
//       phone: "(555) 555-5555"
//     },
//     shipping: {
//       first_name: "John",
//       last_name: "Doe",
//       address_1: "969 Market",
//       address_2: "",
//       city: "San Francisco",
//       state: "CA",
//       postcode: "94103",
//       country: "US"
//     },
//     line_items: [
//       {
//         product_id: 93,
//         quantity: 2
//       },
//       {
//         product_id: 22,
//         variation_id: 23,
//         quantity: 1
//       }
//     ],
//     shipping_lines: [
//       {
//         method_id: "flat_rate",
//         method_title: "Flat Rate",
//         total: "10.00"
//       }
//     ]
//   };