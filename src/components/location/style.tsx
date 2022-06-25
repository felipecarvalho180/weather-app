import styled from 'styled-components';
import { InlineWrapper } from '../../style/components';
// import { Label } from '../../style/labels';

export const AddressWrapper = styled(InlineWrapper)`
  @media (min-width: 641px) {
    span {
      :first-child {
        margin-right: 5px;

        &:after {
          content: ',';
        }
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

// export const AddressLabel = styled(Label)`
//   margin-bottom: 0;
//   font-size: 40px;
// `;

// export const DateLabel = styled(Label)`
//   font-size: 16px;
//   text-align: center;
// `;
