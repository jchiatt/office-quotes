import React from 'react';
import Inner from './Inner';

export default function Footer() {
  return (
    <>
      <Inner>
        <footer>
          Made with{" "}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>{" "}
          by J.C. Hiatt
        </footer>
      </Inner>
    </>
  )
}