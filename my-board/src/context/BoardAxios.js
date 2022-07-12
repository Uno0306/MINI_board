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
  await setPage(parseInt(page) - 10);
};

export const plusPage = async (page, setPage, totalPage) => {
  parseInt(page) + 10 <= totalPage
    ? await setPage(parseInt(page) + 10)
    : await setPage(totalPage);
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

export const updateBoard = async (boardNo, title, content, contenter) => {
  const urlStr = URL;
  const inputDept = {
    boardNo: boardNo,
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

  // 수정 완료 후, 페이지 이동
  window.location.href = "/";
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
