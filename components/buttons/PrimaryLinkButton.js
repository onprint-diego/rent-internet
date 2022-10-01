import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

//Styles
const Button = styled.button`
  background-color: var(--black);
  color: #ffffff;
  padding: .5rem .9rem;
`


//Component
const PrimaryButton = ({children, to}) => {
  return (
    <Link href={to}>
      <Button>{children}</Button>
    </Link>
  )
}

export default PrimaryButton