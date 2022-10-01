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

const Detail = ({ data }) => {

    const { setCart } = GetCartContext()
    //Set qty according to number of days - 1=14 days, 2=14days...
    const [ qty, setQty ] = useState(0)
    const [ dates, setDates ] = useState({})
    const [ error, setError ] = useState(false)

    const getProductDetails = () => {

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
        //Remove error msg if any
        error && setError(!error)
    }, [qty])

    return (
        <ProductContainer>
            <ImageContainer>
                <ProductImage src={data?.images[0].src} alt={data?.images[0].alt} />
            </ImageContainer>
            <DescriptionContainer>
                <Title>{data?.name}</Title>
                <Description>{data?.description}</Description>
                <Calendar setQty={setQty} setDates={setDates} />
                { error && <Error>Tenes que seleccionar al menos 1 dia</Error>}
                <Link href='/checkout'>
                    <LinkSpan onClick={getProductDetails}>Rent</LinkSpan>
                </Link>
            </DescriptionContainer>
        </ProductContainer>
    )
}

export default Detail