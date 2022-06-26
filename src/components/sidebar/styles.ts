import styled from 'styled-components';

export const Wrapper = styled.aside`
  width: 500px;
  padding: 20px;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  align-items: center;
`;
