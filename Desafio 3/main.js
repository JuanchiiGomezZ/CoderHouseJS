// Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.
alert("Bienvenido a la liga de futbol internacional")
const jugadores = [];


function cargar() {
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    eleccion = prompt("¿Desea ingresar un jugador? SI O NO").toUpperCase();
    if(eleccion == "NO"){
    console.log("Hasta luego");
    break;
   }
    else if(eleccion == "SI"){
      nombre = prompt("Ingrese el nombre del jugador").toUpperCase();
      numero = Number(prompt("Ingrese el dorsal del jugador"));
      edad = Number(prompt("Ingrese la edad del jugador"));
      lesion = prompt("Ingrese si está lesionado si o no").toUpperCase();
      while(lesion !== "SI" && lesion !== "NO"  ) {
        lesion = prompt("Ingrese nuevamente si está lesionado si o no").toUpperCase();
      }
      if(lesion == "SI"){
        lesion = true;
      }
      else if(lesion == "NO"){
        lesion = false;
      }
       jugadores[i] = Object.assign({nombre, numero, edad, lesion});
    }
    }
   
}

cargar();
  
console.log(jugadores);

