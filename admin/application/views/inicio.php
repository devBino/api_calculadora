<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora LTDA - ADMIN</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="<?=base_url()?>assets/css/app.css">

    <script src="<?=base_url()?>assets/js/form.js"></script>
    <script src="<?=base_url()?>assets/js/inicio.js"></script>

</head>
<body>

    <div class="container dv-login">
        
        <h1>Administração - Login</h1>
        
        <hr>
        
        <form id="frmLogin" action="<?=base_url()?>inicio/acessar" method="post">
            <div class="mb-3 row">
                <label for="txtUsuario" class="col-sm-2 col-form-label">Usuário</label>
                <div class="col-sm-10">
                    <input type="text" name="usuario" class="form-control campos" id="txtUsuario" autofocus="on">
                </div>
            </div>

            <div class="mb-3 row">
                <label for="txtPassword" class="col-sm-2 col-form-label">Senha</label>
                <div class="col-sm-10">
                    <input type="password" name="password" class="form-control campos" id="txtPassword" >
                </div>
            </div>
            
            <div class="mb-3 row">
                <div class="d-grid gap-2">
                    <button id="btnAcessar" class="btn btn-secondary" type="button">Acessar</button>
                </div>
            </div>
        </form>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>