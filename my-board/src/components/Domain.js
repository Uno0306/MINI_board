import React, { useEffect, useState } from "react";
import { selectBoardList, minusPage, plusPage } from "../context/BoardAxios";
import styled from "styled-components";
import dateFormat, { masks } from "dateformat";

const PaginationSpan = styled.span`
  &[aria-current] {
    background-color: black;
    color: white;
  }
`;

const BoardTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  BoardTable th,
  td {
    border: 1px solid grey;
  }
`;

function Domain() {
  const [page, setPage] = useState(1);
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    selectBoardList(setBoardList, page);
  }, [page]);

  return (
    <div>
      <h2>게시판</h2>
      <br />
      <div id="boardList">
        {boardList.dtoList && boardList.dtoList.length !== 0 ? (
          <BoardTable>
            <thead>
              <tr>
                <td>#</td>
                <td>제목</td>
                <td>작성자</td>
                <td>등록일</td>
              </tr>
            </thead>
            <tbody>
              {boardList.dtoList.map((data) => {
                return (
                  <tr key={data.boardNo}>
                    <td>{data.boardNo}</td>
                    <td>{data.boardTitle}</td>
                    <td>{data.user.userName}</td>
                    <td>{dateFormat(data.registeredDate, "yyyy-mm-dd")}</td>
                  </tr>
                );
              })}
            </tbody>
          </BoardTable>
        ) : (
          <p>테이블이 없습니다.</p>
        )}
        <div>
          {boardList.prev && (
            <button
              onClick={() => {
                console.log("prev");
                minusPage(page, setPage);
              }}
            >
              prev
            </button>
          )}
          {boardList.pageList &&
            boardList.pageList.map((number) => {
              return (
                <PaginationSpan
                  id={number}
                  key={number}
                  onClick={(e) => {
                    setPage(e.target.id);
                  }}
                  aria-current={parseInt(page) === number ? "page" : null}
                >
                  {number} <span> </span>
                </PaginationSpan>
              );
            })}
          {boardList.next && (
            <button
              onClick={() => {
                console.log("next");
                plusPage(page, setPage);
              }}
            >
              next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Domain;
