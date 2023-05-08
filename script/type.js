const typ = localStorage.getItem("valuecat");

window.onload = function () {
  if (typ === "main+course") {
    document.querySelector("#maincourse").click(); // this will trigger the click event
  }

  if (typ === "dessert") {
    document.querySelector("#dessert").click(); // this will trigger the click event
  }

  if (typ === "breakfast") {
    document.querySelector("#breakfast").click(); // this will trigger the click event
  }

  if (typ === "beverage") {
    document.querySelector("#beverage").click(); // this will trigger the click event
  }

  localStorage.clear();
};
