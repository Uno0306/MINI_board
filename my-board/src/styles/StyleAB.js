import styled from "styled-components";

export const Scroll = styled.div`
  text-align: center;
  height: 80vh;
  max-height: 80vh;
  overflow-y: auto;
`;

export const Ptag = styled.p`
  font-size: 20px;
  margin: 15px 3px 3px 3px;
  font-weight: 540;
`;

export const Text = styled.input`
  height: 20px;
  width: 400px;
  border: 0.5px solid black;
  border-radius: 5px;
  margin-left: 10px;
  text-align: center;
`;

export const TextArea = styled.textarea`
  height: 6.25em;
  width: 400px;
  border: 0.5px solid black;
  border-radius: 5px;
  margin-left: 10px;
  text-align: center;
`;

export const Button = styled.input`
  margin: 10px 5px 0 5px;
  padding: 5px;
  width: 8em;
  border: 1px solid dimgray;
  border-radius: 5px;
  background: ghostwhite;

  &:hover {
    border: 3px solid dimgray;
  }
`;
