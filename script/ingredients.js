const baseUrl =
  "https://api.spoonacular.com/food/ingredients/search?apiKey=66953b50279b4b71981586a42dead42c&query=";

const searchButton = document.querySelector("#search-submit");
const cardContainer = document.querySelector(".cards--ingridients");

async function getRecipe(url) {
  const response = await fetch(url);
  const products = await response.json();
  const results = products.results;
  cardContainer.innerHTML = "";
  results.forEach(function (result) {
    cardContainer.innerHTML += `
      <div class="card">
        <a href="ingredientsDetails.html?id=${result.id}">
          <div class="card--image">
            <img src="https://spoonacular.com/cdn/ingredients_500x500/${result.image}" alt="Picture of ${result.name}"/>
          </div>
          <div class="card--text">
            <h2>${result.name}</h2>
            <div class="card--button--container">
              <div class="card--button"> View recipe </div>
            </div>
          </div>
        </a>
      </div>`;
  });
  if (results.length === 0) {
    cardContainer.innerHTML = `<h2 class="ssh">No search result</h2>`;
  }
}

getRecipe(baseUrl);

// search

searchButton.onclick = function () {
  const searchInput = document.querySelector("#search-box").value;
  const z = baseUrl + `${searchInput}`;
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

//from index search
const json = localStorage.getItem("ingr");
const obj = JSON.parse(json); //converting it back to object
console.log(obj);
console.log(obj.ingr);

window.onload = function () {
  if (obj.ingr) {
    const searchInput = (document.querySelector(
      "#search-box"
    ).value = `${obj.ingr}`);
    searchButton.click();
  }

  localStorage.clear();
};
