create database jogoloja;
use jogoloja;

create table jogos (
    id int auto_increment primary key,
    nome varchar (100),
    tipo varchar (100),
    ano int
);
insert into jogos (nome, tipo, ano) values ('God of War', 'Ação', '2007')