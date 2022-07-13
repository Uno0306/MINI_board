import axios from "axios";

export const insertComment = async (commenter, commentContent, boardNo) => {
  const urlStr = process.env.REACT_APP_URL_COMMENT;
  const inputComment = {
    commenter: commenter,
    commentContent: commentContent,
    board: {
      boardNo: boardNo,
    },
  };
  await axios
    .post(urlStr, inputComment, process.env.REACT_APP_HEADER)
    .catch((error) => console.log(error));
};

export const selectCommentByBoardNo = async (boardNo, setComments) => {
  const urlStr = process.env.REACT_APP_URL_COMMENT + "/comments/" + boardNo;
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
  const urlStr = process.env.REACT_APP_URL_COMMENT;
  const inputComment = {
    commentNo: commentNo,
    commenter: commenter,
    commentContent: commentContent,
    board: {
      boardNo: boardNo,
    },
  };
  await axios
    .put(urlStr, inputComment, process.env.REACT_APP_HEADER)
    .catch((error) => console.log(error));
};

export const deleteComment = async (commentNo) => {
  const urlStr = process.env.REACT_APP_URL_COMMENT + "/" + commentNo;
  await axios.delete(urlStr).catch((error) => console.log(error));
};
