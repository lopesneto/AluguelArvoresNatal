
function att(){

    document.getElementById('attFrase1').innerHTML = 'por mês';
    document.getElementById('attFrase2').innerHTML = 'por mês';
    document.getElementById('attFrase3').innerHTML = 'por mês';

    document.getElementById('attPreço1').innerHTML = 'R$ 29,99';
    document.getElementById('attPreço2').innerHTML = 'R$ 59,99';
    document.getElementById('attPreço3').innerHTML = 'R$ 99,99';

    document.getElementById('titulo').innerHTML = 'Calcular Aluguel Mensais';
    document.getElementById('periodo').innerHTML = 'Período(mensais):';

    var porMes = document.getElementById('mes');
    porMes.style.fontWeight = 'bold';
    var porSemana = document.getElementById('semana');
    porSemana.style.fontWeight = 'normal';

   
}
function att2(){

    document.getElementById('attFrase1').innerHTML = 'por semana';
    document.getElementById('attFrase2').innerHTML = 'por semana';
    document.getElementById('attFrase3').innerHTML = 'por semana';

    document.getElementById('attPreço1').innerHTML = 'R$ 9,99';
    document.getElementById('attPreço2').innerHTML = 'R$ 14,99';
    document.getElementById('attPreço3').innerHTML = 'R$ 59,99';

    document.getElementById('titulo').innerHTML = 'Calcular Aluguel Semanal';
    document.getElementById('periodo').innerHTML = 'Período(semanais):';

    var porSemana = document.getElementById('semana');
    porSemana.style.fontWeight = 'bold';
    var porMes = document.getElementById('mes');
    porMes.style.fontWeight = 'normal';

}

function calcularValores(){
    var v1 = document.getElementById('valor1').value;
    var v2 = document.getElementById('valor2').value;
    var total = (v1*v2);
    document.getElementById('valor3').value = 'R$'+ total;
}
