import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InlineWrapper = styled(ColumnWrapper)`
  display: flex;
  flex-direction: row;
`;
