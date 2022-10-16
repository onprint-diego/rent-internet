import { useEffect, useState } from 'react'
import Calendar from '../calendar/Calendar'
import Select from '../select/Select'
import CheckBox from '../checkbox/CheckBox'
import { ButtonSecondaryLink } from '../shared/ButtonSecondary/ButtonSecondary'
import { GetCartContext } from '../../context/CartContext'
import {
    ProductContainer,
    ImageContainer,
    ProductImage,
    DescriptionContainer,
    Title,
    Description,
    Error,
    LinkSpan,
    LeftContainer,
    ReviewContainer,
    ReviewItem,
    Sticky,
} from './Elements'

//TODO inhabilitar el boton de Rent si no selecciono fechas
//TODO el check de los checkbox customizarlo y que dependa del estado, porque tiene un bug

const Detail = ({ data }) => {

    const { cart, setCart } = GetCartContext()
    const [mainProduct, setMainProduct] = useState({})
    const [adapter, setAdapter] = useState({ product: {}, is: false })
    const [powerBank, setPowerBank] = useState({ product: {}, is: false })
    const [error, setError] = useState(false)

    useEffect(() => {

        if (Object.entries(mainProduct).length !== 0) {

            const shippingFee = parseInt(mainProduct.attributes[0].options[0])
            const mainProductPrice = parseInt(mainProduct.price)
            const subtotal = mainProductPrice
            const total = subtotal + shippingFee

            //SET MAIN PRODUCT BY DEFAULT IN CART
            setCart({
                ...cart,
                id: mainProduct.id,
                name: mainProduct.name,
                image: mainProduct.images[0].src,
                mainProductPrice: mainProductPrice,
                qty: 1,
                shippingFee: shippingFee,
                subtotal: subtotal,
                total: total,
                adapter: adapter,
                powerBank: powerBank,
                customerDetails: {},
            })
        }

    }, [mainProduct])

    useEffect(() => {

        const getMainProduct = () => {
            const product = data.find(item => item.name === "Modem")
            setMainProduct(product)
        }

        const getAdapter = () => {
            const product = data.find(item => item.slug === "adaptador")
            setAdapter({ ...adapter, product })
        }

        const getPowerBank = () => {
            const product = data.find(item => item.slug === "power-bank")
            setPowerBank({ ...powerBank, product })
        }

        getMainProduct()
        getAdapter()
        getPowerBank()
    }, [])

    // //TODO chequear si puedo refactorizarlo inhabilitando el boton
    // useEffect(() => {
    //     //Por ejemplo, si cambia la cantidad y hay cantidad,
    //     //disabled(false), else disabled(true) y pasar estado
    //     //al boton


    //     //Remove error msg if any
    //     error && setError(!error)
    // }, [qty])

    return (
        <ProductContainer>
            {
                Object.entries(mainProduct).length !== 0 &&
                <>
                    <LeftContainer>
                        <Sticky>
                            <ImageContainer>
                                <ProductImage src={mainProduct.images[0].src} alt={mainProduct.images[0].alt} />
                            </ImageContainer>
                            <ReviewContainer>
                                <ReviewItem>Modem Portátil: u$d {cart.mainProductPrice} x{cart.qty}</ReviewItem>
                                <ReviewItem>Shipping Fee: u$d {cart.shippingFee}</ReviewItem>
                                <ReviewItem>Subtotal: u$d {cart.subtotal}</ReviewItem>
                                <ReviewItem>Total: u$d {cart.total}</ReviewItem>
                            </ReviewContainer>
                        </Sticky>
                    </LeftContainer>
                    <DescriptionContainer>
                        <Title>{mainProduct.attributes[1].options[0]}</Title>
                        <Description>{mainProduct.attributes[5].options[0]}</Description>
                        <Calendar
                            cart={cart}
                            setCart={setCart}
                            text="Seleccione una fecha"
                        />
                        <Select
                            options={mainProduct.attributes[4].options}
                            name="Países disponibles"
                            text="Seleccione un país"
                            cart={cart}
                            setCart={setCart}
                        />
                        <CheckBox label="Agregar un adaptador de viaje" cart={cart} setCart={setCart} extraProductData={adapter} value="adapter"/>
                        <CheckBox label="Agregar Power Bank" cart={cart} setCart={setCart} extraProductData={powerBank} value="powerBank"/>
                        <ButtonSecondaryLink to="/checkout">
                            {mainProduct.attributes[6].options[0]}
                        </ButtonSecondaryLink>
                    </DescriptionContainer>
                </>
            }
        </ProductContainer>
    )
}

export default Detail