const calc = () => {
  const operation = document.getElementById('operation').value;
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  const isValid = (num) => num === '' || num === null || isNaN(num)

  if(isValid(num1)) {
    alert('favor digitar um número válido');
    return false;
  }

  if(isValid(num2)) {
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
      result = num1 / (num2 || 1);
      break;

    default: alert('Escolha uma opção');
    return false;

  }

  document.getElementById('result').value = result;
}
