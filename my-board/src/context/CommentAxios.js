import axios from "axios";
const URL = "/api/comment";

export const insertComment = async (commenter, commentContent, boardNo) => {
  const urlStr = URL;
  const inputComment = {
    commenter: commenter,
    commentContent: commentContent,
    board: {
      boardNo: boardNo,
    },
  };
  const headers = {
    "Content-Type": "application/json",
  };
  await axios
    .post(urlStr, inputComment, { headers })
    .catch((error) => console.log(error));
};

export const selectCommentByBoardNo = async (boardNo, setComments) => {
  const urlStr = URL + "/comments/" + boardNo;
  await axios
    .get(urlStr)
    .then((response) => response.data)
    .then((data) => setComments(data))
    .catch((error) => {
      console.log(error);
    });
};

// export const commentCount = async (boardNo, setLength) => {
//   const urlStr = URL + "/comments/" + boardNo;
//   await axios
//     .get(urlStr)
//     .then((response) => response.data)
//     .then((data) => {
//       setLength(data.length);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const updateComment = async (
  commentNo,
  commenter,
  commentContent,
  boardNo
) => {
  const urlStr = URL;
  const inputComment = {
    commentNo: commentNo,
    commenter: commenter,
    commentContent: commentContent,
    board: {
      boardNo: boardNo,
    },
  };
  const headers = {
    "Content-Type": "application/json",
  };
  await axios
    .put(urlStr, inputComment, { headers })
    .catch((error) => console.log(error));
};

export const deleteComment = async (commentNo) => {
  const urlStr = URL + "/" + commentNo;
  await axios.delete(urlStr).catch((error) => console.log(error));
};
