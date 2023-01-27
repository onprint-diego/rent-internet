import { useState } from 'react'
import Link from 'next/link'
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
    FootLink,
    PopContainer,
    PopInner,
    Msj,
    CloseButton,
} from './Elements'


const Summary = ({ cart, mainProduct }) => {

    // const [showTooltip, setShowTooltip] = useState(false)
    const [pop, setPop] = useState(false)

    console.log(pop)

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
                * El depósito será devuelto a su cuenta bancaria o tarjeta de crédito una vez verificado el estado del router y sus accesorios. <FootLink onClick={() => setPop(true)}>Ver más.</FootLink> 
            </FootNote>
            {
                pop ?
                <PopContainer>
                    <PopInner>
                        <Msj>
                            Junto con el pago del alquiler de su dispositivo Rent Internet y accesorios, deberá abonar un depósito equivalente a USD 100. El mismo será devuelto inmediatamente, habiendo verificado que tanto el router como sus accesorios han sido devueltos en perfecto estado y funcionamiento. Ni bien recibamos el Router por correo, y esté completamente en funcionamiento, le reembolsaremos el depósito correspondiente. En caso de que el router o sus accesorios estén dañados o averiados, y éste no se pueda reparar, estaremos obligados a descontar el monto del depósito, parcial o totalmente.
                        </Msj>
                        <CloseButton onClick={() => setPop(false)}>X</CloseButton>
                    </PopInner>
                </PopContainer> : null
            }
        </Sticky>
    )
}

export default Summary