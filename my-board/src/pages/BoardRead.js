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
  max-height: 600px;
  overflow-y: auto;
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
      <h2>게시판 보기</h2>
      <div>
        <h4>제목</h4>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력해주세요"
          defaultValue={board ? board.boardTitle : ""}
        />
      </div>
      <div>
        <h4>내용</h4>
        <input
          type="textarea"
          id="content"
          placeholder="내용을 입력해주세요"
          defaultValue={board ? board.boardContent : ""}
        />
      </div>
      <div>
        <h4>작성자</h4>
        <input
          type="text"
          id="contenter"
          placeholder="작성자이메일을 입력해주세요"
          defaultValue={board ? board.user.id : ""}
        />
      </div>
      <div>
        <h4>등록일</h4>
        <input
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
        <h4>수정일</h4>
        <input
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
        <input
          type="button"
          onClick={() => {
            navigate("/");
          }}
          value="리스트로"
        />
        <input
          type="button"
          onClick={() => {
            updateBoard(
              document.getElementById("title").value,
              document.getElementById("content").value,
              document.getElementById("contenter").value
            );
          }}
          value="수정하기"
        />
        <input
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
