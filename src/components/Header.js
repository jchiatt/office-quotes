import React from 'react';
import styled from '@emotion/styled';
import Inner from './Inner';
import Title from './Title';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${({ theme }) => theme.colors.primary};
`;

export default function Header({ hero }) {
  // If a page uses a hero section, we won't render this header
  if ( hero ) return null;

  return (
      <HeaderContainer>
        <Inner>
          <header>
            <Title color="white">Office Quotes</Title>
          </header>
        </Inner>
      </HeaderContainer>
  )
}