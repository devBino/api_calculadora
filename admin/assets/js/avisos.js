
redirect(5);

function redirect(tempo = 1){

    var contTempo = tempo;
    
    if(contTempo > -1){
        
        setTimeout(function(){

            if(contTempo > 0){
                $('#pStatus').html(`Redirecionamento automático em ${tempo} segundo(s)...`)
            }
            
            contTempo = contTempo - 1;
            
            redirect(contTempo);
        },1000);

    }else{
        if( $('#hdIdAviso').val() == '4' ){
            window.location.href = '/v1/admin/sistema';
        }else{
            window.location.href = '/v1/admin/inicio';
        }
    }

}