function eleccionJ1() {
  let j1 = prompt(
    "JUGADOR 1 -> Seleccione: 1. Piedra | 2. Papel | 3. Tijera: "
  );
  return j1;
}
function eleccionJ2() {
  let j2 = prompt(
    "JUGADOR 2 -> Seleccione: 1. Piedra | 2. Papel | 3. Tijera: "
  );
  return j2;
}

function eleccionPC() {
  let pc = Math.ceil(Math.random() * 3);
  return pc;
}

let modo = prompt("Elija el modo de juego:  1. J1 vs J2 | 2. J1 vs PC");
let res1 = 0;
let res2 = 0;

while (modo == 1) {
  //   MARCADOR
  alert("J1=" + res1 + " VS J2=" + res2);

  //   LLAMADA DE FUNCIONES
  let j1 = eleccionJ1();
  let j2 = eleccionJ2();

  //JUGADOR1 SUMA PTO
  if (j1 == 1 && j2 == 3) {
    res1++;
  } else if (j1 == 2 && j2 == 1) {
    res1++;
  } else if (j1 == 3 && j2 == 2) {
    res1++;
  }

  //   JUGADOR2 SUMA PTO
  else if (j1 == 3 && j2 == 1) {
    res2++;
  } else if (j1 == 1 && j2 == 2) {
    res2++;
  } else if (j1 == 2 && j2 == 3) {
    res2++;
  }

  //   GANADOR
  if (res1 == 3) {
    alert("J1=" + res1 + " VS J2=" + res2);
    alert("¡JUGADOR 1 GANA!");
    break;
  } else if (res2 == 3) {
    alert("J1=" + res1 + " VS J2=" + res2);
    alert("¡JUGADOR 2 GANA!");
    break;
  }
}

while (modo == 2) {
  //   MARCADOR
  alert("J1=" + res1 + " VS PC=" + res2);
  let pc = eleccionPC();
  let j1 = eleccionJ1();

  //JUGADOR1 SUMA PTO
  if (j1 == 1 && pc == 3) {
    res1++;
  } else if (j1 == 2 && pc == 1) {
    res1++;
  } else if (j1 == 3 && pc == 2) {
    res1++;
  }

  //   JUGADOR2 SUMA PTO
  else if (j1 == 3 && pc == 1) {
    res2++;
  } else if (j1 == 1 && pc == 2) {
    res2++;
  } else if (j1 == 2 && pc == 3) {
    res2++;
  }

  //   GANADOR
  if (res1 == 3) {
    alert("J1=" + res1 + " VS PC=" + res2);
    alert("¡JUGADOR 1 GANA!");
    break;
  } else if (res2 == 3) {
    alert("J1=" + res1 + " VS PC=" + res2);
    alert("¡PC GANA!");
    break;
  }
}
