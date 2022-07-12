import axios from "axios";

const URL = "/api/board";

export const selectBoardList = async (setBoardList, page) => {
  const urlStr = URL + "/boardlist?page=" + page + "&size=10";
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
  await setPage(parseInt(page) - 1);
};

export const plusPage = async (page, setPage) => {
  await setPage(parseInt(page) + 1);
};

export const selectBoardByBoardNo = async (boardNo, setBoard) => {
  const urlStr = URL + "/" + boardNo;
  await axios
    .get(urlStr)
    .then((response) => response.data)
    .then((data) => {
      setBoard(data);
    })
    .catch((error) => console.log(error));
};

export const updateBoard = async (title, content, contenter) => {
  const urlStr = URL;
  const inputDept = {
    boardTitle: title,
    boardContent: content,
    user: {
      userEmail: contenter,
    },
  };
  const headers = {
    "Content-Type": "application/json",
  };

  await axios.put(urlStr, inputDept, { headers }).catch((error) => {
    console.log(error);
  });
};

export const InsertBoard = async (boardTitle, boardContent, userEmail) => {
  const urlStr = URL;
  const inputDept = {
    boardTitle: boardTitle,
    boardContent: boardContent,
    user: {
      userEmail: userEmail,
    },
  };
  const headers = {
    "Content-Type": "application/json",
  };
  axios.post(urlStr, inputDept, { headers }).catch((error) => {
    console.log(error);
  });
  // 추가 완료 후, 페이지 이동
  window.location.href = "/";
};

export const deleteBoard = async (boardNo) => {
  const urlStr = URL + "/" + boardNo;
  await axios.delete(urlStr).catch((error) => console.log(error));
  window.location.href = "/";
};
