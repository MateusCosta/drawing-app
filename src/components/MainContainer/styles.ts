import styled, { keyframes } from "styled-components";
import pattern from "../../assets/images/pattern.png?url";

const pan = keyframes`
    from { background-position: 0% 0%;}
    to { background-position: 100% 0%;}
`;



export const RadialBackground = styled.div`
    background: radial-gradient(circle, transparent 45%, #75b5ff);
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.9;

`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${pattern});
  background-size: 10%;
  animation: ${pan} 180s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Title = styled.h1``;

export const Subtitle = styled.h3``;
