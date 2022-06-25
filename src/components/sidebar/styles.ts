import styled from 'styled-components';

export const Container = styled.aside`
  width: 500px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 80%;
`;
