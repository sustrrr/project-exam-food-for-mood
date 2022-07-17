const baseUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=3a8706a3071d42009fdc66574acceef5";

const popularUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=3a8706a3071d42009fdc66574acceef5&sort=popularity";

const mealPlannerContainer = document.querySelector(".cards--recipes");
const popularRecipes = document.querySelector(".popular");

async function getRecipe(url) {
  const response = await fetch(url);
  const products = await response.json();
  const results = products.results.slice(0, 7);
  console.log(results);

  mealPlannerContainer.innerHTML = "";

  mealPlanner(results);

  if (results.length === 0) {
    cardContainer.innerHTML = `<h2>Failed to load recipes</h2>`;
  }
}

getRecipe(baseUrl);

async function getPopular(url) {
  const response = await fetch(url);
  const products = await response.json();
  const results = products.results.slice(0, 3); //slice
  console.log(results);

  popularRecipes.innerHTML = "";

  results.forEach(function (result) {
    popularRecipes.innerHTML += `
    <div class="card popularrecipes--card">
      <a href="recipesDetails.html?id=${result.id}">
      <div class="star">
        <i class="fas fa-star"></i>
      </div>
      <img src="${result.image}" alt="Picture of ${result.title}"/>
      <div class="card--text">
        <h2>${result.title}</h2>
        <div class="card--button--container"><div class="card--button"> View recipe </div></div>
      </div>
      </a>
    </div>`;
  });

  if (results.length === 0) {
    popularRecipes.innerHTML = `<h2>Failed to load recipes</h2>`;
  }
}

getPopular(popularUrl);

function mealPlanner(results) {
  let monday = results[0];
  let tuesday = results[1];
  let wednesday = results[2];
  let thursday = results[3];
  let friday = results[4];
  let saturday = results[5];
  let sunday = results[6];

  mealPlannerContainer.innerHTML += `
   <div class="card">
      <a href="recipesDetails.html?id=${monday.id}">
        <div class="day">
          <p>Monday</p>
        </div>
        <img src="${monday.image}" alt="Picture of ${monday.title}"/>
        <div class="card--text">
          <h2>${monday.title}</h2>
          <div class="card--button--container">
            <div class="card--button"> View recipe </div>
          </div>
        </div>
      </a>
    </div>

    <div class="card">
      <a href="recipesDetails.html?id=${tuesday.id}">
        <div class="day">
          <p>Tuesday</p>
        </div>
        <img src="${tuesday.image}" alt="Picture of ${tuesday.title}"/>
        <div class="card--text">
          <h2>${tuesday.title}</h2>
          <div class="card--button--container">
            <div class="card--button"> View recipe </div>
          </div>
        </div>
      </a>
    </div>

    <div class="card">
      <a href="recipesDetails.html?id=${wednesday.id}">
        <div class="day">
         <p>Wednesday</p>
        </div>
        <img src="${wednesday.image}" alt="Picture of ${wednesday.title}"/>
        <div class="card--text">
          <h2>${wednesday.title}</h2>
          <div class="card--button--container">
            <div class="card--button"> View recipe </div>
          </div>
        </div>
      </a>
    </div>

    <div class="card">
      <a href="recipesDetails.html?id=${thursday.id}">
       <div class="day">
          <p>Thursday</p>
        </div>
        <img src="${thursday.image}" alt="Picture of ${thursday.title}"/>
        <div class="card--text">
          <h2>${thursday.title}</h2>
          <div class="card--button--container">
            <div class="card--button"> View recipe </div>
        </div>
      </div>
    </a>
  </div>

    <div class="card">
      <a href="recipesDetails.html?id=${friday.id}">
        <div class="day">
          <p>Friday</p>
        </div>
        <img src="${friday.image}" alt="Picture of ${friday.title}"/>
        <div class="card--text">
          <h2>${friday.title}</h2>
          <div class="card--button--container">
            <div class="card--button"> View recipe </div>
          </div>
        </div>
      </a>
    </div>

    <div class="card">
      <a href="recipesDetails.html?id=${saturday.id}">
        <div class="day">
          <p>Saturday</p>
        </div>
        <img src="${saturday.image}" alt="Picture of ${saturday.title}"/>
        <div class="card--text">
          <h2>${saturday.title}</h2>
          <div class="card--button--container">
            <div class="card--button"> View recipe </div>
          </div>
         </div>
      </a>
    </div>

      <div class="card">
        <a href="recipesDetails.html?id=${sunday.id}">
          <div class="day">
            <p>Sunday</p>
          </div>
          <img src="${sunday.image}" alt="Picture of ${sunday.title}"/>
          <div class="card--text">
            <h2>${sunday.title}</h2>
            <div class="card--button--container">
              <div class="card--button"> View recipe </div>
            </div>
          </div>
        </a>
    </div>
    `;
}
