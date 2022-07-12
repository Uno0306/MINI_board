import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectBoardList, minusPage, plusPage } from "../context/BoardAxios";
import styled from "styled-components";
import dateFormat from "dateformat";

const Scroll = styled.div`
  text-align: center;
  height: 80vh;
  max-height: 80vh;
  overflow-y: auto;
`;

const CommentBox = styled.div`
  display: flex;
  justify-content: center;
`;

const BoardTable = styled.table`
  width: 90%;
  height: 60vh;
  border-collapse: collapse;
  BoardTable th,
  td {
    border: 2px solid deepskyblue;
  }
`;

const THead = styled.thead`
  height: 3em;
  font-size: 30px;
  font-weight: 550;
`;

const TdNo = styled.td`
  width: 15vw;
`;

const TdTitle = styled.td`
  width: 35vw;
`;
const TdCommenter = styled.td`
  width: 25vw;
`;

const TdDate = styled.td`
  width: 20vw;
`;

const Border = styled.span`
  border: 3px solid rosybrown;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px;
  background: turquoise;
  &:hover {
    border: 6px solid rosybrown;
    color: black;
  }
`;

const BlackSpan = styled.span`
  color: black;
  &:hover {
    color: white;
    background: turquoise;
    border-radius: 10px;
  }
`;

const Alignment = styled.div`
  display: flex;
  justify-content: center;
`;

const PageDiv = styled.div`
  margin-top: 10px;
  border: 1px solid black;
  width: 80vw;
  height: 20px;
`;

const PageSpan = styled.span`
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  height: 100%;
  border: 1px solid black;
  &:hover {
    color: white;
    background: turquoise;
    border-radius: 10px;
  }
`;

const PaginationSpan = styled.span`
  text-align: center;
  &[aria-current] {
    background-color: mediumslateblue;
    color: white;
    border-radius: 20px;
  }
`;
const Button = styled.button`
  text-align: center;
  border: 1px solid black;
  background: white;
  width: 3em;
  padding-top: 0;
  &:hover {
    border: 3px solid black;
  }
`;

const IButton = styled.input`
  text-align: center;
  border: 1px solid black;
  background: white;
  padding-top: 0;
  margin-top: 0;
  width: 3em;
  height: 100%;
  &:hover {
    border: 3px solid black;
  }
`;

function MainBoard() {
  const [page, setPage] = useState(1);
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    selectBoardList(setBoardList, page);
  }, [page]);

  return (
    <Scroll>
      <h1>
        게시판{" "}
        <Link
          to="/registration"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "540",
          }}
        >
          <Border>등록</Border>
        </Link>
      </h1>
      <div id="boardList">
        {boardList.dtoList && boardList.dtoList.length !== 0 ? (
          <CommentBox>
            <BoardTable>
              <THead>
                <tr>
                  <TdNo>#</TdNo>
                  <TdTitle>제목</TdTitle>
                  <TdCommenter>작성자</TdCommenter>
                  <TdDate>등록일</TdDate>
                </tr>
              </THead>
              <tbody>
                {boardList.dtoList.map((data) => {
                  return (
                    <tr key={data.boardNo}>
                      <TdNo>{data.boardNo}</TdNo>
                      <TdTitle>
                        <Link
                          to={"/read/" + data.boardNo}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <BlackSpan>
                            {data.boardTitle}
                            {" [" + data.comments.length + "] "}
                          </BlackSpan>
                        </Link>
                      </TdTitle>
                      <TdCommenter>{data.user.userName}</TdCommenter>
                      <TdDate>
                        {dateFormat(data.registeredDate, "yyyy-mm-dd")}
                      </TdDate>
                    </tr>
                  );
                })}
              </tbody>
            </BoardTable>
          </CommentBox>
        ) : (
          <p>테이블이 없습니다.</p>
        )}
        <Alignment>
          <PageDiv>
            {boardList.page > 10 && boardList.prev && (
              <Button
                onClick={() => {
                  minusPage(page, setPage);
                }}
              >
                prev
              </Button>
            )}
            {boardList.pageList &&
              boardList.pageList.map((number) => {
                return (
                  <PageSpan key={number}>
                    <PaginationSpan
                      id={number}
                      key={number}
                      onClick={(e) => {
                        setPage(e.target.id);
                      }}
                      aria-current={parseInt(page) === number ? "page" : null}
                    >
                      {" "}
                      {number}{" "}
                    </PaginationSpan>
                  </PageSpan>
                );
              })}
            {!(boardList.end === boardList.totalPage) && boardList.next && (
              <IButton
                type="button"
                onClick={() => {
                  plusPage(page, setPage, boardList.totalPage);
                }}
                value="next"
              />
            )}
          </PageDiv>
        </Alignment>
      </div>
    </Scroll>
  );
}

export default MainBoard;
