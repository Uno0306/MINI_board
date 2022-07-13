import { Link } from "react-router-dom";
import { Border } from "../styles/StyleMB";

function BoardHeader() {
  return (
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
  );
}

export default BoardHeader;
