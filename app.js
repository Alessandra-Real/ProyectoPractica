const pres = prompt("Ingrese el presupuesto de la semana:");

const presu = document.querySelector("#total");
presu.innerHTML = pres;

let presRes = pres;
const rest = document.querySelector("#restante");
rest.innerHTML = presRes;


const GasForm = document.querySelector("#agregar-gasto");
GasForm.addEventListener("submit", function(e) {
  e.preventDefault();


  const gasNom = document.querySelector("#gasto").value;
  const gasCant = document.querySelector("#cantidad").value;


  if (gasCant === "" || isNaN(gasCant) || parseInt(gasCant) > presRes) {
    alert("No tiene ese presupuesto.");
    return;
  }


  presRes -= parseInt(gasCant);
  rest.innerHTML = presRes;

  
});