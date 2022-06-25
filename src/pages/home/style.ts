import styled from 'styled-components';
import { InlineWrapper } from '../../style/components';
import { TitleLabel } from '../../style/labels';

const { innerWidth: width } = window;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: url('https://i.imgur.com/PeqBw6j.jpg');
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled(TitleLabel)`
  position: absolute;
  font-weight: ${({ theme }) => theme.fontWeight.text};
  left: 50px;
  top: 50px;
`;

// export const DailyWrapper = styled(InlineWrapper)`
//   @media (max-width: 1024px) {
//     width: ${width}px;
//     overflow-x: scroll;
//     overflow-y: hidden;
//     justify-content: end;
//   }
// `;
