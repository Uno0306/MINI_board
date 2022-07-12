import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InsertBoard() {
  const navigate = useNavigate();

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
      const url = "/api/board";
      const inputDept = {
        boardTitle: titleValue,
        boardContent: contentValue,
        user: {
          userEmail: contenterValue,
        },
      };
      const headers = {
        "Content-Type": "application/json",
      };
      axios.post(url, inputDept, { headers }).catch((error) => {
        console.log(error);
      });

      // 추가 완료 후, 페이지 이동
      //   navigate("/");
      window.location.href = "/";
    }
  }

  return (
    <div>
      <h2>게시판 등록</h2>
      <div>
        <h4>제목</h4>
        <input type="text" id="title" placeholder="제목을 입력해주세요" />
      </div>
      <div>
        <h4>내용</h4>
        <input type="textarea" id="content" placeholder="내요을 입력해주세요" />
      </div>
      <div>
        <h4>작성자</h4>
        <input
          type="text"
          id="contenter"
          placeholder="작성자이메일을 입력해주세요"
        />
      </div>
      <br />
      <input
        type="button"
        onClick={() => {
          checkInsert();
        }}
        value="등록"
      />
    </div>
  );
}

export default InsertBoard;
