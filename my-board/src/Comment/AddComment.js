import {
  CommentBox,
  CommentDiv,
  InputDiv,
  Text,
  Button,
} from "../styles/StyleCBB";
import { insertComment } from "../context/CommentAxios";

function AddComment({ boardNoValue, setClickAdd, clcikAdd }) {
  return (
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
  );
}

export default AddComment;
