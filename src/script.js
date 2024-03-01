function escopo() {
  const form = document.querySelector('.form');
  const resultados = document.querySelector('.resultados');

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = parseFloat(form.querySelector('.peso').value);
    const altura = parseFloat(form.querySelector('.altura').value);

    const imc = calcularIMC(peso, altura);
    exibirResultadoIMC(imc);
  }

  form.addEventListener('submit', recebeEventoForm);
}

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function exibirResultadoIMC(imc) {
  const resultados = document.querySelector('.resultados');
  if (imc <= 18.5) {
    resultados.textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' e está classificado como MAGREZA';
  } else if (imc > 18.5 && imc <= 24.9) {
    resultados.textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' e está classificado como NORMAL';
  } else if (imc > 24.9 && imc <= 29.9) {
    resultados.textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' e está classificado como SOBREPESO';
  } else if (imc > 29.9 && imc <= 39.9) {
    resultados.textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' e está classificado como OBESIDADE';
  } else if (imc >= 39.9) {
    resultados.textContent = 'Seu IMC é: ' + imc.toFixed(2) + ' e está classificado como OBESIDADE GRAVE';
  } else {
    resultados.textContent = 'Verifique novamente as informações';
  }
}

escopo();
