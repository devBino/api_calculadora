$(function(){

    $('#btnCancelar').click(function(){
        if(confirm('Deseja cancelar e sair??')){
            window.location.href = '/sair';
        }
    });
  
    $('#btnCalcular').click(async function(){

        var objValidaCampos = validaCampos();
        
        if(objValidaCampos.valido){
            
            var jsonResponse = await enviaRequestAsync( `/calculadora`,'POST',objValidaCampos.data);
            var enviado = jsonResponse.response.data.success;


            if( enviado == undefined || enviado == null || !enviado ){
                
                alert('Ocorreu um erro ao enviar os dados...');
                $('#txtNomeCalculo').focus();

            }else if(enviado){

                imprimirResultado(calcular());
                limparCampos('txtNomeCalculo');

            }

            

        }else{
            alert('Por favor informe todos os campos...');
            $(objValidaCampos.idCampo).focus();
        }

    });

})

function calcular(){

    var valor1 = parseFloat($('#txtValor1').val());
    var valor2 = parseFloat($('#txtValor2').val());
    var operacao = $('#sctTipo').val();

    var resultado = 0.00;
    var sinal = '';

    if( operacao == 'adi' ){
        resultado = valor1 + valor2;
        sinal = ' mais ';
    }else if( operacao == 'sub' ){
        resultado = valor1 - valor2;
        sinal = ' menos ';
    }else if( operacao == 'mul' ){
        resultado = valor1 * valor2;
        sinal = ' vezes ';
    }else if( operacao == 'div' ){
        resultado =  (valor1 > 0 && valor2 > 0) ? valor1 / valor2 : 0;
        sinal = ' divido(s) por ';
    }

    return {
        valor1:valor1,
        valor2:valor2,
        sinal:sinal,
        resultado:resultado
    }

}

function imprimirResultado(pObj){
    var p = `<p align="center">${pObj.valor1}${pObj.sinal}${pObj.valor2} = ${pObj.resultado.toFixed(2)}</p>`;
    $('#dv-resultado').html(p);
}