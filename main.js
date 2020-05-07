const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2020,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2019,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

// document.getElementById("app").innerHTML = `Hello, two plus two equas ${2 + 2} and it always will.
// <p> hi </p>
// <p>hello</p>
// `

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge < 1) {
    return 'baby';
  } else if (calculatedAge == 1) {
    return '1 year old';
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(petFavFoods) {
  return `
    <h4>Favourite Foods</h4>
    <ul class="foods-list">
      ${petFavFoods.map(function(food) {
        return `<li>${food}</li>`
      }).join('')}
    </ul>
  `
}

function petTemplate(pet) {
  return `
  <div class="animal">
    <img class="pet-photo" src="${pet.photo}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    <p><strong>Age: ${age(pet.birthYear)}</strong></p>
    ${pet.favFoods ? foods(pet.favFoods) : ''}
  </div>
  `
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">Pets (${petsData.length} results)</h1>
${petsData.map(petTemplate).join('')}
<p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
`