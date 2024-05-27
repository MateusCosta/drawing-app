import React from 'react';
import { Wrapper } from './style';

interface PageWrapperProps {
    children: React.ReactNode
}

export default function PageWrapper(props:PageWrapperProps) {
  return (
    <Wrapper>
        {props.children}
    </Wrapper>
  )
}
