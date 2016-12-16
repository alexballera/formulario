# formulario
Módulo de formulario con envío de correo

Crear Base de datos:

CREATE DATABASE formularios;
CREATE TABLE form_element(
contact_id int(10) NOT NULL AUTO_INCREMENT,
name varchar(45) NOT NULL,
lastname varchar(45) NOT NULL,
email varchar(45) NOT NULL,
phone varchar(45),
mesage text(255),
PRIMARY KEY (contact_id)
);
