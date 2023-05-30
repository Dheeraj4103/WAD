$(document).ready(function () {
  var cart = [];

  function addToCart(product) {
    var cartItems = $("#cart");
    cart.push(product);
    console.log(cart, cartItems);
    cartItems.empty();
    $.each(cart, (index, item) => {
      var listitem = `
            <li id="${index}">
                <h2> ${item.title}</h2>
                <p> Price:- ${item.price}</p>
            </li>
        `;
      cartItems.append(listitem);
    });
    cartItems.listview("refresh");
  }

  $.getJSON("./products.json", (data) => {
    var productlist = $("#productlist");
    $.each(data.products, (index, product) => {
      var listitem = `
                <li id="${index}" data-filtertext="${product.title}">
                    <h2> ${product.title}</h2>
                    <p> Price:- ${product.price}</p>
                    <button id="btn${index}"> Add to Cart </button>
                </li>
            `;
      productlist.append(listitem);

      $(`#btn${index}`).on("click", () => {
          cart.push(product);
          console.log(`#btn${index} clicked`, cart);
          var cartItems = $("#cart");
          console.log(cart, cartItems);
          cartItems.empty();
          $.each(cart, (index, item) => {
            var listitem = `
                  <li id="${index}">
                      <h2> ${item.title}</h2>
                      <p> Price:- ${item.price}</p>
                  </li>
              `;
            cartItems.append(listitem);
          });
          cartItems.listview("refresh");
      });
    });
    productlist.listview("refresh");
  });
});
