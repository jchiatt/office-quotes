import React from 'react';
import styled from '@emotion/styled';
import Inner from './Inner';

const FooterContainer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  a {
    color: ${({ theme }) => theme.colors.gold};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <Inner>
        Made with{" "}
        <span role="img" aria-label="heart emoji.">
          ❤️
        </span>{" "}
        by{" "}
        <a href="https://jchiatt.com" title="Visit J.C. Hiatt's portfolio.">
          J.C. Hiatt
        </a>
      </Inner>
    </FooterContainer>
  )
}