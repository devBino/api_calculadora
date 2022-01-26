$(function(){
    
    $('#btnAcessar').click(async function(){

        var objValidaCampos = validaCampos();
        
        if( objValidaCampos.valido ){
            
            setTimeout(function(){
                $('#frmLogin').submit();
            },1000);

        }else{
            alert("Por favor informar usuário e senha!!");
            $(objValidaCampos.idCampo).focus();
        }

    })

})