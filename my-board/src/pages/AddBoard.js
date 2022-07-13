import React from "react";
import { InsertBoard } from "../context/BoardAxios";
import { Scroll, Ptag, Text, TextArea, Button } from "../styles/StyleAB";
import { handleOnInput } from "../context/BoardFunc";

function AddBoard() {
  function checkInsert() {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const contenter = document.getElementById("contenter");
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
        <Text
          type="text"
          id="title"
          placeholder="제목을 입력해주세요"
          onInput={(e) => handleOnInput(e.target, 30)}
        />
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
          onInput={(e) => handleOnInput(e.target, 40)}
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
