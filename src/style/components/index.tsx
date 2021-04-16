import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InlineWrapper = styled(ColumnWrapper)`
  flex-direction: row;
`;
