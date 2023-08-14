const baseUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=66953b50279b4b71981586a42dead42c  x  &number=60 p";

const popularUrl =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=66953b50279b4b71981586a42dead42 x c";

const mealPlannerContainer = document.querySelector(".cards--recipes");
const popularRecipes = document.querySelector(".popular");

async function getPopular(url) {
  const response = await fetch(url);
  const products = await response.json();
  const results = products.results.slice(0, 3); //slice

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

/*

function mealPlanner(results) {
  let monday = results[3];
  let tuesday = results[4];
  let wednesday = results[5]; //Ok
  let thursday = results[11]; //ok
  let friday = results[49]; //ok
  let saturday = results[51];
  let sunday = results[51]; //ok

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

*/

/// collect input

const form = document.querySelector("form");
const searchbutton = document.querySelector("#searchbutton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  console.log(fd);

  const obj = Object.fromEntries(fd);
  console.log(obj.firstname);

  if (obj.firstname) {
    const json = JSON.stringify(obj);
    localStorage.setItem("form", json);
    window.location.href = "recipes.html";
  }
});

/// collect input

/*

const ingr = document.querySelector(".ingr");

ingr.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(ingr);
  console.log(fd);

  const obj = Object.fromEntries(fd);
  console.log(obj);

  const json = JSON.stringify(obj);
  localStorage.setItem("ingr", json);

  window.location.href = "ingredients.html";
});
*/

/// collect type

function storeValue(event) {
  localStorage.setItem(event.target.name, event.target.value);
  console.log(event.target.value);
  window.location.href = "recipes.html";
}

/*
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
*/
