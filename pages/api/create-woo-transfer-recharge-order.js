import { api } from "../../utils/woocommerce"

export async function CreateWooCommerceTransferRechargeOrder(data) {

    const order = {
        payment_method: "Transferencia Bancaria",
        payment_method_title: "Transferencia bancaria",
        set_paid: false,
        billing: {
            email: data.customerDetails.email,
        },
        line_items: [{product_id: data.product.id, quantity: 1}],
    }


    try {
        const response = await api.post("orders", order)
        return response
    } catch (error) {
        console.log('ERROR placing recharge order in woocommerce', error)
        return error
    }

}