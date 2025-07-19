const nome = localStorage.getItem("nome");
const bio = localStorage.getItem("bio");

document.getElementById("textoNome").innerText =` ${nome}`;
document.getElementById("textbio").innerText =` ${bio}`