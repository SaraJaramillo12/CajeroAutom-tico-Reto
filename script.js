// Lista de usuarios
const usuarios = [
  { nombre: "Admin1", documento: "12345", contraseña: "admin123", tipo: 1 },
  { nombre: "Cliente1", documento: "67890", contraseña: "cliente123", tipo: 2 },
];

// Inicialización de las cantidades de billetes en el cajero
let billetes = [
  { denominacion: 100000, cantidad: 0 },
  { denominacion: 50000, cantidad: 0 },
  { denominacion: 20000, cantidad: 0 },
  { denominacion: 10000, cantidad: 0 },
  { denominacion: 5000, cantidad: 0 },
];

// Función para encontrar un usuario por documento y contraseña
function encontrarUsuario(documento, contraseña) {
  return usuarios.find(
    (user) => user.documento === documento && user.contraseña === contraseña
  );
}

// Función para mostrar el resumen de billetes y total
function mostrarResumen() {
  let total = 0;
  let output = document.getElementById("output");
  output.innerHTML = "<h2>Resumen de Billetes</h2>";
  billetes.forEach((billete) => {
    let valorPorDenominacion = billete.denominacion * billete.cantidad;
    output.innerHTML += `<p>Denominación: ${billete.denominacion}, Cantidad: ${valorPorDenominacion}</p>`;
    total += valorPorDenominacion;
  });
  output.innerHTML += `<p>Total general: ${total}</p>`;
  console.log(`Total general: ${total}`);
}

// Función para iniciar sesión
function iniciarSesion() {
  let documento = document.getElementById("documento").value;
  let contraseña = document.getElementById("contraseña").value;
  let usuario = encontrarUsuario(documento, contraseña);

  if (!usuario) {
    alert("Usuario no existe, intente de nuevo.");
  } else if (usuario.tipo === 1) {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("admin-form").classList.remove("hidden");
  } else if (usuario.tipo === 2) {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("cliente-form").classList.remove("hidden");
    let totalDinero = billetes.reduce(
      (sum, billete) => sum + billete.denominacion * billete.cantidad,
      0
    );
    if (totalDinero === 0) {
      alert("Cajero en mantenimiento, vuelva pronto.");
      reset();
    }
  }
}

// Función para cargar el cajero
function cargarCajero() {
  billetes[0].cantidad += parseInt(
    document.getElementById("billetes100000").value || 0
  );
  billetes[1].cantidad += parseInt(
    document.getElementById("billetes50000").value || 0
  );
  billetes[2].cantidad += parseInt(
    document.getElementById("billetes20000").value || 0
  );
  billetes[3].cantidad += parseInt(
    document.getElementById("billetes10000").value || 0
  );
  billetes[4].cantidad += parseInt(
    document.getElementById("billetes5000").value || 0
  );
  mostrarResumen();
  reset();
}

// Función para retirar dinero
function retirarDinero() {
  let cantidad = parseInt(document.getElementById("cantidadRetiro").value);
  let retiro = [];
  let cantidadInicial = cantidad;

  for (let billete of billetes) {
    let numBilletes = Math.floor(cantidad / billete.denominacion);
    if (numBilletes > billete.cantidad) {
      numBilletes = billete.cantidad;
    }
    retiro.push({ denominacion: billete.denominacion, cantidad: numBilletes });
    cantidad -= numBilletes * billete.denominacion;
  }

  if (cantidad > 0) {
    alert("No hay suficientes billetes para esa cantidad.");
  } else {
    retiro.forEach((r) => {
      let billete = billetes.find((b) => b.denominacion === r.denominacion);
      billete.cantidad -= r.cantidad;
      console.log(`Billetes de ${r.denominacion}: ${r.cantidad}`);
    });
    alert(`Cantidad total retirada: ${cantidadInicial}`);
    mostrarResumen();
  }
  reset();
}

// Función para reiniciar la interfaz
function reset() {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("admin-form").classList.add("hidden");
  document.getElementById("cliente-form").classList.add("hidden");
  document.getElementById("documento").value = "";
  document.getElementById("contraseña").value = "";
  document.getElementById("billetes100000").value = "";
  document.getElementById("billetes50000").value = "";
  document.getElementById("billetes20000").value = "";
  document.getElementById("billetes10000").value = "";
  document.getElementById("billetes5000").value = "";
  document.getElementById("cantidadRetiro").value = "";
}
