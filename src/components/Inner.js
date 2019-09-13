import React from 'react';
import styled from '@emotion/styled';

const StyledInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1rem;
`

export default function Inner({ children }) {
  return <StyledInner>{children}</StyledInner>
}