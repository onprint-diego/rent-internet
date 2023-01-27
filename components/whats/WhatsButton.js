import { useRouter } from 'next/router'
import { Button, Img, ImgContainer } from './Elements'

const WhatsButton = () => {

  const router = useRouter()

  return (
    <Button
      href="https://api.whatsapp.com/send?phone=41779456095"
      target="_blank"
      rel="noopener noreferrer"
      hide={router.pathname !== '/checkout/' }
    >
      <ImgContainer>
        <Img src="/whats-icon.png" alt="whatsapp icon" layout="fill" />
      </ImgContainer>
    </Button>
  )
}

export default WhatsButton