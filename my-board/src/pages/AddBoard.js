import React from "react";
import { InsertBoard } from "../context/BoardAxios";
import styled from "styled-components";

const Scroll = styled.div`
  text-align: center;
  height: 80vh;
  max-height: 80vh;
  overflow-y: auto;
`;

const Ptag = styled.p`
  font-size: 20px;
  margin: 15px 3px 3px 3px;
  font-weight: 540;
`;

const Text = styled.input`
  height: 20px;
  width: 400px;
  border: 0.5px solid black;
  border-radius: 5px;
  margin-left: 10px;
  text-align: center;
`;

const TextArea = styled.input`
  height: 6.25em;
  width: 400px;
  border: 0.5px solid black;
  border-radius: 5px;
  margin-left: 10px;
  text-align: center;
`;

const Button = styled.input`
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

function AddBoard() {
  function checkInsert() {
    var title = document.getElementById("title");
    var content = document.getElementById("content");
    var contenter = document.getElementById("contenter");
    const titleValue = title.value;
    const contentValue = content.value;
    const contenterValue = contenter.value;
    if (titleValue === null || titleValue === "") {
      alert("제목을 입력하시오!");
    }
    if (contentValue === null || contentValue === "") {
      alert("내용을 입력하시오!");
    }
    if (contenterValue === null || contenterValue === "") {
      alert("작성자이메일을 입력하시오!");
    }

    if (
      !(
        titleValue === null ||
        titleValue === "" ||
        contentValue === null ||
        contentValue === "" ||
        contenterValue === null ||
        contenterValue === ""
      )
    ) {
      InsertBoard(titleValue, contentValue, contenterValue);
    }
  }

  return (
    <Scroll>
      <h1>게시판 등록</h1>
      <div>
        <Ptag>제목</Ptag>
        <Text type="text" id="title" placeholder="제목을 입력해주세요" />
      </div>
      <div>
        <Ptag>내용</Ptag>
        <TextArea
          type="textarea"
          id="content"
          placeholder="내용을 입력해주세요"
        />
      </div>
      <div>
        <Ptag>작성자</Ptag>
        <Text
          type="text"
          id="contenter"
          placeholder="작성자이메일을 입력해주세요"
        />
      </div>
      <br />
      <Button
        type="button"
        onClick={() => {
          checkInsert();
        }}
        value="등록"
      />
    </Scroll>
  );
}

export default AddBoard;
