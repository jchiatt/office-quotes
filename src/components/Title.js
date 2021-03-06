import React from 'react';
import styled from '@emotion/styled';

const StyledTitle = styled.h1`
  ${({ color }) => (color ? `color: ${color};` : null)}
  font-size: 2.5rem;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 4rem;
  }
`

export default function Title({ children, color }) {
  return <StyledTitle color={color}>{children}</StyledTitle>
}