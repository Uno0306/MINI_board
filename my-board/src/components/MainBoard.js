import React, { useEffect, useState } from "react";
import { selectBoardList } from "../context/BoardAxios";
import { Scroll } from "../styles/StyleMB";
import PageList from "../MainBoard/PageList";
import BoardList from "../MainBoard/BoardList";
import BoardHeader from "../MainBoard/BoardHeader";

function MainBoard() {
  const [page, setPage] = useState(1);
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    selectBoardList(setBoardList, page);
  }, [page]);

  return (
    <Scroll>
      <BoardHeader />
      <div id="boardList">
        {boardList.dtoList && boardList.dtoList.length !== 0 ? (
          <BoardList boardList={boardList} />
        ) : (
          <p>테이블이 없습니다.</p>
        )}
        <PageList boardList={boardList} page={page} setPage={setPage} />
      </div>
    </Scroll>
  );
}

export default MainBoard;
