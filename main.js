let finalizarPrograma = true;

function calculadora(num1, x, num2) {
  //Función que pide un numero, un operador y el 2do numero. Debido al operador realiza diferentes operaciones dependiendo el caso
  if (isNaN(num1) || isNaN(num2)) {
    // Se verifica que los datos ingresados sean números, luego de realizar toda la operación
    alert("Ingrese números válidos");
    console.log("Ingrese números válidos");
    return;
  }
  switch (x) {
    case "+":
      alert(num1 + num2);
      console.log(num1 + num2);
      break;
    case "-":
      alert(num1 - num2);
      console.log(num1 - num2);
      break;
    case "*":
      alert(num1 * num2);
      console.log(num1 * num2);
      break;
    case "/":
      alert(num1 / num2);
      console.log(num1 / num2);
      break;
    default:
      alert("Ingrese un operador correcto");
      console.log("Ingrese un operador correcto"); // Luego de realizar la operación verifica si se ingreso un operador correcto
      break;
  }
}

do {
  let numero1 = parseInt(prompt("Ingrese el primer número"));
  let operador = prompt("Elija un operador \n+, -, *, /"); // Se pide el 1er numero, luego el operador y por último el 2do número
  let numero2 = parseInt(prompt("Ingrese el segundo número"));

  calculadora(numero1, operador, numero2); // Se invoca a la función con los datos pedidos al usuario por medio del prompt

  let continuarCalculando; // Otro ciclo para preguntar si desea continuar o no
  while (true) {
    continuarCalculando = prompt("¿Quieres realizar otra operación?\nSi / No");
    if (continuarCalculando == "Si" || continuarCalculando == "No") {
      // Si el prompt recibe un Si, sale del ciclo y continua con las operaciones matemáticas
      break; // Si el prompt recibe un No, sale del ciclo también pero tiene una nueva condición
    } else {
      alert("Opción incorrecta"); // Si el prompt no recibe ninguna de las 2 opciones que se solicita, se sigue repitiendo. Hasta recibir un si o un No
    }
  }

  if (continuarCalculando == "No") {
    // Si después de salir del ciclo, se evalua la condición del prompt, si sigue siendo un No, el programa pasa a falso y se sale del ciclo, finalizando el programa
    finalizarPrograma = false;
    alert("Programa Finalizado");
  }
} while (finalizarPrograma);
