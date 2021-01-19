create table list(
id SERIAL PRIMARY KEY,
category_id INT REFERENCES categories(id),
list_items TEXT ARRAY
);

CREATE TABLE categories(
id SERIAL PRIMARY KEY,
category_name TEXT);