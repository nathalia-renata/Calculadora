function soma() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let total = parseInt(numero1) + parseInt(numero2);
    alert(total);
}
function subtracao() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let total = parseInt(numero1) - parseInt(numero2);
    alert(total);
}
function multiplicacao() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let total = parseInt(numero1) * parseInt(numero2);
    alert(total);
}
function divisao() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let total = parseInt(numero1) / parseInt(numero2);
    alert(total);
}
function raiz() {
    let numero = document.getElementById("num1").value;
numero = parseFloat(numero);
if (isNaN(numero) || numero < 0) {
  alert("Por favor, digite um número válido (maior ou igual a zero).");
} else {
  let raizQuadrada = Math.sqrt(numero);
  alert(`A raiz quadrada de ${numero} é ${raizQuadrada}.`);
}

}

