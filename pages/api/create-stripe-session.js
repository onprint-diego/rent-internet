const stripe = require("stripe")('sk_test_51LkAFuHieiQtj1QL7mZTs5qzxPcfwsSf0RWjbTpf1ScXxQkaaXk28O0vYttDsQ7QAqfv5KTVL7Ak2QlkYrIbvcLC00Dk3IBm7y');

async function CreateStripeSession(req, res) {
    const { item } = req.body;

    const transformedItem = {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.total,
      },
      quantity: item.qty,
    };
  
    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000',
        cancel_url: 'http://localhost:3000',
        mode: 'payment',
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.total * 100, //Esto traerlo desde woo, no desde el cart
            },
        quantity: item.qty,
        }],
    });
    
    res.json({ id: session.id });
    
//   res.json({item})
//   res.json(item)
//   res.json({transformedItem})
}

export default CreateStripeSession

// export default async (req, res) => {
//   const { item } = req.body;

//   const transformedItem = {
//     price_data: {
//       currency: 'usd',
//       product_data: {
//         // images: [item.image],
//         name: item.name,
//       },
//       unit_amount: item.total * 100,
//     },
//     // description: item.description,
//     // quantity: item.quantity,
//   };

// //   const session = await stripe.checkout.sessions.create({
// //     payment_method_types: ['card'],
// //     line_items: [transformedItem],
// //     mode: 'payment',
// //     success_url: window.location.href,
// //     cancel_url: window.location.href,
// //     metadata: {
// //       images: item.image,
// //     },
// //   });
  
// //   res.json({ id: session.id });
  
// // res.json({item})

// res.json({transformedItem})

// };
