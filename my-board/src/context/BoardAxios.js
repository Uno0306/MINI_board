import axios from "axios";

export const selectBoardList = async (setBoardList, page) => {
  const url = "/api/board/boardlist";
  const str = url + "?page=" + page + "&size=" + 10;
  await axios
    .get(str)
    .then((response) => response.data)
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
