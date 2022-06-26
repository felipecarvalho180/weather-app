import styled from 'styled-components';

export const Wrapper = styled.aside`
  width: 500px;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 885px) {
    width: auto;
  }

  @media (max-width: 455px) {
    overflow-y: unset;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  align-items: center;

  @media (max-width: 455px) {
    grid-template-columns: 1fr;
  }
`;
