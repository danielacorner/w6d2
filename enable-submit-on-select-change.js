const mySelect = dqs("select");

mySelect.addEventListener("change", event => {
  const select = event.target;
  const value = select.value;
  const button = document.querySelector("button");
  if (value !== "") {
    // enable the submit button
    button.disabled = false;
  } else {
    // disable the submit button
    button.disabled = true;
  }
});
