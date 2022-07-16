//---------------------------------SIMPLES---------------------------------------
const burgerSimples = [
  {
    id: 101,
    nombre: "Cheeseburger",
    precio: 650,
    link1: "/images/Menu/Simple.png",
    carne: "Medallon 115gr",
    queso: "Cheddar x2",
    topping1: "",
    topping2: "",
    topping3: "",
  },
  {
    id: 102,
    nombre: "Red Peper",
    precio: 650,
    link1: "/images/Menu/RedPeper.png",
    carne: "Medallon 115gr",
    queso: "Cheddar x2",
    topping1: "Pimiento Asado",
    topping2: "Cebolla",
    topping3: "Ketchup y Mostaza",
  },
  {
    id: 103,
    nombre: "Sleepy Joe",
    precio: 650,
    link1: "/images/Menu/SleepyJoe.png",
    carne: "Medallon 115gr",
    queso: "Cheddar x4",
    topping1: "Salsa SleepyJoe",
    topping2: "Mayonesa American Style",
    topping3: "",
  },
];
let burgersContainerSimple = document.createElement("div");
for (const producto of burgerSimples) {
  let card = document.createElement("div");
  let img = document.createElement("div");
  let description = document.createElement("div");
  let button = document.createElement("button");

  burgersContainerSimple.setAttribute("class", "burgers-container");

  card.classList.add("card");
  img.classList.add("img");
  description.classList.add("description");
  button.classList.add("comprarBtn");
  button.classList.add("comprarBtn");
  button.setAttribute("type", "button");
  

  burgersContainerSimple.appendChild(card);

  card.appendChild(img);
  card.appendChild(description);
  card.appendChild(button);

  img.innerHTML = `<img src=${producto.link1} alt="RedPeper" height="250px">`;

  description.innerHTML = ` <h2>${producto.nombre}</h2>
                          <p>${producto.carne}</p>
                          <p>${producto.queso}</p>
                          <p>${producto.topping1}</p>
                          <p>${producto.topping2}</p>
                          <p>${producto.topping3}</p>
                          <p class="precio">$${producto.precio}</p>`;
}
simples = document.getElementById("simples");
simples.appendChild(burgersContainerSimple);
//---------------------------------DOBLES---------------------------------------
const burgerDobles = [
  {
    id: 104,
    nombre: "Big Leno",
    precio: 650,
    link1: "/images/Menu/BigLeno.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Cebolla",
    topping2: "Lechuga",
    topping3: "Pepinillos",
    topping4: "Salsa Big LENO",
  },
  {
    id: 105,
    nombre: "Double Double",
    precio: 650,
    link1: "/images/Menu/DoubleDouble.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Cebolla en rodaja",
    topping2: "Tomate",
    topping3: "Lechuga",
    topping4: "Salsa LENO",
  },
  {
    id: 106,
    nombre: "Uncle Sam",
    precio: 650,
    link1: "/images/Menu/UncleSam.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Bacon",
    topping2: "Cebolla",
    topping3: "Pepinillos",
    topping4: "Salsa LENO",
  },
  {
    id: 107,
    nombre: "Oklahoma",
    precio: 650,
    link1: "/images/Menu/Oklahoma.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Cebolla fried",
    topping2: "Pepinillos",
    topping3: "Mayonesa American Style",
    topping4: "",
  },
  {
    id: 108,
    nombre: "Leno Mole",
    precio: 650,
    link1: "/images/Menu/LenoMole.png",
    carne: "Medallon 115gr x2",
    queso: "Cheddar x4",
    topping1: "Bacon bits",
    topping2: "Guacamole",
    topping3: "Lechuga",
    topping4: "Mayonesa HOT",
  },
  {
    id: 109,
    nombre: "Elementary Crispy",
    precio: 650,
    link1: "/images/Menu/ElementaryCrispy.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x2",
    topping1: "Bacon",
    topping2: "Cebolla crispy",
    topping3: "Salsa Barbacoa LENO",
    topping4: "",
  },
  {
    id: 110,
    nombre: "American Burger",
    precio: 650,
    link1: "/images/Menu/AmericanBurger.png",
    carne: "Medallon 90gr x2",
    queso: "Cheddar x4",
    topping1: "Bacon",
    topping2: "Cebolla",
    topping3: "Tomate y Lechuga",
    topping4: "Salsa the American",
  },
];

