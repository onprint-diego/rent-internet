import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Container,
  ImgContainer,
  Img,
} from './Styled'

//PLACEHOLDERS
import ExImg from '/public/placeholder.jpg'

const ExpoItem = ({ data }) => {

  const router = useRouter()
  const { title, body, tags } = data

  return (
    <Container>
      <ImgContainer>
        <Img src={ExImg} />
      </ImgContainer>
      <h3>{title}</h3>
      {/* <p>{body}</p>
      <div>{tags.map(item => <span>{item} </span>)}</div> */}
      <Link href={`/${data.id}`}>More...</Link>
    </Container>
  )
}

export default ExpoItem