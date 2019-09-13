import React from "react"
import styled from "@emotion/styled"
import Inner from "./Inner"
import Title from "./Title"

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

export default function Hero({ children }) {
  return (
    <HeroContainer>
      <Inner>
        <header>
          <Title color="white">Office Quotes</Title>
          {children}
        </header>
      </Inner>
    </HeroContainer>
  )
}
