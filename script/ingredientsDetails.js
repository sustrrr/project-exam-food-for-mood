const baseUrl =
  "https://api.spoonacular.com/food/ingredients/search?apiKey=66953b50279b4b71981586a42dead42c&query= s";

const heading = document.querySelector(".recipe--time");
const image = document.querySelector(".recipe--details--img");

const ingridientsDiets = document.querySelector(".recipe--details--text");
const instructionsSummary = document.querySelector(
  ".recipe--instructions-summary"
);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const specificUrl = baseUrl + id;

async function details() {
  try {
    const response = await fetch(
      "https://api.spoonacular.com/food/ingredients/" +
        id +
        "/information?apiKey=66953b50279b4b71981586a42dead42c&amount=1",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const specificIngredient = await response.json();

    detailsHTML(specificIngredient);
  } catch (error) {
    heading.innerHTML += `<p>No recipe</p>`;
  }
}

details();

function detailsHTML(specificIngredient) {
  heading.innerHTML = "";

  heading.innerHTML += `<h1>${specificIngredient.original}</h1>
  <p>${specificIngredient.estimatedCost.value} <span>$</span></p>`;

  image.innerHTML = `
  <div class="img-center">
    <img src="https://spoonacular.com/cdn/ingredients_500x500/${specificIngredient.image}" alt="Picture of ${specificIngredient.image}" />
  </div>`;

  ingridientsDiets.innerHTML = `
    <h2>Nutritional value</h2>
    <p>${specificIngredient.nutrition.caloricBreakdown.percentCarbs}% <span>carbs</span></p>
    <p>${specificIngredient.nutrition.caloricBreakdown.percentFat}% <span>fat</span></p>
    <p>${specificIngredient.nutrition.caloricBreakdown.percentProtein}% <span>protein</span></p>
    <p>${specificIngredient.nutrition.nutrients[0].percentOfDailyNeeds}% DV <span>${specificIngredient.nutrition.nutrients[0].name}</span></p>
    <p>${specificIngredient.nutrition.nutrients[1].percentOfDailyNeeds}% DV <span>${specificIngredient.nutrition.nutrients[1].name}</span></p>
    <p>${specificIngredient.nutrition.nutrients[2].percentOfDailyNeeds}% DV <span>${specificIngredient.nutrition.nutrients[2].name}</span></p>
</div>
  `;
}
