import { NextApiRequest, NextApiResponse } from "next"
import { getProductDetails } from "../../services/wocommerce";
const stripe = require("stripe")('sk_test_51LkAFuHieiQtj1QL7mZTs5qzxPcfwsSf0RWjbTpf1ScXxQkaaXk28O0vYttDsQ7QAqfv5KTVL7Ak2QlkYrIbvcLC00Dk3IBm7y');
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { api } from "../../services/wocommerce";

export default async function handler(req, res) {

    //data = { productData } Es un objeto con productData que es un objeto con id y qty.
    const data = req.body

    try{
        const paymentIntent = await stripe.paymentIntent.create({
            amount: 1000,
            currency: "gbp"
        })
        res.json({
            data: data,
            paymentIntentId: paymentIntent.id,
            clientSecret: paymentIntent.client_secret,
        });

    } catch(error) {
        // throw new Error(error)
    }
   

    res.status(201).json(data)
}












 // api.get("products")
    // .then((res) => {
    //   if (res.status === 200) {
    //     setProducts(res.data)
    //     console.log(res.data)
    //   }
    // })
    // .catch(err => console.log(err))