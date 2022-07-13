import styled from "styled-components";

export const Scroll = styled.div`
  text-align: center;
  height: 80vh;
  max-height: 80vh;
  overflow-y: auto;
`;

export const CommentBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoardTable = styled.table`
  width: 90%;
  height: 60vh;
  border-collapse: collapse;
  BoardTable th,
  td {
    border: 2px solid deepskyblue;
  }
`;

export const THead = styled.thead`
  height: 3em;
  font-size: 30px;
  font-weight: 550;
  color: white;
  background: deepskyblue;
`;

export const TdNo = styled.td`
  width: 15vw;
`;

export const TdTitle = styled.td`
  width: 35vw;
`;
export const TdCommenter = styled.td`
  width: 25vw;
`;

export const TdDate = styled.td`
  width: 20vw;
`;

export const Img = styled.img`
  width: 20px;
`;

export const Border = styled.span`
  border: 3px solid rosybrown;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px;
  background: turquoise;
  &:hover {
    border: 6px solid rosybrown;
    color: black;
  }
`;

export const BlackSpan = styled.span`
  color: black;
  &:hover {
    color: white;
    background: turquoise;
    border-radius: 10px;
  }
`;

export const Alignment = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageDiv = styled.div`
  margin-top: 20px;
`;

export const PageSpan = styled.span`
  color: black;
  &:hover {
    color: white;
    background: turquoise;
    border-radius: 10px;
    padding: 5px 0px 5px 0px;
  }
`;

export const PaginationSpan = styled.span`
  text-align: center;
  border: 1px solid black;
  padding: 5px 5px 5px 5px;
  &[aria-current] {
    background-color: mediumslateblue;
    color: white;
  }
`;

export const IButton = styled.span`
  text-align: center;
  border: 1px solid black;
  background: white;
  padding: 5px 5px 5px 5px;
  margin-top: 0;
  &:hover {
    border: 3px solid turquoise;
  }
`;
