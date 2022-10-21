import { GetCartContext } from '../../context/CartContext'
import { GetProductsContext } from '../../context/ProductsContext'
import CheckoutForm from '../forms/CheckoutForm/CheckoutForm'
import Summary from '../summary/Summary'
import {
    Container,
    CheckoutContainer,
    LeftContainer,
    RightContainer,
} from './Elements'

const Checkout = () => {

    const { cart, setCart } = GetCartContext()
    const { products } = GetProductsContext()
    let mainProduct = {}

    if (products.length !== 0) {
        mainProduct = products.find(item => item.name === "Modem")
    }

    console.log(mainProduct)

    return (
        <Container>
            <CheckoutContainer>
                <LeftContainer>
                    <Summary cart={cart} mainProduct={mainProduct} />
                </LeftContainer>
                {/* <RightContainer>
                    <CheckoutForm cart={cart} setCart={setCart} />
                </RightContainer> */}
                {/* {
                    Object.values(cart).length === 0 ?
                    <EmptyCart>
                        <p>Cart is empty, nothing to checkout</p>
                    </EmptyCart> :
                    <CheckoutInner>
                        <CartDetails cart={cart} />
                        <CheckoutForm cart={cart} setCart={setCart} /> 
                    </CheckoutInner>
                } */}
            </CheckoutContainer>
        </Container>
    )
}

export default Checkout