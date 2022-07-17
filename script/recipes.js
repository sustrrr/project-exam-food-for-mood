const baseUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=4bb467ba21c74a11969ebfe322813867&number=21";

const cardContainer = document.querySelector(".cards--recipes"); //card countainer
const searchButton = document.querySelector("#search-submit");

//filter
const perPage = document.querySelector(".per-page-selection");
const populraity = document.querySelector(".populraity");
const type = document.querySelector(".meal-type");

async function getRecipe(url) {
  const response = await fetch(url);
  const products = await response.json();
  const results = products.results;
  cardContainer.innerHTML = "";
  results.forEach(function (result) {
    cardContainer.innerHTML += `
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
  if (results.length === 0) {
    cardContainer.innerHTML = `<h2>No search result</h2>`;
  }
}

getRecipe(baseUrl);

///adds comma
function searchVal(a) {
  var val = document.getElementById("search-box").value;

  if (typeof val === "string") {
    const arr = val.split(" ").join(",");
    val = arr;
  } else {
    console.log("str is not a string");
  }

  document.getElementById("search-box").value = val;
  console.log(val);
}

searchVal();
console.log(searchVal());

// search

searchButton.onclick = function () {
  const searchInput = document.querySelector("#search-box").value;
  const z = baseUrl + `&includeIngredients=${searchInput}`;
  cardContainer.innerHTML = "";
  getRecipe(z);
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
  cardContainer.innerHTML = "";
  getRecipe(z);
};

populraity.onchange = function (event) {
  const input = document.querySelector("#search-box").value;
  const intolerances = document.querySelector("#intolerance").value;
  const z =
    baseUrl +
    `&includeIngredients=${input}` +
    `&intolerances=${intolerances}` +
    `&sort=${event.target.value}`;
  cardContainer.innerHTML = "";
  getRecipe(z);
};

type.onchange = function (event) {
  const input = document.querySelector("#search-box").value;
  const intolerances = document.querySelector("#intolerance").value;
  const sort = document.querySelector("#sort").value;
  const mealType = document.querySelector("#meal-type").value;
  const z =
    baseUrl +
    `&includeIngredients=${input}` +
    `&intolerances=${intolerances}` +
    `&sort=${sort}` +
    `&type=${mealType}`;
  cardContainer.innerHTML = "";
  getRecipe(z);
};
