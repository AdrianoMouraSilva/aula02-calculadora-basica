'use strict'
const $ = (seletor) => document.querySelector(seletor);       
const $$ = (seletor) => document.querySelectorAll(seletor);

const botaoSomar = $('#botao-somar')
const botaoSubtrair = $('#botao-subtrair')
const botaoMultiplicar = $('#botao-multiplicar')
const botaoDividir = $('#botao-dividir')

// 1. Seleciona todos os botões da classe
// const botoesCalcular = document.querySelectorAll('.botao-calcular');
const botoesCalcular = $$('.botao-calcular')

function calcularGeral(event) {
  const acao = event.currentTarget.dataset.acao;
  const valUm = $('#val-1')
  const valDois = $('#val-2')
  const resultado = $('#resultado')

  switch (acao) {
    case 'somar':
        const soma = Number(valUm.value) + Number(valDois.value)
        resultado.textContent = `${valUm.value} + ${valDois.value} = ${soma}` 
        break;

    case 'subtrair':
        const subtrair = Number(valUm.value) - Number(valDois.value)
        resultado.textContent = `${valUm.value} - ${valDois.value} = ${subtrair}` 
        break;
    case 'multiplicar':
        const multiplicar = Number(valUm.value) * Number(valDois.value)
        resultado.textContent = `${valUm.value} x ${valDois.value} = ${multiplicar}` 
        break;

      case 'dividir':
        const dividir = Number(valUm.value) / Number(valDois.value)
        resultado.textContent = `${valUm.value} / ${valDois.value} = ${dividir}` 
        break;
    default:
        console.warn('Ação não reconhecida:', acao);
        break;
  }
}

botoesCalcular.forEach((botao) => {
  botao.addEventListener('click', calcularGeral);
});

function calcularSomar(){
    const valUm = $('#val-1')
    const valDois = $('#val-2')
    const resultado = $('#resultado')
    const valResultado = Number(valUm.value) + Number(valDois.value)
    // resultado.textContent = `${valUm.value} + ${valDois.value} = ${valResultado}` 
}

function calcularSubtrair(){
    const valUm = $('#val-1')
    const valDois = $('#val-2')
    const resultado = $('#resultado')
    const valResultado = Number(valUm.value) - Number(valDois.value)
    // resultado.textContent = `${valUm.value} - ${valDois.value} = ${valResultado}` 
}

function calcularMultiplicar(){
    const valUm = $('#val-1')
    const valDois = $('#val-2')
    const resultado = $('#resultado')
    const valResultado = Number(valUm.value) * Number(valDois.value)
    // resultado.textContent = `${valUm.value} X ${valDois.value} = ${valResultado}` 
}

function calcularDividir(){
    const valUm = $('#val-1')
    const valDois = $('#val-2')
    const resultado = $('#resultado')
    const valResultado = Number(valUm.value) / Number(valDois.value)
    // resultado.textContent = `${valUm.value} / ${valDois.value} = ${valResultado}` 
}

botaoSomar.addEventListener('click', calcularSomar)
botaoSubtrair.addEventListener('click', calcularSubtrair)
botaoMultiplicar.addEventListener('click', calcularMultiplicar)
botaoDividir.addEventListener('click', calcularDividir)


