import RechargeForm from '../forms/RechargeForm'
import { GetCartContext } from '../../context/CartContext'
import {
  Container,
  InnerContainer,
  Title,
  Text,
} from './Elements'

//Pagina de recargas
const Recharge = ({ data }) => {

  const { cart, setCart } = GetCartContext()

  return (
    <Container>
      <InnerContainer>
        <Title>Recargas</Title>
        <Text>Complete el siguiente formulario para solicitar una recarga.</Text>
        <RechargeForm cart={cart} setCart={setCart} data={data} />
      </InnerContainer>
    </Container>
  )
}

export default Recharge