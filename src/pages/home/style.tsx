import styled from 'styled-components';
import { InlineWrapper } from '../../style/components';

const { innerWidth: width } = window;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
`;

export const DailyWrapper = styled(InlineWrapper)`
  @media (max-width: 1024px) {
    width: ${width}px;
    overflow-x: scroll;
    overflow-y: hidden;
    justify-content: end;
  }
`;
