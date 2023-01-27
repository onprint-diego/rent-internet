import styled from 'styled-components'

export const Sticky = styled.div`
    position: sticky;
    top: 5rem;
`

export const TopContainer = styled.div`
    background-color: #ffffff;
    box-shadow: var(--container-shadow);
    border-radius: 5px;
    padding: 1.5rem;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 55%;
    margin: 0 auto;
    padding: 1rem 0;
`

export const ProductImage = styled.img`
    width: 100%;
`

export const ReviewContainer = styled.div`
    position: relative;
`

export const ReviewItem = styled.p`
    font-size: .9rem;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;

    @media all and (min-width: 768px) {
        &:last-child {
            border-top: 1px solid var(--soft-lines-color);
            padding-top: .5rem;
            margin-top: .7rem;
            font-size: 1.2rem;
        }
    }
`

export const Bold = styled.span`
    font-weight: 500;
    position: relative;
`

export const Soft = styled.span`
    color: var(--soft-color);
`

export const Small = styled.span`
    color: var(--soft-color);
    font-size: .7rem;
`

export const Remark = styled.span`
    color: var(--alert-color);
`

export const FootNote = styled.p`
    padding: .5rem 1rem;
    font-size: .7rem;
    color: #ffffff;
`

export const FootLink = styled.span`
    color: #ffffff;
    cursor: pointer;
    text-decoration: underline;
`

export const TooltipIcon = styled.span`
    position: absolute;
    right: -.9rem;
    top: 0;
    border-radius: 500px;
    border: 1px solid var(--text-primary-color);
    width: .7rem;
    height: .7rem;
    font-size: .6rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TooltipContainer = styled.div`
    position: absolute;
    top: 0;
    left: -1rem;
    width: 10rem;
    background-color: rgba( 0, 0, 0, 1);
    padding: .2rem;
`

export const TooltipMsj = styled.p`
    font-size: .7rem;
    color: #ffffff;
`


// MOBILE
export const Fixed = styled.div`
    position: fixed;
    bottom: -1.5rem;
    left: 0;
    z-index: 100;
    width: 100%;
    cursor: pointer;

    @media all and (min-width: 768px) {
        display: none;
    }
`

export const MobileImageContainer = styled.div`
    position: relative;
    width: 55%;
    margin: 0 auto;
    padding: 1rem 0;
`

export const TotalItem = styled.p`
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--soft-lines-color);
    font-size: 1.2rem;
`

export const Body = styled.div`
    max-height: ${({open}) => open ? '100rem' : '0rem'};
    transition: all .3s ease-in-out;
    overflow: hidden;
`

// POP
export const PopContainer = styled.div`
    background-color: rgba(250, 250, 250, .8);
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;
    translate: all .3s ease-in-out;
`

export const PopInner = styled.div`
    position: relative;
    background-color: #ffffff;
    box-shadow: var(--container-shadow);
    border-radius: 5px;
    padding: 1.5rem;
    width: 25rem;
`

export const Msj = styled.p`

`

export const CloseButton = styled.button`
    position: absolute;
    top: .5rem;
    right: .5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 500px;
    background-color: #edededed;
    display: flex;
    justify-content: center;
    align-items: center;
`