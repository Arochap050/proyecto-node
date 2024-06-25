CREATE DATABASE node_crud;

USE node_crud;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) not null,
    edad INT
);

SELECT * FROM usuarios;