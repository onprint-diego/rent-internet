import { GetCartContext } from '../../context/CartContext'
import CheckoutForm from '../forms/CheckoutForm/CheckoutForm'
import {
    CheckoutContainer,
    CheckoutInner,
    ConfirmButton,
    EmptyCart,
} from './Elements'
import CartDetails from './CartDetails/CartDetails'


const Checkout = () => {

    const { cart, setCart } = GetCartContext()

    return (
        <CheckoutContainer>
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

            <CheckoutForm cart={cart} setCart={setCart} />
        </CheckoutContainer>
    )
}

export default Checkout