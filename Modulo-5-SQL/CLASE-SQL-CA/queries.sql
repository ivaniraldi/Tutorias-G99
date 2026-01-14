-- Active: 1768350968754@@127.0.0.1@5432@clase_g99

CREATE TABLE monedas (nombre VARCHAR(50));
INSERT INTO monedas (nombre) VALUES 
('Guaraní'),
('Rupiah'),
('Ruble'),
('Peso'),
('Peso'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Euro'),
('Ariary'),
('Denar'),
('Rupiah'),
('Ruble'),
('Yuan Renminbi'),
('Lek');

SELECT * FROM monedas;

SELECT COUNT(*) FROM monedas;
SELECT COUNT(*) FROM monedas WHERE nombre = 'Peso';
SELECT COUNT(*) FROM monedas WHERE nombre = 'Peso' OR nombre = 'Ruble';
SELECT COUNT(DISTINCT nombre) FROM monedas;
SELECT DISTINCT nombre FROM monedas;

CREATE TABLE ventas (categoria VARCHAR(50), monto INT);

INSERT INTO ventas (categoria, monto) VALUES 
('Books', 214),
('Games', 293),
('Baby', 241),
('Tools', 719),
('Tools', 385),
('Movies', 882),
('Outdoors', 654),
('Baby', 332),
('Grocery', 332),
('Toys', 952),
('Games', 682),
('Books', 527),
('Kids', 980),
('Grocery', 300);

SELECT * FROM ventas;
SELECT COUNT (*) FROM ventas;
SELECT COUNT(DISTINCT categoria) FROM ventas;
SELECT COUNT(DISTINCT monto) FROM ventas;
SELECT COUNT (*) FROM ventas WHERE categoria = 'Tools' OR categoria = 'Games';


SELECT nombre, COUNT(*) AS cantidad
FROM monedas 
GROUP BY nombre;
SELECT categoria, COUNT (*) AS cantidad
FROM ventas
GROUP BY categoria;

SELECT categoria, SUM(monto) 
FROM ventas
GROUP BY categoria;

SELECT categoria, AVG(monto) 
FROM ventas
GROUP BY categoria;

SELECT categoria, SUM(monto) AS total_ventas, AVG(monto) AS promedio_ventas, MIN(monto) AS venta_minima, MAX(monto) AS venta_maxima
FROM ventas
GROUP BY categoria;

SELECT categoria, SUM (monto) AS total_ventas
FROM ventas
GROUP BY categoria
ORDER BY total_ventas DESC
LIMIT 3;


SELECT categoria, SUM(monto) AS total_ventas
FROM ventas
WHERE monto > 900
GROUP BY categoria;

SELECT categoria, SUM(monto) AS total_ventas
FROM ventas
GROUP BY categoria
HAVING SUM(monto) > 900;


CREATE TABLE transacciones (id INT, monto INT);

INSERT INTO transacciones (id, monto) VALUES 
(4, 490),
(4, 159),
(2, 1000),
(2, 578),
(1, 613),
(3, 366),
(2, 546),
(5, 265),
(1, 163),
(2, 135),
(2, 404),
(4, 885),
(2, 309),
(5, 78);

SELECT id, SUM(monto) FROM transacciones GROUP BY id;

SELECT id, SUM(monto) AS total_transacciones
FROM transacciones
GROUP BY id
HAVING SUM(monto) < 500;

SELECT id, SUM(monto) 
FROM transacciones 
GROUP BY id 
HAVING SUM(monto) > 1000;

SELECT * FROM ventas
WHERE monto > (SELECT AVG(monto) FROM ventas)
ORDER BY monto DESC
LIMIT 5;

SELECT AVG(monto) FROM ventas;

SELECT * FROM transacciones WHERE monto > (SELECT AVG(monto) FROM transacciones);

SELECT AVG(monto) FROM transacciones;