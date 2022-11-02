import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(208.39deg, #1966D1 57.39%, #3483FA 57.39%);
    padding-bottom: 3rem;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InnerContainer = styled.article`
    width: 30rem;
    min-height: 33.25rem;
    position: relative;
    top: 1rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
`

export const Title = styled.h1`
    font-size: 1.4rem;
    padding-bottom: .8rem;
    border-bottom: 1px solid var(--soft-lines-color);
    margin-bottom: .4rem;
`

export const Text = styled.p`
    font-size: .9rem;
    margin-bottom: .7rem;
`

//SKELETON
const load = keyframes`
    from { left: -100%}
    to { left: 100%;}
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

export const SkText = styled.div`
    position: relative;
    padding-bottom: .7rem;
    margin-bottom: .5rem;
`

export const SkTextFill = styled.div`
    position: relative;
    width: 100%;
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

export const SkField = styled.div`
    position: relative;
    padding-bottom: .5rem;
    margin-bottom: .5rem;
`

export const SkFieldFill = styled.div`
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