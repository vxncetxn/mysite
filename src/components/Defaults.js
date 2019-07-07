import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Fira+Sans:600,600i,900,900i&display=optional");
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600&display=optional");

    :root {
      --font-primary: Fira Sans;
      --font-secondary: Source Sans Pro;

      --color-primary: hsl(205, 74%, 65%);
      --color-primary-dark: hsl(211, 39%, 23%);
      --color-primary-darker: hsl(212, 37%, 10%);
      --color-primary-filter: hsla(205, 74%, 65%, 0.5);
      --color-secondary: hsl(360, 71%, 66%);
      --color-tertiary: hsl(42, 87%, 55%);
      --color-white: #fcfcfc;
      --color-gray: hsl(0, 0%, 96%);

      --clip-main: polygon(85% 0, 100% 21%, 95% 96%, 8% 100%, 8% 10%);
      --clip-contact: polygon(36% 0, 100% 15%, 100% 100%, 12% 100%);

      --transform-down: translateY(-100vh);
      --transform-up: translateY(100vh);
      --transform-right: translateX(-100vw);
      --transform-left: translateX(100vw);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
      position: relative;
      // overflow-x: hidden;
      // border: 5px solid blue;
      background-color: #eef2f6;
    }

    ul {
      list-style: none;
    }

    .text-highlight {
      display: inline-block;
      line-height: 0.6;
      border-bottom: 8px solid var(--color-tertiary);
    }

    // Animations
    .hvr-sweep-to-left:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      background: var(--color-primary);
      transform: scaleX(0);
      transform-origin: 148% 0;
      transition-property: transform;
      transition-duration: 0.2s;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 14% 100%);
    }
    .hvr-sweep-to-left:hover:before, .hvr-sweep-to-left:focus:before, .hvr-sweep-to-left:active:before {
      transform: scaleX(1);
    }

    .hvr-sweep-to-right:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--color-tertiary);
      transform: scaleX(0);
      transform-origin: -50% 0;
      transition-property: transform;
      transition-duration: 0.2s;
      clip-path: polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%);
    }
    .hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {
      transform: scaleX(1);
    }

    .page-transition-to-down {
      transform: var(--transform-down);
    }

    .page-transition-to-up {
        transform: var(--transform-up);
    }

    .page-transition-to-right {
      transform: var(--transform-right);
    }

    .page-transition-to-left {
      transform: var(--transform-left);
    }
`;

export default Defaults;
