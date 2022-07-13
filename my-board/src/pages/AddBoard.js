import React from "react";
import { checkInsert } from "../context/BoardFunc";
import { Scroll, Ptag, Text, TextArea, Button } from "../styles/StyleAB";
import { handleOnInput } from "../context/BoardFunc";

function AddBoard() {
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
          checkInsert(
            document.getElementById("title"),
            document.getElementById("content"),
            document.getElementById("contenter")
          );
        }}
        value="등록"
      />
    </Scroll>
  );
}

export default AddBoard;
