export function handleOnInput(el, maxlength) {
  console.log(el.value);
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
}
