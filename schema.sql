DROP TABLE IF EXISTS items;
CREATE TABLE items(
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255),
    price VARCHAR(255),
    image VARCHAR(255),
    description VARCHAR(255)

);