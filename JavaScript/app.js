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

/*Empleando Modularidad*/
function busquedaUsuario(usuarios, pwd, usuario) {
  const usuariosLength = usuarios.length;

  for (let i = 0; i < usuariosLength; i++) {
    const user = usuarios[i];
    if (user.nombre === usuario && user.password === pwd) {
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
    paragraphWarning.innerHTML = warning;
    paragraphWarning.style.color = "#8ac926";
    //El siguiente metodo nos permitira cambiar de pagina HTML
    window.location = "../pages/usuario.html";
  } else {
    warning += "Credenciales invalidas";
    paragraphWarning.innerHTML = warning;
    paragraphWarning.style.color = "#e71d36";
    form.reset();
  }
};

boton.addEventListener("click", validacionCredenciales);
