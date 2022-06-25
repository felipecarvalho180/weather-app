import styled from 'styled-components';
import { ColumnWrapper, InlineWrapper } from '../../style/components';
import { TitleLabel } from '../../style/labels';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: url('https://i.imgur.com/PeqBw6j.jpg');
  background-size: cover;
`;

export const ContentWrapper = styled(ColumnWrapper)`
  flex: 1;
  padding: 50px;
  justify-content: space-between;
`;

export const Title = styled(TitleLabel)`
  font-weight: ${({ theme }) => theme.fontWeight.text};
`;

export const Loading = styled(InlineWrapper)`
  align-items: flex-end;
  > :first-child {
    margin-right: 5px;
  }
`;
