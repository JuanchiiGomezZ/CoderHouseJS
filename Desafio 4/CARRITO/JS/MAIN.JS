const BBDD = [
  {
    id: 1,
    nombre: "Cheeseburger",
    img: "./assets/img/simple.png",
    precio: 700,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Red Peper",
    img: "./assets/img/RedPeper.png",
    precio: 800,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Sleepy Joe",
    img: "./assets/img/SleepyJoe.png",
    precio: 800,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Double Double",
    img: "./assets/img/DoubleDouble.png",
    precio: 800,
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Big Leno",
    img: "./assets/img/BigLeno.png",
    precio: 800,
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Leno Mole",
    img: "./assets/img/LenoMole.png",
    precio: 900,
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "American Burger",
    img: "./assets/img/AmericanBurger.png",
    precio: 950,
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Elementary Crispy",
    img: "./assets/img/ElementaryCrispy.png",
    precio: 900,
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Uncle Sam",
    img: "./assets/img/UncleSam.png",
    precio: 900,
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "Triple Q",
    img: "./assets/img/TripleQ.png",
    precio: 800,
    cantidad: 1,
  },
  {
    id: 11,
    nombre: "Grandpa Sam",
    img: "./assets/img/GrandpaSam.png",
    precio: 1150,
    cantidad: 1,
  },
  {
    id: 12,
    nombre: "345",
    img: "./assets/img/345.png",
    precio: 850,
    cantidad: 1,
  },
];

const carrito = [];

function renderizarProductos() {
  let tienda = document.getElementById("tienda");

  BBDD.forEach((burger) => {
    let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${burger.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${burger.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>$${burger.precio}</p>
                <button class="btn btn-primary" >Añadir al carrito</button>
            </div>
        </div>
        </div>
        `;
    tienda.innerHTML += productoHTML;
  });
}
renderizarProductos();

function filtroPrecio() {
  let bd = BBDD.filter((producto) => producto.precio > 70);
  console.log(bd);
}

cuerpo = document.querySelector(".body");
cuerpo.style.backgroundColor = "#960F1A";




/* titulo = document.querySelector(".title");
titutlo.style.fontSize = "300px" -> NO ANDA :( */


/* tarjeta=document.querySelectorAll(".card")
tarjeta.style.borderRadius = "20px" -> NO ANDA :( */
