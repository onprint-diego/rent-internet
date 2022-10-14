import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const FormSection = styled.div`
    padding-bottom: .8rem;
`

export const SectionTitle = styled.h4`
    padding-bottom: .8rem;
    border-bottom: 1px solid var(--soft-lines-color);
`

export const InputContainer = styled.div`
    margin: 1rem 0;
`

export const Input = styled.input`
    width: 22rem;
    border: 1px solid var(--soft-lines-color);
    border-radius: 4px;
    padding: .6rem .8rem;

    &&::placeholder {
        color: var(--soft-color);
    }
`

export const CheckBoxContainer = styled.div`
    display: flex;
    padding-bottom: 1.7rem;
`

export const CheckBox = styled.input`
    margin-left: 1rem;
`

export const Label = styled.label`

`

export const BillingSection = styled.div`
    overflow: hidden;
    margin-bottom: .8rem;
    max-height: ${({billingNeeded}) => billingNeeded ? '100rem' : 0};
    transition: all .5s ease-in-out;
`

export const Error = styled.p`
    color: red;
`

export const MethodSelectContainer = styled.div`
    position: relative;
    width: 20rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--soft-lines-color);
`

export const Method = styled.button`
    height: 5rem;
    width: 50%;
    text-align: center;
    z-index: 1;
`

export const MethodBox = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    transform: ${({paymentMethod}) => paymentMethod ? 'translateX(0)' : 'translateX(100%)'};
    background-color: var(--soft-color);
    transition: transform .2s ease-in-out;
`