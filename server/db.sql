DROP DATABASE IF EXISTS videoclub;
CREATE DATABASE videoclub CHARSET utf8mb4;
USE videoclub;
CREATE TABLE peliculas(
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    id_director VARCHAR(50),
    id_genero VARCHAR(255),
    resumen TEXT,
    copias INT,
    CONSTRAINT fk_director FOREIGN KEY (id_director) REFERENCES directores(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_genero FOREIGN KEY (id_genero) REFERENCES generos(id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE directores(
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);
CREATE TABLE generos(
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE clientes(
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);
CREATE TABLE prestamos(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fecha_prestamo TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_devolcion DATE,
    pelicula_id VARCHAR(255) NOT NULL,
    cliente_id VARCHAR(255) NOT NULL,
	CONSTRAINT fk_pelicula_prestada FOREIGN KEY (pelicula_id) REFERENCES peliculas(id),
    CONSTRAINT fk_clientes FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);