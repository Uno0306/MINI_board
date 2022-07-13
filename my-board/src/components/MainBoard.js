import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectBoardList, minusPage, plusPage } from "../context/BoardAxios";
import {
  Scroll,
  CommentBox,
  BoardTable,
  THead,
  TdNo,
  TdTitle,
  TdCommenter,
  TdDate,
  Img,
  Border,
  BlackSpan,
  Alignment,
  PageDiv,
  PageSpan,
  PaginationSpan,
  IButton,
} from "../styles/StyleMB";
import dateFormat from "dateformat";
import "../asset/new.png";

function MainBoard() {
  const [page, setPage] = useState(1);
  const [boardList, setBoardList] = useState([]);

  const today = dateFormat(new Date(), "yyyymmdd");
  const dte = dateFormat(new Date("2022-07-11"), "yyyymmdd");

  const day = today - dte;
  console.log(today);
  console.log(dte);
  console.log(day);

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
                            {today -
                              dateFormat(data.registeredDate, "yyyymmdd") <=
                            1 ? (
                              <Img src="/asset/new.png" alt="new" />
                            ) : (
                              ""
                            )}
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
              <IButton
                onClick={() => {
                  minusPage(page, setPage);
                }}
              >
                prev
              </IButton>
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
                onClick={() => {
                  plusPage(page, setPage, boardList.totalPage);
                }}
              >
                next
              </IButton>
            )}
          </PageDiv>
        </Alignment>
      </div>
    </Scroll>
  );
}

export default MainBoard;
