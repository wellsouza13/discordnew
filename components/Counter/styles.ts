import styled, { css } from "styled-components";

export interface Props {
  limitMax: boolean;
  minCount: boolean;
}

export const Container = styled.div<Props>`
  color: var(--symbol);
  text-align: right;
  margin: 5px 0 5px 0;

  font-size: 14px;
  #count {
    color: var(--symbol);
  }

  #max {
    color: var(--symbol);
  }

  ${(props) =>
    props.minCount &&
    css`
      #count {
        color: red;
      }
    `} /* ${(props) =>
    props.limitMax &&
    css`
      #count {
        color: red;
      }
    `} */

    /* ${(props) =>
    props.limitMax &&
    css`
      #count {
        color: green;
      }
    `} */

    ${(props) =>
    props.limitMax &&
    css`
      #max {
        color: red;
      }
    `}
`;
