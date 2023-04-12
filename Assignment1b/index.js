const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.onclick = () => {
  console.log(input.value);
  localStorage.setItem("text", input.value);
  window.open("http://127.0.0.1:5500/show.html");
};
