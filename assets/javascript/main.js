'use strict'

// 1. Definição dos atalhos (Shorthands)
const $ = (seletor) => document.querySelector(seletor);        // Retorna 1 elemento (ID ou Classe)
const $$ = (seletor) => document.querySelectorAll(seletor);    // Retorna TODOS os elementos

// const botaoCalcular = document.getElementById('botao-calcular')
const botaoAcao = $('.botao-calcular')
// const botaoCalcular = $('#botao-subtrair')
// const botaoCalcular = $('#botao-multiplicar')
// const botaoCalcular = $('#botao-dividir')

function mostrarComissao(){

    // Usando o seu atalho $ do querySelector:
const caixaNome = $('.botao-calcular');

// Captura o valor do atributo data-acao:
const acao = caixaNome.dataset.acao;

console.log(`acao ${acao}`);

    // const nome = $('#caixa-nome')
    // const valor = $('#caixa-valor')
    // const resultado = $('#resultado')

    // const salario = valor.value * 0.08

    // resultado.textContent = `${nome.value} o valor das venda é: ${Number(valor.value).toFixed(2)} se seu salário é ${Number(salario).toFixed(2)}` 
    // console.log(nome.value);
    // console.log(valor.value);
    // console.log(salario);
}

botaoAcao.addEventListener('click', mostrarComissao)


