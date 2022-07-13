import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectBoardByBoardNo,
  updateBoard,
  deleteBoard,
} from "../context/BoardAxios";
import { Scroll, Ptag, Text, TextArea, Button } from "../styles/StyleBR";
import dateFormat from "dateformat";
import CommentByBoard from "./CommentByBoard";
import { handleOnInput } from "../context/BoardFunc";

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
          onInput={(e) => handleOnInput(e.target, 30)}
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
          onInput={(e) => handleOnInput(e.target, 40)}
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
