//Llamando botones del HTML
const diaInput = document.getElementById("dia");
const mesInput = document.getElementById("mes");
const añoInput = document.getElementById("año");
const resultadoInput = document.getElementById("resultado");
const botonCalcula = document.getElementById("calcular");
//Variable, arreglo de dias de la semana

const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

/* Declarar el switch */
const eslaborable = (diaSemana) => {
    switch (diaSemana) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "es laborable"
            break;
        default:
            return "es fin de semana y no es laborable"
            break;
    }
}
/* https://www.w3schools.com/jsref/jsref_getday.asp */
const calcular = () => {
    const d = new Date(añoInput.value, mesInput.value - 1, diaInput.value) //El parámetro del mes en la clase Date de JavaScript comienza en 0 para enero y termina en 11 para diciembre, por lo que es necesario restar 1 al valor del mes 
    const eldiaSemana = d.getDay();
    resultadoInput.value = `${dias[eldiaSemana][0]+dias[eldiaSemana].slice(1)}, ${eslaborable(eldiaSemana)}`
    console.log(`${resultadoInput}`);
}
function validateInputs(event) {
    event.preventDefault();
    if (añoInput.value && mesInput.value && diaInput.value) {
        calcular();
    } else {
        alert('Todos los campos deben estar llenos');
    }
}
botonCalcula.addEventListener("click", validateInputs) 