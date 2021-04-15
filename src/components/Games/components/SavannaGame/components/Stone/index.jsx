import React from 'react';
import { SVGContainer } from './styled';
import { useSpring, a, config } from 'react-spring';

function Stone() {
  const { translateY } = useSpring({
    loop: { reverse: true },
    from: { translateY: -5 },
    to: { translateY: 15 },
    config: config.wobbly,
  });
  const AnimatedSVGContainer = a(SVGContainer);
  return (
    <AnimatedSVGContainer style={{ translateY }}>
      <svg
        id="Layer_1"
        height="50"
        viewBox="0 0 512 512"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
      >
        <path d="m206.998 128.378-51.384-102.534-56.396 82.728 79.83 45.009z" />
        <path d="m175 162.624-78-43.811v274.374l78-43.811z" />
        <path d="m332.952 153.581 79.83-45.009-56.396-82.728-51.384 102.534z" />
        <path d="m215.1 135-30.1 26.927v188.146l30.1 26.927h81.8l30.1-26.927v-188.146l-30.1-26.927zm-6.1 121.974a5 5 0 0 1 -10 0v-67.844a5 5 0 0 1 10 0zm0-87.215a5 5 0 1 1 -10 0v-3.649a5 5 0 0 1 10 0z" />
        <path d="m295.74 125 51.888-104h-183.256l51.888 104z" />
        <path d="m337 349.376 78 43.811v-274.374l-78 43.811z" />
        <path d="m179.048 358.419-79.83 45.009 56.396 82.728 51.384-102.534z" />
        <path d="m305.002 383.622 51.384 102.534 56.396-82.728-79.83-45.009z" />
        <path d="m216.26 387-51.888 104h183.256l-51.888-104z" />
      </svg>
    </AnimatedSVGContainer>
  );
}

export default Stone;
