import {
    ProductContainer,
    ImageContainer,
    DescriptionContainer,
    Title,
    Description,
    LeftContainer,
    ReviewContainer,
    ReviewItem,
    Sticky,
} from './Elements'

const Skeleton = () => {
    return (
        <ProductContainer>
            <LeftContainer>
                <Sticky>
                    <ImageContainer></ImageContainer>
                    <ReviewContainer>
                        <ReviewItem></ReviewItem>
                        <ReviewItem></ReviewItem>
                        <ReviewItem></ReviewItem>
                        <ReviewItem></ReviewItem>
                    </ReviewContainer>
                </Sticky>
            </LeftContainer>
            <DescriptionContainer>
                <Title></Title>
                <Description></Description>
                {/* <Calendar
                            cart={cart}
                            setCart={setCart}
                            text="Seleccione una fecha"
                        /> */}
                {/* <ButtonSecondaryLink to="/checkout">
                            {mainProduct.attributes[6].options[0]}
                        </ButtonSecondaryLink> */}
            </DescriptionContainer>
        </ProductContainer>
    )
}

export default Skeleton