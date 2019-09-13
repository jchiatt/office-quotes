import React from 'react';
import styled from '@emotion/styled';
import Inner from './Inner';

const FooterContainer = styled.footer`
  height: 60px;
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
`;

const FlexContainer = styled.div`
  display: flex;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Inner>
        <FlexContainer>
          <p>
            Made with{" "}
            <span role="img" aria-label="heart emoji.">
              ❤️
            </span>{" "}
            by{" "}
            <a href="https://jchiatt.com" title="Visit J.C. Hiatt's portfolio.">
              J.C. Hiatt
            </a>
          </p>
        </FlexContainer>
      </Inner>
    </FooterContainer>
  )
}