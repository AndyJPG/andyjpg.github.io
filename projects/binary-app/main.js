
function onchange() {
  const number = document.getElementById('binary-number').value;
  const result = document.getElementById('result');
  const alert = document.getElementsByClassName('alert')[0];
  const matches = /^[0-1]+$/;

  if (number.match(matches) && number.length <= 9) {
    result.innerHTML = parseInt(parseFloat(number), 2);
    alert.style.display = 'none';
  } else {
    alert.style.display = 'block';
    alert.innerHTML = 'The input can only be 0 or 1';
  }
}

const inputField = document.getElementById('binary-number');
inputField.addEventListener('keyup', onchange);
inputField.setAttribute('maxlength', '8');
