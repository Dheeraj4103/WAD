jQuery(function ($) {
  $.get("./data.txt", function (data, status) {
    console.log(data);
  });
});
