import {
    ImageContainer,
    ProductImage,
    ReviewContainer,
    ReviewItem,
    Sticky,
    Bold,
} from './Elements'


const Summary = ({ cart, mainProduct }) => {
    return (
        <Sticky>
            <ImageContainer>
                <ProductImage src={mainProduct.images[0].src} alt={mainProduct.images[0].alt} />
            </ImageContainer>
            <ReviewContainer>
                <ReviewItem>
                    <Bold>Modem:</Bold> u$d {cart.mainProductPrice} ({cart.qty} semana{cart.qty > 1 && 's'})
                </ReviewItem>
                <ReviewItem>
                    <Bold>Depósito:</Bold> u$d ...
                </ReviewItem>
                <ReviewItem>
                    <Bold>Envío:</Bold> u$d {cart.shippingFee}
                </ReviewItem>
                {/* <ReviewItem>
                        <Bold>Subtotal:</Bold> u$d {cart.subtotal}
                    </ReviewItem> */}
                {
                    cart.adapter.is === true &&
                    <ReviewItem>
                        <Bold>Adaptador:</Bold> u$d {cart.adapter.product.price}
                    </ReviewItem>
                }
                {
                    cart.powerBank.is === true &&
                    <ReviewItem>
                        <Bold>Cargador:</Bold> u$d {cart.powerBank.product.price}
                    </ReviewItem>
                }
                <ReviewItem>
                    <Bold>Total:</Bold> u$d {cart.total}
                </ReviewItem>
            </ReviewContainer>
        </Sticky>
    )
}

export default Summary