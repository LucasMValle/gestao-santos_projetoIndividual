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
tipo varchar(25),
jogador boolean,
titulo_receita varchar(50),
descricao varchar(255),
valor decimal,
bonus decimal
);

create table jogador (
id_jogador int not null primary key auto_increment,
nome_jogador varchar(50),
idade int,
dt_nasc datetime,
valor_mercado decimal
);


create table contrato (
id_contrato int not null auto_increment,
fk_jogador int not null,
tipo_contrato varchar(30),
salario decimal,
inicio_contrato datetime,
final_contrato datetime,
clausulas varchar(255),
primary key (id_contrato, fk_jogador)
);
alter table contrato add constraint fk_contrato_jogador foreign key contrato(fk_jogador) references jogador(id_jogador);
alter table contrato add constraint chk_tipo_contrato check (tipo_contrato in ('Definitivo', 'Empréstimo'));