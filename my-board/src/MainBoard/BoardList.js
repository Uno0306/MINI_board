import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import {
  CommentBox,
  BoardTable,
  THead,
  TR,
  Img,
  BlackSpan,
} from "../styles/StyleMB";

function BoardList({ boardList }) {
  const today = dateFormat(new Date(), "yyyymmddHHMMss");
  return (
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
  );
}

export default BoardList;
