import { useEffect, useState } from 'react'
import Calendar from '../calendar/Calendar'
import Select from '../select/Select'
import CheckBox from '../checkbox/CheckBox'
import Summary from '../summary/Summary'
import MobileSummary from '../summary/MobileSummary'
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
    FixedContainer,
} from './Elements'

const Detail = ({ data, loading }) => {

    const { cart, setCart } = GetCartContext()
    const [mounted,setMounted] = useState(false)
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

    useEffect(() => setMounted(true), [])

    if(!mounted) return null

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
                            <PrimaryButton to="/checkout" disabled={disabled}>
                                {mainProduct.attributes[6].options[0]}
                            </PrimaryButton>
                        </LeftContainer>
                        <RightContainer>
                            <Summary cart={cart} mainProduct={mainProduct} />
                        </RightContainer>
                        <MobileSummary cart={cart} mainProduct={mainProduct} />
                    </>
                }
            </ProductContainer>
        </Container>

    )
}

export default Detail