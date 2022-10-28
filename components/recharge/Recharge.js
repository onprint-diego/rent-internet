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
        <Text>Texto que explique el tema de las recargas, etc.</Text>
        <RechargeForm cart={cart} setCart={setCart} data={data} />
      </InnerContainer>
    </Container>
  )
}

export default Recharge