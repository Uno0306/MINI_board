import React, { useEffect, useState } from "react";
import {
  CommentBox,
  CommentDiv,
  InputDiv,
  Text,
  Button,
} from "../styles/StyleCBB";
import {
  selectCommentByBoardNo,
  insertComment,
  updateComment,
  deleteComment,
} from "../context/CommentAxios";

function CommentByBoard(boardNo) {
  const [comments, setComments] = useState([]);
  const [clickList, setClickList] = useState(false);
  const [clcikAdd, setClickAdd] = useState(false);
  const boardNoValue = boardNo.boardNo;

  useEffect(() => {
    selectCommentByBoardNo(boardNoValue, setComments);
  }, [clickList, clcikAdd, boardNoValue]);

  return (
    <div>
      <div>
        <Button
          type="button"
          onClick={() => {
            setClickList(!clickList);
          }}
          value={
            comments.length === 0 ? "댓글[0]" : "댓글[" + comments.length + "]"
          }
        />
        <Button
          type="button"
          onClick={() => {
            setClickAdd(!clcikAdd);
          }}
          value="댓글작성"
        />
        <br />
        <br />
      </div>
      {clcikAdd ? (
        <CommentBox>
          <CommentDiv>
            <InputDiv>
              <span>댓글 작성자 : </span>
              <Text
                type="text"
                id="inputCommenter"
                placeholder="작성자를 적어주세요"
              />{" "}
            </InputDiv>
            <InputDiv>
              <span>댓글 내 용 : </span>
              <Text
                type="text"
                id="inputContent"
                placeholder="댓글을 적어주세요"
              />{" "}
            </InputDiv>
            <Button
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
          </CommentDiv>
        </CommentBox>
      ) : (
        ""
      )}
      {clickList && comments && comments.length !== 0 ? (
        comments.map((data) => {
          return (
            <CommentBox key={data.commentNo}>
              <CommentDiv>
                <InputDiv>
                  <span>댓글 작성자 : </span>
                  <Text
                    type="text"
                    id={"updateCommenter" + data.commentNo}
                    defaultValue={data.commenter}
                    readOnly
                  />{" "}
                </InputDiv>
                <InputDiv>
                  <span>댓글 내 용 : </span>
                  <Text
                    type="text"
                    id={"updateContent" + data.commentNo}
                    defaultValue={data.commentContent}
                  />{" "}
                </InputDiv>
                <Button
                  type="button"
                  onClick={() => {
                    updateComment(
                      data.commentNo,
                      document.getElementById(
                        "updateCommenter" + data.commentNo
                      ).value,
                      document.getElementById("updateContent" + data.commentNo)
                        .value,
                      boardNoValue
                    );
                  }}
                  value="수정"
                />
                <Button
                  type="button"
                  onClick={() => {
                    deleteComment(data.commentNo);
                    setClickList(!clickList);
                  }}
                  value="삭제"
                />
              </CommentDiv>
            </CommentBox>
          );
        })
      ) : comments.length !== 0 ? (
        <span>댓글을 보시려면 [댓글] 버튼을 눌러주세요</span>
      ) : (
        <div>
          <span>아직 댓글이 없습니다.</span>
        </div>
      )}
    </div>
  );
}

export default CommentByBoard;
