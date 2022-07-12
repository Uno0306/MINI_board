import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectBoardByBoardNo,
  updateBoard,
  deleteBoard,
} from "../context/BoardAxios";
import styled from "styled-components";
import dateFormat from "dateformat";
import CommentByBoard from "./CommentByBoard";

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

function BoardRead() {
  const navigate = useNavigate();
  const boardNo = useParams().boardNo;
  const [board, setBoard] = useState();

  useEffect(() => {
    selectBoardByBoardNo(boardNo, setBoard);
  }, [boardNo]);

  return (
    <Scroll>
      <h1>게시판 보기</h1>
      <div>
        <Ptag>제목</Ptag>
        <Text
          type="text"
          id="title"
          placeholder="제목을 입력해주세요"
          defaultValue={board ? board.boardTitle : ""}
        />
      </div>
      <div>
        <Ptag>내용</Ptag>
        <TextArea
          type="textarea"
          id="content"
          placeholder="내용을 입력해주세요"
          defaultValue={board ? board.boardContent : ""}
        />
      </div>
      <div>
        <Ptag>작성자</Ptag>
        <Text
          type="text"
          id="contenter"
          placeholder="작성자이메일을 입력해주세요"
          defaultValue={board ? board.user.id : ""}
        />
      </div>
      <div>
        <Ptag>등록일</Ptag>
        <Text
          type="text"
          id="registered"
          placeholder="등록일"
          defaultValue={
            board ? dateFormat(board.registeredDate, "yyyy-mm-dd") : ""
          }
          readOnly
        />
      </div>
      <div>
        <Ptag>수정일</Ptag>
        <Text
          type="text"
          id="modified"
          placeholder="수정일"
          defaultValue={
            board ? dateFormat(board.modifiedDate, "yyyy-mm-dd") : ""
          }
          readOnly
        />
      </div>
      <br />
      <div>
        <Button
          type="button"
          onClick={() => {
            navigate("/");
          }}
          value="리스트로"
        />
        <Button
          type="button"
          onClick={() => {
            updateBoard(
              boardNo,
              document.getElementById("title").value,
              document.getElementById("content").value,
              document.getElementById("contenter").value
            );
          }}
          value="수정하기"
        />
        <Button
          type="button"
          onClick={() => {
            deleteBoard(boardNo);
          }}
          value="삭제하기"
        />
      </div>
      <br />
      <CommentByBoard boardNo={boardNo} />
    </Scroll>
  );
}

export default BoardRead;
