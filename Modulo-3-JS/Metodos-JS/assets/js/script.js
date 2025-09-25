let ul = document.querySelector("#lista");
let input = document.querySelector("#inputInvitado");
let boton = document.querySelector("#btnInvitado");

let invitados = [
  { id: 1, nombre: "Quentin Tarantino", vip: true },
  { id: 2, nombre: "Lionel Messi", vip: false },
];

function renderizarInvitados() {
  let template = "";
  for (invitado of invitados) {
    template += `<li>${invitado.nombre} <span
    style="color: ${invitado.vip  == true ? "lightgreen" : "red"}"
    >${
      invitado.vip == true ? "VIP" : "NO VIP"
    }</span> <button onclick="borrarInvitado(${
      invitado.id
    })">Borrar</button></div>
    <button onclick="modificarVip(${invitado.id})">
    Modificar</button>
    </li>`;
  }
  ul.innerHTML = template;
}

renderizarInvitados();

boton.addEventListener("click", () => {
  let nuevoInvitado = { id: Date.now(), nombre: input.value, vip: false };
  invitados.unshift(nuevoInvitado);
  renderizarInvitados();
  input.value = "";
});

function borrarInvitado(idAEliminar) {
  let indiceInvitado = invitados.findIndex((invitado) => {
    return invitado.id == idAEliminar;
  });
  invitados.splice(indiceInvitado, 1);
  console.log(invitados);
  renderizarInvitados();
}

function modificarVip(idAModificar) {
  let indiceInvitado = invitados.findIndex((invitado) => {
    return invitado.id == idAModificar;
  });


  if(invitados[indiceInvitado].vip == true){
    invitados[indiceInvitado].vip = false
  }else{
    invitados[indiceInvitado].vip = true
  }

  console.log(indiceInvitado);
  renderizarInvitados();
}
