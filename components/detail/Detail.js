import { useEffect, useState } from 'react'
import Calendar from '../calendar/Calendar'
import Select from '../select/Select'
import CheckBox from '../checkbox/CheckBox'
import Summary from '../summary/Summary'
import { PrimaryButton } from '../shared/PrimaryButton/PrimaryButton'
import { GetCartContext } from '../../context/CartContext'
import {
    Container,
    ProductContainer,
    RightContainer,
    Title,
    Description,
    Error,
    LinkSpan,
    LeftContainer,
    CheckBoxContainer,
} from './Elements'

const Detail = ({ data, loading }) => {

    const { cart, setCart } = GetCartContext()
    const [mainProduct, setMainProduct] = useState({})
    const [adapter, setAdapter] = useState({ product: {}, is: false })
    const [powerBank, setPowerBank] = useState({ product: {}, is: false })
    const [deposit, setDeposit] = useState({})
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        if (Object.entries(mainProduct).length !== 0) {

            const shippingFee = parseInt(mainProduct.attributes[0].options[0])
            const mainProductPrice = parseInt(mainProduct.price)
            const depositFee = parseInt(deposit.price)
            const subtotal = mainProductPrice
            const total = subtotal + shippingFee + depositFee

            //SET MAIN PRODUCT BY DEFAULT IN CART
            setCart({
                id: mainProduct.id,
                name: mainProduct.name,
                image: mainProduct.images[0].src,
                mainProductPrice: mainProductPrice,
                qty: 1,
                shippingFee: shippingFee,
                deposit: depositFee,
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
            const product = data.find(item => item.slug === "modem")
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

        const getDeposit = () => {
            const product = data.find(item => item.slug === "deposito")
            setDeposit(product)
        }

        getDeposit()
        getMainProduct()
        getAdapter()
        getPowerBank()
    }, [])

    // console.log(data)

    // //TODO chequear si puedo refactorizarlo inhabilitando el boton
    // useEffect(() => {
    //     //Por ejemplo, si cambia la cantidad y hay cantidad,
    //     //disabled(false), else disabled(true) y pasar estado
    //     //al boton


    //     //Remove error msg if any
    //     error && setError(!error)
    // }, [qty])

    return (
        <Container>
            <ProductContainer>
                {
                    Object.entries(mainProduct).length !== 0 && 
                    Object.entries(cart).length !== 0 &&
                    <>
                        <LeftContainer>
                            <Title>{mainProduct.attributes[1].options[0]}</Title>
                            <Description>{mainProduct.attributes[5].options[0]}</Description>
                            <Calendar
                                cart={cart}
                                setCart={setCart}
                                text="Seleccione una fecha"
                                setDisabled={setDisabled}
                            />
                            <Select
                                options={mainProduct.attributes[4].options}
                                name="Países disponibles"
                                text="Seleccione un país"
                                cart={cart}
                                setCart={setCart}
                            />
                            <CheckBoxContainer>
                                <CheckBox label="Agregar un adaptador de viaje" cart={cart} setCart={setCart} extraProductData={adapter} value="adapter" />
                                <CheckBox label="Agregar Power Bank" cart={cart} setCart={setCart} extraProductData={powerBank} value="powerBank" />
                            </CheckBoxContainer>
                            <PrimaryButton to="/checkout" disabled={disabled} onClick={() => console.log('hola')}>
                                {mainProduct.attributes[6].options[0]}
                            </PrimaryButton>
                        </LeftContainer>
                        <RightContainer>
                            <Summary cart={cart} mainProduct={mainProduct} />
                        </RightContainer>
                    </>
                }
            </ProductContainer>
        </Container>

    )
}

export default Detail