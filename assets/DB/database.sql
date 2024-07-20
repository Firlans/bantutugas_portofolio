CREATE DATABASE bantutugas;

SHOW DATABASES;

/* create table services */
USE bantutugas;
CREATE TABLE services(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

/* create table testimonies */
USE bantutugas;
CREATE TABLE testimonies(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    quotes VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


/* show tables */
USE bantutugas;
SHOW TABLES ;
DESC services;
DESC testimonies;


/* insert data services */
USE bantutugas;
INSERT INTO services(name)
VALUES
    ("Bantu Website"),
    ("Bantu Skripsi"),
    ("Bantu Tugas"),
    ("Bantu Program"),
    ("Bantu UI/UX"),
    ("Bantu PPT");

/* insert data testimonies */
USE bantutugas;
INSERT INTO testimonies (name, quotes)
VALUES
    ("GEA", "Oke kak makasih Programnya bagus banget saya suka tampilan UI nya"),
    ("Fawas Fatih", "Makasih Bang Saya Dapet Nilai A"),
    ("Dafa", "Mantap bang prosesnya cepet banget harganya juga pas di kantong mahasiswa");

/* delete table services */
USE bantutugas;
DROP TABLE services;

/* delete table testimonies */
USE bantutugas;
DROP TABLE testimonies;

/* select data services */
USE bantutugas;
SELECT * FROM services;

/* select data testimonies */
USE bantutugas;
SELECT * FROM testimonies;

/* select data services dalam bentuk format json */
USE bantutugas;
SELECT 
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', id,
            'name', name
        )
    ) AS json_result
FROM services;

/* select data testimonies dalam bentuk format json */
USE bantutugas;
SELECT 
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', id,
            'name', name,
            'quotes', quotes,
            'created_at', created_at,
            'updated_at', updated_at
        )
    ) AS json_result
FROM testimonies;