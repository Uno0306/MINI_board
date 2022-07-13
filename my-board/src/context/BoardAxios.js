import axios from "axios";

export const InsertBoard = async (boardTitle, boardContent, userEmail) => {
  const urlStr = process.env.REACT_APP_URL_BOARD;
  const inputBoard = {
    boardTitle: boardTitle,
    boardContent: boardContent,
    user: {
      userEmail: userEmail,
    },
  };
  axios
    .post(urlStr, inputBoard, process.env.REACT_APP_HEADER)
    .catch((error) => {
      console.log(error);
    });

  window.location.href = "/";
};

export const selectBoardList = async (setBoardList, page) => {
  const urlStr =
    process.env.REACT_APP_URL_BOARD + "/boardlist?page=" + page + "&size=10";
  await axios
    .get(urlStr)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      setBoardList(data);
    })
    .catch((error) => console.log(error));
};

export const minusPage = async (page, setPage) => {
  await setPage(parseInt(page) - 10);
};

export const plusPage = async (page, setPage, totalPage) => {
  parseInt(page) + 10 <= totalPage
    ? await setPage(parseInt(page) + 10)
    : await setPage(totalPage);
};

export const selectBoardByBoardNo = async (boardNo, setBoard) => {
  const urlStr = process.env.REACT_APP_URL_BOARD + "/" + boardNo;
  await axios
    .get(urlStr)
    .then((response) => response.data)
    .then((data) => {
      setBoard(data);
    })
    .catch((error) => console.log(error));
};

export const updateBoard = async (boardNo, title, content, contenter) => {
  const urlStr = process.env.REACT_APP_URL_BOARD;
  const inputBoard = {
    boardNo: boardNo,
    boardTitle: title,
    boardContent: content,
    user: {
      userEmail: contenter,
    },
  };

  await axios
    .put(urlStr, inputBoard, process.env.REACT_APP_HEADER)
    .catch((error) => {
      console.log(error);
    });

  window.location.href = "/";
};

export const deleteBoard = async (boardNo) => {
  const urlStr = process.env.REACT_APP_URL_BOARD + "/" + boardNo;
  await axios.delete(urlStr).catch((error) => console.log(error));

  window.location.href = "/";
};
