import React from 'react';
import styled from '@emotion/styled';

const CarouselContainer = styled.div`

`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ImageContainer = styled.div`
  max-width: 280px;
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: unset;
    width: 30%;
    margin: 0;
    padding: 4rem 0;
  }

  img {
    width: 100%;
  }
`

export default function Carousel() {
  return (
    <CarouselContainer>
      <ImagesContainer>
        <ImageContainer>
          <img src="https://placeimg.com/320/320/people" alt="REPLACE ME" />
        </ImageContainer>
        <ImageContainer>
          <img src="https://placeimg.com/320/320/people" alt="REPLACE ME" />
        </ImageContainer>
        <ImageContainer>
          <img src="https://placeimg.com/320/320/people" alt="REPLACE ME" />
        </ImageContainer>
      </ImagesContainer>
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </CarouselContainer>
  )
}