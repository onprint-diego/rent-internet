import { useState } from 'react'
import {
    ImageContainer,
    ProductImage,
    ReviewContainer,
    ReviewItem,
    Sticky,
    Bold,
    Soft,
    Small,
    TooltipIcon,
    TooltipContainer,
    TooltipMsj,
    Remark,
    FootNote,
    TopContainer,
} from './Elements'


const Summary = ({ cart, mainProduct }) => {

    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <Sticky>
            <TopContainer>

                <ImageContainer>
                    <ProductImage src={mainProduct.images[0].src} alt={mainProduct.images[0].alt} />
                </ImageContainer>
                <ReviewContainer>
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
                            {/* <TooltipIcon onClick={() => setShowTooltip(!showTooltip)}>?</TooltipIcon> */}
                        </Bold>
                        {/* {
                                showTooltip && 
                                <TooltipContainer>
                                    <TooltipMsj>El depósito será devuelto a su cuenta bancaria o tarjeta de crédito una vez verificado el estado del router y sus accesorios. Ver más.</TooltipMsj>
                                </TooltipContainer>
                            } */}
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
                    <ReviewItem>
                        <Bold>Total </Bold>
                        <Soft>
                            USD {cart.total}
                        </Soft>
                    </ReviewItem>
                </ReviewContainer>
            </TopContainer>
            <FootNote>
                * El depósito será devuelto a su cuenta bancaria o tarjeta de crédito una vez verificado el estado del router y sus accesorios. Ver más.
            </FootNote>
        </Sticky>
    )
}

export default Summary