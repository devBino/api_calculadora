function limparCampos(idFocus, pClass = 'campos'){

    var campos = document.querySelectorAll(`.${pClass}`);
    
    for(let i=0; i<campos.length; i++){
        
        if( $(campos[i]).attr('name') == 'token' ){
            continue;
        }

        $(campos[i]).val('');
        
    }

    $(`#${idFocus}`).focus();

}

function validaCampos(pClass = 'campos'){

    var campos = document.querySelectorAll(`.${pClass}`);
    var valido = true;
    var idCampo = '';

    var objCampos = new Object();

    for(let i=0; i<campos.length; i++){
        
        let valorCampo = $(campos[i]).val();
        
        objCampos[$(campos[i]).attr('name')] = valorCampo;

        if( valorCampo == undefined || valorCampo == null || valorCampo == '' ){
            valido = false;
            idCampo = $(campos[i]).attr('id');
            break;
        }
        
    }

    return {
        valido:valido,
        idCampo:`#${idCampo}`,
        data:objCampos
    }
}