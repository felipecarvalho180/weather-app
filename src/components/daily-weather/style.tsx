import styled from 'styled-components';
import { BACKGROUND_COLOR, SECONDARY_COLOR } from '../../style/colors';
import { ColumnWrapper, InlineWrapper } from '../../style/components';
import { Label } from '../../style/labels';

export const Wrapper = styled(InlineWrapper)`
  :not(:last-child) {
    &:after {
      content: '';
      width: 5px;
      background-color: ${BACKGROUND_COLOR};
      height: 100px;
      border-radius: 2px;
      -webkit-box-shadow: 2px 2px 15px -1px #000000;
      box-shadow: 2px 2px 15px -1px #000000;
    }
  }
`;

export const ContentWrapper = styled(ColumnWrapper)`
  padding: 0 20px;
`;

export const PrimaryLabel = styled(Label)`
  font-size: 25px;
`;

export const SecondaryLabel = styled(PrimaryLabel)`
  color: ${SECONDARY_COLOR};
`;
