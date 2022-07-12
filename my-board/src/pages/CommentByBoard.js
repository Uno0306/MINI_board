import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  selectCommentByBoardNo,
  insertComment,
  updateComment,
  deleteComment,
} from "../context/CommentAxios";

const CommentBox = styled.div`
  margin: 10px;
  border: 1px solid black;
`;

function CommentByBoard(boardNo) {
  const [comments, setComments] = useState([]);
  const [clickList, setClickList] = useState(false);
  const [clcikAdd, setClickAdd] = useState(false);
  const boardNoValue = boardNo.boardNo;

  useEffect(() => {
    selectCommentByBoardNo(boardNoValue, setComments);
  }, [clickList, clcikAdd]);

  return (
    <div>
      <div>
        <input
          type="button"
          onClick={() => {
            selectCommentByBoardNo(boardNoValue, setComments);
            setClickList(!clickList);
          }}
          value={
            comments.length === 0 ? "댓글[0]" : "댓글[" + comments.length + "]"
          }
        />
        <input
          type="button"
          onClick={() => {
            setClickAdd(!clcikAdd);
          }}
          value="댓글작성"
        />
      </div>
      {clcikAdd ? (
        <CommentBox>
          <div>
            <span>
              댓글 작성자 :{" "}
              <input
                type="text"
                id="inputCommenter"
                placeholder="작성자를 적어주세요"
              />{" "}
            </span>
            <br />
            <span>
              댓글 내 용 :{" "}
              <input
                type="text"
                id="inputContent"
                placeholder="댓글을 적어주세요"
              />{" "}
            </span>
          </div>
          <div>
            <input
              type="button"
              onClick={() => {
                insertComment(
                  document.getElementById("inputCommenter").value,
                  document.getElementById("inputContent").value,
                  boardNoValue
                );
                setClickAdd(!clcikAdd);
              }}
              value="작성"
            />
          </div>
        </CommentBox>
      ) : (
        ""
      )}
      {clickList && comments && comments.length != 0 ? (
        comments.map((data) => {
          return (
            <CommentBox key={data.commentNo}>
              <div>
                <span>
                  댓글 작성자 :{" "}
                  <input
                    type="text"
                    id="updateCommenter"
                    defaultValue={data.commenter}
                    readOnly
                  />{" "}
                </span>
                <br />
                <span>
                  댓글 내 용 :{" "}
                  <input
                    type="text"
                    id="updateContent"
                    defaultValue={data.commentContent}
                  />{" "}
                </span>
              </div>
              <div>
                <input
                  type="button"
                  onClick={() => {
                    updateComment(
                      data.commentNo,
                      document.getElementById("updateCommenter").value,
                      document.getElementById("updateContent").value,
                      boardNoValue
                    );
                  }}
                  value="수정"
                />
                <input
                  type="button"
                  onClick={() => {
                    deleteComment(data.commentNo);
                    setClickList(!clickList);
                  }}
                  value="삭제"
                />
              </div>
            </CommentBox>
          );
        })
      ) : (
        <div>
          <span>아직 댓글이 없습니다.</span>
        </div>
      )}
    </div>
  );
}

export default CommentByBoard;
