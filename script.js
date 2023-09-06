
// calculodolarcambio monedas

function convertir() {
  const montoInput = document.getElementById("monto");
  const selecionemonedaSelect = document.getElementById("selecionemoneda");
  const tipodecambioSelect = document.getElementById("tipodecambio");
  const resultadoDisplay = document.getElementById("resultado");
  const blue = (713);
  const cripto = (736);
  const mep = (667);

  const monto = parseFloat(montoInput.value);
  const selecionemoneda = selecionemonedaSelect.value;
  const tipodecambio = tipodecambioSelect.value;

  // Aquí deberías implementar la lógica de conversión de moneda
  // Por ejemplo, puedes usar tasas de cambio fijas o hacer una llamada a una API de tasas de cambio

  // En este ejemplo, asumiremos una tasa de cambio fija para simplificar
  const tasadecambio = 665; // 1 USD = 1.2 EUR

  const convertedMonto = monto * tasadecambio / blue ; //convertedMontomep = monto * tasadecambio / mep ;
  // var convertedMontomep = monto * tasadecambio / mep ;

  resultadoDisplay.textContent = `${monto} ${selecionemoneda} = ${convertedMonto.toFixed(2)} ${tipodecambio}`;
  // resultadoDisplay.textContent = `${monto} ${selecionemoneda} = ${convertedMontomep.toFixed(2)} ${tipodecambio}`;
}



// calculodolar cambio monedas 



// calculador
 let displayValue = '';

 function appendToDisplay(value) {
   displayValue += value;
   updateDisplay();
 }

 function updateDisplay() {
   document.getElementById('display').value = displayValue;
 }

 function clearDisplay() {
   displayValue = '';
   updateDisplay();
 }

 function calculate() {
   try {
     const result = eval(displayValue);
     displayValue = result.toString();
     updateDisplay();
   } catch (error) {
     displayValue = 'Error';
     updateDisplay();
   }
 }

// calculador 2
function limpiar() {
  document.getElementById('miFormulario').reset();
}

function sumar() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('el-resultado').innerHTML = x+y;
  // alert(x+y);
}

function restar() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('el-resultado').innerHTML = x-y;
  // alert(x+y);
}

function multiplicar() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('el-resultado').innerHTML = x*y;
  // alert(x+y);
}

function dividir() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('el-resultado').innerHTML = x/y;
  // alert(x+y);
}

function tienda() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('el-resultado').innerHTML = x/y;
  // alert(x+y);
}

// ini cards compra calculador 1

function tiendaMultiplicacion() {
  // Obtener el valor ingresado por el usuario
  const numeroIngresado = parseFloat(document.getElementById('cantidad').value);
  var precio = 734
  
  // Verificar si el valor ingresado es válido
  if (!isNaN(numeroIngresado) && numeroIngresado !== 0) {
      // Realizar la multiplicacion
      const resultado = precio * numeroIngresado;

      // Mostrar el resultado en la página
      document.getElementById('total').textContent = resultado;
  } else {
      alert("Por favor, ingrese un número válido (distinto de cero).");
  }
}

function tiendaMultiplicacion2() {
  // Obtener el valor ingresado por el usuario
  const numeroIngresado2 = parseFloat(document.getElementById('cantidad2').value);
  var precio2 = 19.666007
  
  // Verificar si el valor ingresado es válido
  if (!isNaN(numeroIngresado2) && numeroIngresado2 !== 0) {
      // Realizar la multiplicacion
      const resultado2 = precio2 * numeroIngresado2;

      // Mostrar el resultado en la página
      document.getElementById('total2').textContent = resultado2;
  } else {
      alert("Por favor, ingrese un número válido (distinto de cero).");
  }
}

function tiendaMultiplicacion3() {
  // Obtener el valor ingresado por el usuario
  const numeroIngresado3 = parseFloat(document.getElementById('cantidad3').value);
  var precio3 = 1.267177
  
  // Verificar si el valor ingresado es válido
  if (!isNaN(numeroIngresado3) && numeroIngresado3 !== 0) {
      // Realizar la multiplicacion
      const resultado3 = precio3 * numeroIngresado3;

      // Mostrar el resultado en la página
      document.getElementById('total3').textContent = resultado3;
  } else {
      alert("Por favor, ingrese un número válido (distinto de cero).");
  }
}

// fin cards compra calculador 1