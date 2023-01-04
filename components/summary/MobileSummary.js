import { useState } from 'react'
import {
    ReviewContainer,
    ReviewItem,
    Fixed,
    Bold,
    Soft,
    Small,
    Remark,
    TopContainer,
    TotalItem,
} from './Elements'


const Summary = ({ cart, mainProduct }) => {

    const [open, setOpen] = useState(false)

    return (
        <Fixed>
            <TopContainer>
                <ReviewContainer>
                    <TotalItem>
                        <Bold>Total </Bold>
                        <Soft>
                            USD {cart.total}
                        </Soft>
                    </TotalItem>
                    <ReviewItem>
                        <Bold>Modem</Bold>
                        <Soft>
                            USD {cart.mainProductPrice * cart.qty}
                            <Small>
                                {' '}({cart.qty} semana{cart.qty > 1 && 's'})
                            </Small>
                        </Soft>
                    </ReviewItem>
                    <ReviewItem>
                        <Bold>
                            Depósito<Remark>*</Remark>
                        </Bold>
                        <Soft>
                            USD {cart.deposit}
                        </Soft>
                    </ReviewItem>
                    <ReviewItem>
                        <Bold>Envío</Bold>
                        <Soft>
                            USD {cart.shippingFee}
                        </Soft>
                    </ReviewItem>
                    {
                        cart.adapter?.is === true &&
                        <ReviewItem>
                            <Bold>Adaptador </Bold>
                            <Soft>
                                USD {cart.adapter.product.price}
                            </Soft>
                        </ReviewItem>
                    }
                    {
                        cart.powerBank?.is === true &&
                        <ReviewItem>
                            <Bold>Cargador </Bold>
                            <Soft>
                                USD {cart.powerBank.product.price}
                            </Soft>
                        </ReviewItem>
                    }
                </ReviewContainer>
            </TopContainer>
        </Fixed>
    )
}

export default Summary