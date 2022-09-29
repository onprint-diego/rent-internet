import '../styles/globals.css'
import CartContext from '../context/CartContext'
import Layout  from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <CartContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  )
}

export default MyApp
