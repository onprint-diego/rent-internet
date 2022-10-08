import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.button`
  width: var(--button-width);
  height: var(--button-height);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  box-shadow: var(--button-shadow);
  font-size: 1rem;
  transition: all .5s ease-in-out;
`

//Component
export const BuyButton = ({ children, event }) => {
    return <Button onClick={event} >{children}</Button>
}