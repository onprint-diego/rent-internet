import { useState, useEffect } from 'react'
import Detail from '../../components/detail/Detail'
import { getProductDetails } from '../../utils/woocommerce'
import { GetProductsContext } from '../../context/ProductsContext'

const ProductDetail = ({ data }) => {

    const { products, setProducts } = GetProductsContext()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getProductDetails(setProducts, setLoading)
    }, [])

    return (
        <>
            {
                loading ? <>loading....</>: <Detail data={products} />
            }
        </>
    )
}

export default ProductDetail