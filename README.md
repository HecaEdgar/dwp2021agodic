# dwp2021agodic
Repositorio de prueba para la clase de desarrollo web profesional de agosto diciembre 2021


create database if not exists dwp2021;
use dwp2021;
create table if not exists books(
	id int primary key auto_increment,
    name varchar(50),
	publish_date date,
	category varchar(50),
	author varchar(50),
	publisher varchar(50),
	sell_price double,
	isbn varchar(50),
	stock tinyint,
	edition varchar(4)
);

grant all on dwp2021.* to dwp2021@localhost identified by "mipasswordbiendificilote";