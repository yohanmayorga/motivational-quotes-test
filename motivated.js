let frases = [
  "The only way to do great work is to love what you do.",
  "If you can dream it, you can do it.",
  "The only person you are destined to become is the person you decide to be.",
  "We can do anything we set our minds to.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Believe in yourself.",
  "Never give up on your dreams.",
  "Follow your heart.",
  "Work hard.",
  "Be kind to others.",
  "Be grateful for what you have.",
  "Live in the present moment.",
  "Never compare yourself to others.",
  "Be yourself.",
  "Be proud of who you are.",
  "Be confident.",
  "Be positive.",
  "Be happy.",
  "Be successful.",
  "Be free.",
  "Be loved.",
  "Be strong.",
  "Be brave.",
  "Be courageous.",
  "Be bold.",
  "Be fearless.",
  "Be unstoppable."];

function mostrarFrase() {
    let fraseAleatoria = frases[parseInt(Math.random() * frases.length)];
    document.getElementById("mensaje").innerHTML = fraseAleatoria;
};

document.getElementById("boton").addEventListener("click", mostrarFrase);