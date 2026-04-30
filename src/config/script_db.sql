create database if not exists santos_fp;
use santos_fp;

create table user (
id int not null primary key auto_increment,
nome varchar(50),
email varchar(50),
telefone varchar(11),
senha varchar(30)
);

create table receitas (
id_receita int not null primary key auto_increment,
titulo_receita varchar(50),
descricao varchar(200),
valor decimal,
fk_usuario int not null,
constraint fk_id_user foreign key receitas(fk_usuario) references user(id)
);

create table jogador (
id_jogador int not null primary key auto_increment,
nome_jogador varchar(50),
idade int,
dt_nasc datetime,
valor_mercado decimal,
fk_contrato int not null
);
alter table jogador add constraint fk_jogador_contrato foreign key jogador(fk_contrato) references contrato(id_contrato);

create table contrato (
id_contrato int not null primary key auto_increment,
tipo_contrato varchar(30),
salario decimal,
validade_contrato datetime,
fk_jogador int not null
);
alter table contrato add constraint fk_contrato_jogador foreign key contrato(fk_jogador) references jogador(id_jogador);