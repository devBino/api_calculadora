<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora LTDA - ADMIN</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="<?=base_url()?>assets/css/app.css">

    <script src="<?=base_url()?>assets/js/sendRequest.js"></script>
    <script src="<?=base_url()?>assets/js/sistema.js"></script>

</head>
<body>

    <div class="container dv-sistema">

        <div class="row">
            <div class="col-md-10">
                <h1>Administração - Histórico Cálculos</h1>
            </div>
            <div class="col-md-2">
                <div class="btn-group mt-2 ml-2">
                    <a href="<?=base_url()?>sistema" id="btnAtualizar" class="btn btn-secondary btn-sm">Atualizar</a>
                    <a href="<?=base_url()?>login" id="btnSair" class="btn btn-secondary btn-sm">Sair</a>
                </div>
            </div>
        </div>        
    
        <hr>
        
        <div class="dv-calculos">
            <table id="tbCalculos" class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome Cálculo</th>
                        <th scope="col">Data Cálculo</th>
                        <th scope="col">Enviado por</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Parametro 1</th>
                        <th scope="col">Parametro 2</th>
                        <th scope="col">Resultado</th>
                        <th scope="col">-</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <?php foreach($calculos as $c): ?>
                        
                        <tr>
                            <th scope="row"><?=$c->id?></th>
                            <td><?=$c->nomeCalculo?></td>
                            <td><?=$c->dataCalculo?></td>
                            <td><?=$c->nomeUsuario?></td>
                            <td><?=$c->tipo?></td>
                            <td><?=$c->parametro1?></td>
                            <td><?=$c->parametro2?></td>
                            <td><?=$c->resultado?></td>
                            <td><span class="sp-remove" data-id="<?=$c->id?>"><img  class="img-remove" src="https://img.icons8.com/ios-glyphs/50/000000/trash--v3.png"/></span></td>
                        </tr>

                    <?php endforeach ?>
                    
                </tbody>
            </table>
        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>