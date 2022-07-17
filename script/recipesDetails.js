const baseUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=3a8706a3071d42009fdc66574acceef5";

const heading = document.querySelector(".recipe--time");
const image = document.querySelector(".recipe--details--img");

const ingridientsDiets = document.querySelector(".recipe--ingridientsdiet");
const instructionsSummary = document.querySelector(
  ".recipe--instructions-summary"
);

const diet = document.querySelector(".recipe--diet");
const ingridient = document.querySelector(".recipe--ingridients");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const specificUrl = baseUrl + id;

async function details() {
  try {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/" +
        id +
        "/information?apiKey=3a8706a3071d42009fdc66574acceef5",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const specificRecipe = await response.json();
    const diets = specificRecipe.diets.slice(0, 3);
    const ingridients = specificRecipe.extendedIngredients;

    detailsHTML(specificRecipe);

    for (let i = 0; i < diets.length; i++) {
      diet.innerHTML += `
      <ul>
        <li><i class="fas fa-check"></i>${diets[i]}</li>
      </ul>`;
    }
    for (let i = 0; i < ingridients.length; i++) {
      ingridient.innerHTML += ` 
      <ul>
        <li>${ingridients[i].original}</li>
      </ul>`;
    }
  } catch (error) {
    ingridient.innerHTML += `<p>No recipe</p>`;
  }
}

details();

function detailsHTML(specificRecipe) {
  heading.innerHTML = "";

  heading.innerHTML = `<h1>${specificRecipe.title}</h1>
  <i class="fas fa-clock"></i>
  <p>${specificRecipe.readyInMinutes} min</p>`;

  image.innerHTML = `<img src="${specificRecipe.image}" alt="Picture of ${specificRecipe.title}" />`;

  if (specificRecipe.instructions === null) {
    instructionsSummary.innerHTML = `
     <div class="recipe--summary">
      <h2>About the recipe</h2>
      <p>${specificRecipe.summary}
      </p>
    </div>`;
  } else {
    instructionsSummary.innerHTML = `
    <div class="recipe--instructions">
      <h2>Instructions</h2>
      <p>${specificRecipe.instructions}
      </p>
    </div>
    <div class="recipe--summary">
      <h2>Summary</h2>
      <p>${specificRecipe.summary}
      </p>
    </div>`;
  }
}
