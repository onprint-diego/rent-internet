import { useEffect, useState } from 'react'
import Recharge from "../../components/recharge/Recharge"
import { getProducts } from "../../utils/woocommerce"

const RechargePage = () => {

  const [wooProducts, setWooProducts] = useState([])
  const [products, setProducts] = useState({})

  useEffect(() => {
    getProducts(setWooProducts)
  }, [])

  useEffect(() => {

    if(wooProducts.length !== 0) {
      const largeProduct = wooProducts.find(product => product.slug === '50gb-extra')
      const smallProduct = wooProducts.find(product => product.slug === '25gb-extra')
      setProducts({
        largeProduct: largeProduct,
        smallProduct: smallProduct,
      })
    }

  }, [wooProducts])

  return (
    <>
    {
        // loading ? <Skeleton />: <Recharge data={products} />
        Object.entries(products).length === 0 ? 'loading' : <Recharge data={products} />
    }
</>
  )
}

export default RechargePage