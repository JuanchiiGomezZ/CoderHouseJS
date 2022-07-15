let productos = [];
let inputNombre;
let inputEmail;
let inputPuesto;
let inputTelefono;
let formulario;
let sendBtn;
let tabla;

class Producto {
  constructor(nombre, email, puesto, telefono) {
    this.nombre = nombre;
    this.email = email;
    this.puesto = puesto;
    this.telefono = telefono;
  }
}



function inicializarElementosd() {
  inputNombre = document.getElementById("nombre");
  inputEmail = document.getElementById("email");
  inputPuesto = document.getElementById("puesto");
  inputTelefono = document.getElementById("telefono");
  formulario = document.getElementById("formulario");
  sendBtn = document.getElementById("sendBtn");
}
inicializarElementosd();

sendBtn.onclick = (e) => {
    e.preventDefault();
    let NuevoProducto = new Producto(
    inputNombre.value,
    inputEmail.value,
    inputPuesto.value,
    inputTelefono.value
  );
  productos.push(NuevoProducto);
  agregarProductosTabla();
  formulario.reset();
};

function agregarProductosTabla() {
  productos.forEach((item) => {
    let tabla = document.querySelector("#tabla");
    let filaTabla = document.createElement("tr");

    filaTabla.innerHTML = `
    <td>${item.nombre} </td>
    <td>${item.email} </td>
    <td>${item.puesto} </td>
    <td>${item.telefono} </td>
    `;

    tabla.append(filaTabla);
  });
}


function limpiarTabla(){
    while(tabla.rows.length > 1){
        tabla.deleteRow(1)
    }
}
