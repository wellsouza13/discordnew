import styled from "styled-components";
import { Add, ExpandMore } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const OtherIcon = styled(ExpandMore)`
  width: 24px;
  height: 24px;
  margin-left: -10px;

  color: var(--white);
  cursor: pointer;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  > span {
    width: 300px;
    text-transform: uppercase;
    margin-left: 4px;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
  cursor: pointer;
`;
