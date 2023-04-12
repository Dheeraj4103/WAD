const btn1 = document.getElementById("btn1");

const result1 = document.getElementById("without");

async function getData() {
  const response = await fetch("./data1.txt");
  const data = await response.text();
  result1.innerText = data;
}

btn1.onclick = () => {
  getData();
};

$(document).ready(function () {
  $("#btn2").click(() => {
    $.get("data2.txt", (data, status) => {
      $("#with").text(data);
    });
  });
});
