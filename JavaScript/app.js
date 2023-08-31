"use strict";
var cuentas = [
  {
    nombre: "Mali",
    saldo: 200,
    password: "WWdkc,:5]e"
  },
  {
    nombre: "Gera",
    saldo: 290,
    password: "=sd>yTr49b"
  },
  {
    nombre: "Mauri",
    saldo: 67,
    password: "NB!f4t&yVx"
  },
  {
    nombre: "John",
    saldo: 600,
    password: "mXE*`?57Hj"
  },
  {
    nombre: "Erik",
    saldo: 890,
    password: "M7sm/VM<JY"
  },
  {
    nombre: "Alfredo",
    saldo: 300,
    password: "kN.$4uH]P}"
  }
];

const usuarios = document.getElementById("usuarios");
const password = document.getElementById("password");
const boton = document.getElementById("check");
const form = document.getElementById("form");
const datos = document.getElementById("datos");
datos.style.display = "none";

const monto = document.getElementById("monto");
monto.style.display = "none";
const saldo = document.getElementById("consultar");
const ingreso = document.getElementById("ingresar");
const retiro = document.getElementById("retirar");
const sesion = document.getElementById("salir");
const mensaje = document.getElementById("mensaje");
let validacionUsuario = null;

/*Empleando Modularidad*/
function busquedaUsuario(usuarios, pwd, usuario) {
  const usuariosLength = usuarios.length;

  for (let i = 0; i < usuariosLength; i++) {
    const user = usuarios[i];
    if (user.nombre === usuario && user.password === pwd) {
      validacionUsuario = i;
      return i;
    }
  }
  return -1;
}

const validacionCredenciales = function (e) {
  e.preventDefault();
  const paragraphWarning = document.getElementById("warning");
  const usuario = usuarios.value;
  const pwd = password.value;
  const validacion = busquedaUsuario(cuentas, pwd, usuario);

  let warning = "";

  if (validacion >= 0) {
    warning += "Enviado";
    paragraphWarning.textContent = warning;
    paragraphWarning.style.color = "#8ac926";
    monto.style.display = "block";
    form.reset();

    datos.style.display = "block";
  } else {
    warning += "Credenciales invalidas";
    paragraphWarning.textContent = warning;
    paragraphWarning.style.color = "#e71d36";
    form.reset();
  }
};

boton.addEventListener("click", validacionCredenciales);

function consultarSaldo(e) {
  e.preventDefault();
  mensaje.style.display = "block";
  mensaje.textContent = `dispone de ${cuentas[validacionUsuario].saldo} Pesos`;
}
function ingresarSaldo(e) {
  e.preventDefault();
  const montoIngresado = parseFloat(monto.value);
  if (cuentas[validacionUsuario].saldo >= 990.0) {
    mensaje.style.display = "block";
    mensaje.textContent = `dispone de ${cuentas[validacionUsuario].saldo} el cual es el monto maximo permitido`;
  } else if (montoIngresado > 0) {
    mensaje.textContent = "";
    mensaje.style.display = "block";
    cuentas[validacionUsuario].saldo += parseFloat(monto.value);
    mensaje.textContent = `dispone de ${cuentas[validacionUsuario].saldo}`;
  } else {
    mensaje.textContent = `dispone de ${cuentas[validacionUsuario].saldo}`;
  }
}
function retirarSaldo(e) {
  e.preventDefault();
  const montoIngresado = parseFloat(monto.value);
  if (cuentas[validacionUsuario].saldo == 10) {
    mensaje.style.display = "block";
    mensaje.textContent = `dispone de ${cuentas[validacionUsuario].saldo} el cual es el saldo minimo`;
  } else if (montoIngresado > 0) {
    mensaje.textContent = "";
    cuentas[validacionUsuario].saldo -= montoIngresado;
    mensaje.style.display = "block";
    mensaje.textContent = `dispone de ${cuentas[validacionUsuario].saldo}`;
  } else {
    mensaje.textContent = `dispone de ${cuentas[validacionUsuario].saldo}`;
  }
}
function cerrarSesion(e) {
  e.preventDefault();
  mensaje.textContent = "";
  datos.style.display = "none";
}

saldo.addEventListener("click", consultarSaldo);
ingreso.addEventListener("click", ingresarSaldo);
retiro.addEventListener("click", retirarSaldo);
sesion.addEventListener("click", cerrarSesion);
