import styled from "styled-components";

export const Container = styled.article`
  margin-bottom: 5%;

  opacity: ${(props) => (props.$removed ? 0.5 : 1)};
  color: ${(props) => (props.$removed ? '#f00' : '#fff')};
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Likes = styled.span`
  font-size: 0.7rem;
  color: green;
`;
