import styled from "styled-components";

export const CommentBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const CommentDiv = styled.div`
  margin: 10px;
  text-align: center;
  padding: 10px;
  border: 1px solid midnightblue;
  width: 20em;
  background: paleturquoise;
  border-radius: 20px;
`;

export const InputDiv = styled.div`
  padding-top: 10px;
`;

export const Text = styled.input`
  height: 20px;
  border: 0.5px solid black;
  border-radius: 10px;
  margin-left: 10px;
  text-align: center;
`;

export const Button = styled.input`
  margin: 10px 5px 0 5px;
  padding: 5px;
  width: 8em;
  border: 1px solid dimgray;
  border-radius: 5px;
  background: snow;

  &:hover {
    border: 3px solid dimgray;
  }
`;
