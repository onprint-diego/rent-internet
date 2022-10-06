import { useEffect, useState } from 'react'
import Link from 'next/link'
import Calendar from '../calendar/Calendar'
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
} from './Elements'

//TODO inhabilitar el boton de Rent si no selecciono fechas

//Todos los detalles de producto vienen desde atributo en la página de productos de WP, no de custom fields

const Detail = ({ data }) => {

    console.log(data)

    const { setCart } = GetCartContext()
    const [ mainProduct, setMainProduct ] = useState({})
    //Set qty according to number of days - 1=14 days, 2=14days...
    const [ qty, setQty ] = useState(0)
    const [ dates, setDates ] = useState({})
    const [ error, setError ] = useState(false)

    const getRentedProductDetails = () => {

        //Check if at least 1 day was selected
        if(qty !== 0) {

            const shippingFee = parseInt(data.attributes[0].options[0])
            const subtotal = qty * parseInt(data.price)
            const total = subtotal + shippingFee

            console.log(shippingFee, subtotal, total)

            setCart({
                id: data.id,
                name: data.name,
                image:data.images[0].src,
                qty: qty,
                weeks: `${qty} weeks`,
                subtotal: subtotal,
                from: dates.from,
                to: dates.to,
                shippingFee: shippingFee,
                total: total, 
            })

        } else {
            setError(!error)
        }
    }

    useEffect(() => {

        const getMainProduct = () => {
            const modem = data.filter(item => item.name === "Modem")
            setMainProduct(...modem)
        } 

        getMainProduct()
    }, [])

    console.log(mainProduct)


    //TODO chequear si puedo refactorizarlo inhabilitando el boton
    useEffect(() => {
        //Por ejemplo, si cambia la cantidad y hay cantidad,
        //disabled(false), else disabled(true) y pasar estado
        //al boton


        //Remove error msg if any
        error && setError(!error)
    }, [qty])

    return (
        <ProductContainer>
            {
                Object.entries(mainProduct).length !== 0 &&
                <ImageContainer>
                    <ProductImage src={mainProduct.images[0].src} alt={mainProduct.images[0].alt} />
                </ImageContainer>
            }
            {/* <DescriptionContainer>
                <Title>{data?.name}</Title>
                <Description>{data?.description}</Description>
                <Calendar setQty={setQty} setDates={setDates} />
                { error && <Error>Tenes que seleccionar al menos 1 dia</Error>}
                <Link href='/checkout'>
                    <LinkSpan onClick={getRentedProductDetails}>Rent</LinkSpan>
                </Link>
            </DescriptionContainer> */}
        </ProductContainer>
    )
}

export default Detail