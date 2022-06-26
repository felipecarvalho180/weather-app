import styled from 'styled-components';
import { ColumnWrapper, InlineWrapper } from '../../style/components';

export const Wrapper = styled(InlineWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContentWrapper = styled(ColumnWrapper)`
  width: 100%;
  padding: 20px;
  padding-bottom: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blackOpacity5};
  -webkit-box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.3);
  justify-content: center;
`;

export const Icon = styled.img`
  width: 100px;
  align-self: flex-end;
`;
