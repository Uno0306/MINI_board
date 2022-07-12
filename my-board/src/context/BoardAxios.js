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

export const selectBoardByBoardNo = async (boardNo, setBoard, board) => {
  const urlStr = URL + "/" + boardNo;
  await axios
    .get(urlStr)
    .then((response) => response.data)
    .then((data) => {
      setBoard(data);
    })
    .catch((error) => console.log(error));
};
