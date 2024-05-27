import React from 'react'
import { Container } from './styles'

interface MainContainerProps {
    children: React.ReactNode
}

export default function MainContainer(props: MainContainerProps) {
  return (
    <>
     <Container>
        {props.children}
     </Container>
   </>
  )
}
