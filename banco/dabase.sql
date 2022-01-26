drop database if exists db_calculo;

create database db_calculo
default character set utf8
default collate utf8_general_ci;

use db_calculo;

create table tb_usuarios(
    idUsuario int not null auto_increment,
    nomeUsuario varchar(105) unique not null,
    descSenha varchar(105) unique not null,
    codPermissao enum('1','2') not null,

    primary key(idUsuario)
)default charset = utf8;

create index idx_nomeUsuario on tb_usuarios(nomeUsuario);

create table tb_calculos(
    
    idCalculo int not null auto_increment,
    nomeCalculo varchar(105) not null,
    dataCalculo datetime not null,
    tipo enum('adi','sub','mul','div'),
    valor1 decimal(12,2) not null,
    valor2 decimal(12,2) not null,
	idUsuario int not null,
        
    foreign key (idUsuario) references tb_usuarios(idUsuario),

    primary key(idCalculo)

)default charset = utf8;

create index idx_nomeCalculo on tb_calculos(nomeCalculo);

insert into tb_usuarios (nomeUsuario,descSenha,codPermissao)
values 
('admin','21232f297a57a5a743894a0e4a801fc3','1'),
('colaborador1','f775aa99fedfd20c086041d607cd7e0e','2'),
('colaborador2','674112959bd43ba4a483c08635ca0d7c','2');
