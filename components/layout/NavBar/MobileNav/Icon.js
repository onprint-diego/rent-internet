import React from 'react'
import { 
    Hamb,
    Span,
} from './Elements'

const Icon = ({ opened, setOpened }) => {
  return (
    <Hamb onClick={() => setOpened(!opened)}>
        <Span opened={opened} />
        <Span opened={opened} />
        <Span opened={opened} />
    </Hamb>
  )
}

export default Icon