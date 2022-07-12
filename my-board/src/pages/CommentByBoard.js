import React, { useEffect, useState } from "react";
import styled from "styled-components";

function CommentByBoard(boardNo) {
  return (
    <div>
      <div>
        <input
          type="button"
          onClick={() => {
            // navigate("/");
          }}
          value="댓글"
        />
        <input
          type="button"
          onClick={() => {
            // navigate("/");
          }}
          value="댓글작성"
        />
      </div>
      <div>
        <span>댓글 작성자 : </span>
        <span>댓글 내 용 : </span>
        <div>
          <input
            type="button"
            onClick={() => {
              // navigate("/");
            }}
            value="작성"
          />
          <input
            type="button"
            onClick={() => {
              // navigate("/");
            }}
            value="수정"
          />
          <input
            type="button"
            onClick={() => {
              // navigate("/");
            }}
            value="삭제"
          />
        </div>
      </div>
    </div>
  );
}

export default CommentByBoard;
