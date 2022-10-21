import { useState, useEffect } from 'react'
import { GetCartContext } from '../../context/CartContext'
import { GetProductsContext } from '../../context/ProductsContext'
import CheckoutForm from '../forms/CheckoutForm/CheckoutForm'
import Summary from '../summary/Summary'
import {
    Container,
    CheckoutContainer,
    LeftContainer,
    RightContainer,
    EmptyCartContainer,
    Msj,
} from './Elements'

const Checkout = () => {

    const { cart, setCart } = GetCartContext()
    const { products } = GetProductsContext()
    const [ mainProduct, setMainProduct ] = useState({})
    
    useEffect(() => {
        console.log(products)
        if (products.length !== 0) {
            setMainProduct(products.find(item => item.name === "Modem"))
        }
    }, [])

    return (
        <Container>
            <CheckoutContainer>
                {
                    Object.values(cart).length === 0 ?
                        <EmptyCartContainer>
                            <Msj>No has hecho ninguna reserva</Msj>
                        </EmptyCartContainer> :
                        <>
                            <LeftContainer>
                                {
                                    Object.values(mainProduct).length !== 0 &&
                                    <Summary cart={cart} mainProduct={mainProduct} />
                                }
                            </LeftContainer>
                            <RightContainer>
                                <CheckoutForm cart={cart} setCart={setCart} />
                            </RightContainer>
                        </>
                }
            </CheckoutContainer>
        </Container>
    )
}

export default Checkout