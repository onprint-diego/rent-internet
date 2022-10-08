import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.button`
  width: var(--button-width);
  height: var(--button-height);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  color: var(--primary-color);
  font-size: 1rem;
  transition: all .5 ease-in-out;
  box-shadow: var(--button-shadow);
  background: #ffffff;

  &:hover {
    border: 2px solid var(--styled-light-blue);
    color: var(--styled-light-blue);
  }

`

//Component
export const ButtonSecondaryPage = ({children}) => {
  return (
    <Button>{children}</Button>
  )
}

export const ButtonSecondaryLink = ({children, to}) => {
  return (
    <Link href={to}>
      <Button>{children}</Button>
    </Link>
  )
}
