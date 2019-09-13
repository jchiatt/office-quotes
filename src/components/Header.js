import React from 'react';
import styled from '@emotion/styled';
import Inner from './Inner';
import Title from './Title';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${({ hero }) => hero ? '160px' : '80px'};
  background: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export default function Header({ hero }) {
  return (
    <HeaderContainer hero={hero}>
      <Inner>
        <header>
          <Title color="white">Office Quotes</Title>
        </header>
      </Inner>
    </HeaderContainer>
  )
}