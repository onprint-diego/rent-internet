import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(138.9deg, #3483FA 43.95%, #1966D1 43.95%, #1966D1 61.9%);
    padding-bottom: 3rem;
`

export const ProductContainer = styled.article`
    margin: 0 auto;
    padding-bottom: 1.5rem;
    width: 95%;
    max-width: var(--section-max-width);
    min-height: var(--section-min-height);
    position: relative;
    padding-top: 3.5rem;
    display: flex;

    @media all and (max-width: 768px) {
        padding-top: 2.5rem;
    }

    @media all and (max-width: 450px) {
        padding-top: 1.5rem;
    }
`

export const RightContainer = styled.div`
    width: 30%;
    margin-left: 2rem;

    @media all and (max-width: 1024px) {
        width: 35%;
        margin-left: 1rem;
    }

    @media all and (max-width: 768px) {
        display: none;
    }
`

export const LeftContainer = styled.div`
    width: 60%;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
    margin-left: 5rem;

    @media all and (max-width: 1024px) {
        margin-left: 1rem;
    }

    @media all and (max-width: 768px) {
        width: 85%;
        margin: 0 auto;
    }

    @media all and (max-width: 550px) {
        width: 99%;
    }

    @media all and (max-width: 450px) {
        padding: 1rem;
    }
`

export const Title = styled.h1`
    border-bottom: 1px solid var(--soft-lines-color);
    font-size: 2.5rem;
    padding-bottom: .7rem;
    margin-bottom: .5rem;

    @media all and (max-width: 450px) {
        font-size: 2rem;
    }
`

export const Description = styled.p`
    @media all and (max-width: 450px) {
        font-size: .9rem;
    }
`

export const Error = styled.p`

`

export const CheckBoxContainer = styled.div`
    width: 100%;
    border-top: 1px solid var(--soft-lines-color);
    border-bottom: 1px solid var(--soft-lines-color);
    padding: 1rem 0;
    margin-bottom: 2rem;
`

//MOBILE
export const FixedContainer = styled.div`
    position: fixed;
    bottom: -5rem;
    left: 0;
    width: 100%;
    padding: 2rem;
    display: none;
    background-color: #ffffff;

    @media all and (max-width: 768px) {
        display: block;
    }
`

//SKELETON
const load = keyframes`
    from { left: -100%}
    to { left: 100%;}
`

export const SkContainer = styled.div`
    width: 100%;
    background: linear-gradient(138.9deg, #3483FA 43.95%, #1966D1 43.95%, #1966D1 61.9%);
    padding-bottom: 3rem;
`

export const SkLeftContainer = styled.div`
    width: 60%;
    min-height: 56rem;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
    margin-left: 5rem;

    @media all and (max-width: 1024px) {
        margin-left: 1rem;
    }

    @media all and (max-width: 768px) {
        width: 85%;
        margin: 0 auto;
    }

    @media all and (max-width: 550px) {
        width: 99%;
    }

    @media all and (max-width: 450px) {
        padding: 1rem;
    }
`

export const SkTitle = styled.div`
    position: relative;
    border-bottom: 1px solid var(--soft-lines-color);
    padding-bottom: .7rem;
    margin-bottom: .5rem;
`

export const SkTitleFill = styled.div`
    position: relative;
    width: 60%;
    height: 2.5rem;
    overflow: hidden;
    border-radius: 5px;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, transparent 0%,  #F4F4F4 45%, #EFEFEF 75%, transparent 100%);
        animation: ${load} 1.3s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }
`

export const SkDescription = styled.div``


export const SkDescriptionFill = styled.div`
    position: relative;
    width: 95%;
    height: 2.5rem;
    overflow: hidden;
    border-radius: 5px;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, transparent 0%,  #F4F4F4 45%, #EFEFEF 75%, transparent 100%);
        animation: ${load} 1.3s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }
`

export const SkLabel = styled.div`
    margin-top: 2.5rem;
`

export const SkLabelFill = styled.div`
    position: relative;
    width: 15rem;
    height: 1.5rem;
    overflow: hidden;
    border-radius: 5px;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, transparent 0%,  #F4F4F4 45%, #EFEFEF 75%, transparent 100%);
        animation: ${load} 1.3s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }
`

export const SkCalendar = styled.div`
    margin-top: 2.5rem;
`

export const SkCalendarFill = styled.div`
    position: relative;
    border-radius: 5px;
    width: 20rem;
    height: 25rem;
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, transparent 0%,  #F4F4F4 45%, #EFEFEF 75%, transparent 100%);
        animation: ${load} 1.3s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }

    @media all and (max-width: 450px) {
        width: 100%;
    }
`

export const SkSummary = styled.div`
    position: sticky;
    top: 5rem;
    background-color: #ffffff;
    box-shadow: var(--container-shadow);
    border-radius: 5px;
    padding: 1.5rem;
    min-height: 23rem;
`

export const SkImgContainer = styled.div`
    position: relative;
    width: 55%;
    margin: 0 auto;
    min-height: 11rem;
    overflow: hidden;
    border-radius: 5px;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, transparent 0%,  #F4F4F4 45%, #EFEFEF 75%, transparent 100%);
        animation: ${load} 1.3s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }
`

export const SkReviewItem = styled.div`
    margin-top: .5rem;
`

export const SkReviewTotalItem = styled.div`
    margin-top: .5rem;
    margin-bottom: 1.4rem;
    padding-top: .7rem;
    height: 1.6rem;
    border-top: 1px solid var(--soft-lines-color);
`

export const SkReviewItemFill = styled.div`
    position: relative;
    overflow-x: hidden;
    min-height: 1.5rem;
    height: 100%;
    border-radius: 2px;
    
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, transparent 0%,  #F4F4F4 45%, #EFEFEF 75%, transparent 100%);
        animation: ${load} 1.3s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
        z-index: 2;
    }
`