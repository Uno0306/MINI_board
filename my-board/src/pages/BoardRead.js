import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectBoardByBoardNo } from "../context/BoardAxios";
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
  //   const [page, setPage] = useState(1);
  //   const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    selectBoardByBoardNo(boardNo, setBoard, board);
  }, []);

  console.log(board);
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
          placeholder="내요을 입력해주세요"
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
            // navigate("/");
          }}
          value="수정하기"
        />
        <input
          type="button"
          onClick={() => {
            // navigate("/");
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