let burgersContainerDoble = document.createElement("div");
for (const producto of burgerDobles) {
  let card = document.createElement("div");
  let img = document.createElement("div");
  let description = document.createElement("div");
  let button = document.createElement("button");

  burgersContainerDoble.setAttribute("class", "burgers-container");

  card.classList.add("card");
  img.classList.add("img");
  description.classList.add("description");
  button.classList.add("comprarBtn");
  button.classList.add("comprarBtn");
  button.setAttribute("type", "button");
  

  burgersContainerDoble.appendChild(card);

  card.appendChild(img);
  card.appendChild(description);
  card.appendChild(button);

  img.innerHTML = `<img src=${producto.link1} alt="RedPeper" height="250px">`;

  description.innerHTML = ` <h2>${producto.nombre}</h2>
                          <p>${producto.carne}</p>
                          <p>${producto.queso}</p>
                          <p>${producto.topping1}</p>
                          <p>${producto.topping2}</p>
                          <p>${producto.topping3}</p>
                          <p class="precio">$${producto.precio}</p>`;
}
dobles = document.getElementById("dobles");
dobles.appendChild(burgersContainerDoble);

//---------------------------------TRIPLE---------------------------------------
const burgerTriples = [
  {
    id: 111,
    nombre: "Uncle Sam XL",
    precio: 650,
    link1: "/images/Menu/UncleSamXL.png",
    carne: "Medallon 90gr x3",
    queso: "Cheddar x6",
    topping1: "Bacon",
    topping2: "Cebolla",
    topping3: "Salsa LENO",
  },
  {
    id: 112,
    nombre: "345",
    precio: 650,
    link1: "/images/Menu/345.png",
    carne: "Medallon 115gr x3",
    queso: "Cheddar x6",
    topping1: "Cebolla Brunoise",
    topping2: "Pepinillos",
    topping3: "Ketchup LENO",
  },
  {
    id: 113,
    nombre: "GrandPa Sam",
    precio: 650,
    link1: "/images/Menu/GrandpaSam.png",
    carne: "Medallon 115gr x4",
    queso: "Cheddar x8",
    topping1: "Bacon",
    topping2: "Cebolla a la manteca",
    topping3: "Salsa LENO",
  },
];
let burgersContainerTriple = document.createElement("div");
for (const producto of burgerTriples) {
  let card = document.createElement("div");
  let img = document.createElement("div");
  let description = document.createElement("div");
  let flex = document.createElement("div");
  let button = document.createElement("button");

  burgersContainerTriple.setAttribute("class", "burgers-container");

  card.classList.add("card");
  img.classList.add("img");
  description.classList.add("description");
  button.classList.add("comprarBtn");
  button.classList.add("comprarBtn");
  button.setAttribute("type", "button");

  burgersContainerTriple.appendChild(card);

  card.appendChild(img);
  card.appendChild(description);
  card.appendChild(button);

  img.innerHTML = `<img src=${producto.link1} height="250px">`;
  description.innerHTML = ` <h2>${producto.nombre}</h2>
                          <p>${producto.carne}</p>
                          <p>${producto.queso}</p>
                          <p>${producto.topping1}</p>
                          <p>${producto.topping2}</p>
                          <p>${producto.topping3}</p>
                          <p class="precio">$${producto.precio}</p>
                          `;
}
triples = document.getElementById("triples");
triples.appendChild(burgersContainerTriple);
