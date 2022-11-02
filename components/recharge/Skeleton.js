import {
    Container,
    InnerContainer,
    SkField,
    SkFieldFill,
    SkText,
    SkTextFill,
    SkTitle,
    SkTitleFill,
} from './Elements'

const Skeleton = () => {
  return (
    <Container>
        <InnerContainer>
            <SkTitle><SkTitleFill /></SkTitle>
            <SkText><SkTextFill /></SkText>
            <SkText><SkTextFill /></SkText>
            <SkField><SkFieldFill /></SkField>
            <SkText><SkTextFill /></SkText>
            <SkField><SkFieldFill /></SkField>
            <SkText><SkTextFill /></SkText>
            <SkField><SkFieldFill /></SkField>
        </InnerContainer>
    </Container>
  )
}

export default Skeleton