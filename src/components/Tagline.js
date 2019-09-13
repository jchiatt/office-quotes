import React from 'react';
import styled from '@emotion/styled'

const StyledTagline = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
`

export default function Tagline({ children }) {
  return <StyledTagline>{children}</StyledTagline>
}