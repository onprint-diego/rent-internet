import {
    SkContainer,
    ProductContainer,
    SkLeftContainer,
    SkTitle,
    SkTitleSk,
    RightContainer,
    SkSummary,
    SkImgContainer,
    SkReviewItem,
} from './Elements'

const Skeleton = () => {
    return (
        <SkContainer>
            <ProductContainer>
                <SkLeftContainer>
                    <SkTitle>
                        <SkTitleSk />
                    </SkTitle>
                </SkLeftContainer>
                <RightContainer>
                    <SkSummary>
                        <SkImgContainer />
                        <SkReviewItem />
                        <SkReviewItem />
                        <SkReviewItem />
                        <SkReviewItem />
                    </SkSummary>
                </RightContainer>
            </ProductContainer>
        </SkContainer>
    )
}

export default Skeleton