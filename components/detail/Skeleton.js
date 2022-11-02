import {
    SkContainer,
    ProductContainer,
    SkLeftContainer,
    SkTitle,
    SkTitleFill,
    SkDescription,
    SkDescriptionFill,
    SkLabel,
    SkLabelFill,
    SkCalendar,
    SkCalendarFill,
    RightContainer,
    SkSummary,
    SkImgContainer,
    SkReviewItem,
    SkReviewItemFill,
    SkReviewTotalItem
} from './Elements'

const Skeleton = () => {
    return (
        <SkContainer>
            <ProductContainer>
                <SkLeftContainer>
                    <SkTitle><SkTitleFill /></SkTitle>
                    <SkDescription><SkDescriptionFill /></SkDescription>
                    <SkLabel><SkLabelFill /></SkLabel>
                    <SkCalendar><SkCalendarFill /></SkCalendar>
                </SkLeftContainer>
                <RightContainer>
                    <SkSummary>
                        <SkImgContainer />
                        <SkReviewItem><SkReviewItemFill /></SkReviewItem>
                        <SkReviewItem><SkReviewItemFill /></SkReviewItem>
                        <SkReviewItem><SkReviewItemFill /></SkReviewItem>
                        <SkReviewTotalItem><SkReviewItemFill /></SkReviewTotalItem>
                    </SkSummary>
                </RightContainer>
            </ProductContainer>
        </SkContainer>
    )
}

export default Skeleton