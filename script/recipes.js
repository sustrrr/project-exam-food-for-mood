const baseUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=fe37e55accd7477e96bb6e2108eeaee4&number=30";

const cardmobile = document.querySelector(".none");
const carddesktop = document.querySelector(".show"); //card countainer
const searchButton = document.querySelector("#search-submit");

//filter
const perPage = document.querySelector(".per-page-selection");
const populraity = document.querySelector(".populraity");
const type = document.querySelector(".meal-type");

async function getRecipe(url) {
  const response = await fetch(url);
  const products = await response.json();
  const results = products.results;
  cardmobile.innerHTML = "";
  carddesktop.innerHTML = "";

  console.log(url);

  if (results.length === 0) {
    cardmobile.innerHTML = `<h2>No search result</h2>`;
    carddesktop.innerHTML = `<h2>No search result</h2>`;
  }

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      carddesktop.innerHTML = "";
      results.forEach(function (result) {
        cardmobile.innerHTML += `
      <div class="card">
          <a href="recipesDetails.html?id=${result.id}">
            <img src="${result.image}" alt="Picture of ${result.title}"/>
            <div class="card--text">
              <h2>${result.title}</h2>
            <div class="card--button--container">
            <div class="card--button"> View recipe </div>
            </div>
          </div>
        </a>
      </div>`;
      });
    } else {
      cardmobile.innerHTML = "";
      results.forEach(function (result) {
        carddesktop.innerHTML += `
      <div class="card">
          <a href="recipesDetails.html?id=${result.id}">
            <img src="${result.image}" alt="Picture of ${result.title}"/>
            <div class="card--text">
              <h2>${result.title}</h2>
            <div class="card--button--container">
              <div class="card--button"> View recipe </div>
            </div>
          </div>
        </a>
      </div>`;
      });
    }
  }

  var x = window.matchMedia("(max-width: 1030px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
}

getRecipe(baseUrl);

// search

searchButton.onclick = function () {
  const searchInput = document.querySelector("#search-box").value;
  const z = baseUrl + `&includeIngredients=${searchInput}`;
  cardmobile.innerHTML = "";
  getRecipe(z);

  var val = document.getElementById("search-box").value;

  var string = "Welcome to,,    LinuxHint";
  var regexPattern = /\s+/g;
  var ans = string.replace(regexPattern, " ");
  console.log(string);
  console.log(ans);

  document.querySelector("#all").click();
  document.querySelector("#sort").value = "";

  if (typeof val === "string") {
    /*var commaPattern = /\,/g;
    var comma = val.replace(commaPattern, " ");*/
    const comma = val.split(",").join("");
    const remove = comma.split(".").join("");
    var regexPattern = /\s+/g;
    var ans = remove.replace(regexPattern, " ");
    const arr = ans.split(" ").join(",");
    val = arr;
  } else {
    console.log("str is not a string");
  }

  document.getElementById("search-box").value = val;
};

document
  .querySelector("#search-box")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("search-submit").click();
    }
  });

//filtering
perPage.onchange = function (event) {
  const input = document.querySelector("#search-box").value;
  const z =
    baseUrl +
    `&includeIngredients=${input}` +
    `&intolerances=${event.target.value}`;
  console.log(z);
  cardmobile.innerHTML = "";
  getRecipe(z);
};

let v = "";

populraity.onchange = function (event) {
  const input = document.querySelector("#search-box").value;
  const intolerances = document.querySelector("#intolerance").value;

  const z =
    baseUrl +
    `&includeIngredients=${input}` +
    `&intolerances=${intolerances}` +
    `&sort=${event.target.value}` +
    `&type=${v}`;
  console.log(z);
  cardmobile.innerHTML = "";
  getRecipe(z);
};

/*** MEAL TYPES */

let z;

function general() {
  const input = document.querySelector("#search-box").value;
  const intolerances = document.querySelector("#intolerance").value;
  const sort = document.querySelector("#sort").value;

  z =
    baseUrl +
    `&includeIngredients=${input}` +
    `&intolerances=${intolerances}` +
    `&sort=${sort}` +
    `&type=${v}`;

  //v = "j";
  console.log(z);
  getRecipe(z);
}

function empty() {
  v = "";
  general();
}

function maincourse() {
  v = "main+course";
  general();
}

function dessert() {
  v = "dessert";
  general();
}

function appetizer() {
  v = "appetizer";
  general();
}

function breakfast() {
  v = "breakfast";
  general();
}

function salad() {
  v = "salad";
  general();
}

function beverage() {
  v = "beverage";
  general();
}

function snack() {
  v = "snack";
  general();
}

general();

//from index search
const json = localStorage.getItem("form");
const obj = JSON.parse(json); //converting it back to object
console.log(obj);
console.log(obj.firstname);

window.onload = function () {
  if (obj.firstname) {
    document.getElementById("search-box").value = `${obj.firstname}`;
    searchButton.click();
  }

  localStorage.clear();
};
