CREATE DATABASE desafio3_tuNombre_tuApellido_3digitos;

-- \c desafio3_tuNombre_tuApellido_3digitos

CREATE TABLE countries(
id INTEGER,
name VARCHAR,
iso3 CHAR(3),
capital VARCHAR,
currency CHAR(3),
currency_name VARCHAR,
tid CHAR(3),
region VARCHAR,
subregion VARCHAR,
latitude DECIMAL(10,8),
longitude DECIMAL(11,8)
);

CREATE TABLE states(
id INTEGER,
name VARCHAR,
country_id INTEGER,
state_code CHAR(5),
state_type VARCHAR,
latitude DECIMAL(10,8),
longitude DECIMAL(11,8)
);

CREATE TABLE cities(
id INTEGER,
name VARCHAR,
state_id INTEGER,
latitude DECIMAL(10,8),
longitude DECIMAL(11,8)
);

COPY countries FROM '/path/to/your/countries.csv' DELIMITER ',' CSV HEADER;
COPY states FROM '/path/to/your/states.csv' DELIMITER ',' CSV HEADER;
COPY cities FROM '/path/to/your/cities.csv' DELIMITER ',' CSV HEADER;


-- 1. Contar la cantidad de países en la tabla countries.
SELECT COUNT(*) FROM countries;


-- 2. Listar los nombres de los países en la región 'Europe'.
SELECT name FROM countries 
-- ahora filtra por region
WHERE region = 'Europe';