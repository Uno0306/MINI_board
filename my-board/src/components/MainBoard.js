import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectBoardList } from "../context/BoardAxios";
import {
  Scroll,
  CommentBox,
  BoardTable,
  THead,
  TR,
  Img,
  Border,
  BlackSpan,
} from "../styles/StyleMB";
import dateFormat from "dateformat";
import Alignment from "../MainBoard/Alignment";

function MainBoard() {
  const [page, setPage] = useState(1);
  const [boardList, setBoardList] = useState([]);

  const today = dateFormat(new Date(), "yyyymmddHHMMss");

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
                <TR>
                  <td>#</td>
                  <td>제목</td>
                  <td>작성자</td>
                  <td>등록일</td>
                </TR>
              </THead>
              <tbody>
                {boardList.dtoList.map((data) => {
                  return (
                    <TR key={data.boardNo}>
                      <td>{data.boardNo}</td>
                      <td>
                        <Link
                          to={"/read/" + data.boardNo}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <BlackSpan>
                            {data.boardTitle}
                            {" [" + data.comments.length + "] "}
                          </BlackSpan>{" "}
                          {today -
                            dateFormat(data.registeredDate, "yyyymmddHHMMss") <=
                          1000000 ? (
                            <Img src="/asset/new.png" alt="new" />
                          ) : (
                            ""
                          )}
                        </Link>
                      </td>
                      <td>{data.user.userName}</td>
                      <td>{dateFormat(data.registeredDate, "yyyy-mm-dd")}</td>
                    </TR>
                  );
                })}
              </tbody>
            </BoardTable>
          </CommentBox>
        ) : (
          <p>테이블이 없습니다.</p>
        )}
        <Alignment boardList={boardList} page={page} setPage={setPage} />
      </div>
    </Scroll>
  );
}

export default MainBoard;
