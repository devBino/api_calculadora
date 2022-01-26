$(function(){

    $('#btnSair').click(function(){
        
        if( !confirm('Deseja sair da tela do sistema e voltar ao login ??') ){
            return false;
        }

    })

    $('.sp-remove').click(async function(){
        
        if( confirm('Deseja remover o registro selecionado ??') ){
            
            var id = $(this).attr('data-id');
            
            var response = await enviaRequestAsync('/v1/admin/calculo/deletar','post',{id:id});
            var jsonResponse = JSON.parse(response.response);

            if( jsonResponse.success && parseInt(jsonResponse.deletados) > 0 ){
                alert("Registro deletado com sucesso...");
                window.location.href = "";
            }else{
                alert("Não foi possível deletar o registro selecionado...");
            }
            
        }
        
    })

})