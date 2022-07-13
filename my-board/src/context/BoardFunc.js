import { InsertBoard } from "../context/BoardAxios";

export function handleOnInput(el, maxlength) {
  console.log(el.value);
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
}

export function checkInsert(title, content, contenter) {
  const titleValue = title.value;
  const contentValue = content.value;
  const contenterValue = contenter.value;
  if (titleValue === null || titleValue === "") {
    alert("제목을 입력하시오!");
  }
  if (contentValue === null || contentValue === "") {
    alert("내용을 입력하시오!");
  }
  if (contenterValue === null || contenterValue === "") {
    alert("작성자이메일을 입력하시오!");
  }

  if (
    !(
      titleValue === null ||
      titleValue === "" ||
      contentValue === null ||
      contentValue === "" ||
      contenterValue === null ||
      contenterValue === ""
    )
  ) {
    InsertBoard(titleValue, contentValue, contenterValue);
  }
}
