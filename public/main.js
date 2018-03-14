const calc = () => {
  const operation = document.getElementById('operation').value;
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if(num1 === '' || num1 === null || isNaN(num1)){
    alert('favor digitar um número válido');
    return false;
  }

  if(num2 == '' || num2 == null || isNaN(num2)){
    alert('favor digitar um número válido');
    return false;
  }

  switch (operation) {
    case '1':
      result = num1 - num2;
      break;

    case '2':
      result = num1 + num2;
      break;

    case '3':
      result = num1 * num2;
      break;

    case '4':
      result = num1 / num2;
      break;

    default: alert('Escolha uma opção');
    return false;

  }

  document.getElementById('result').value = result;
}
