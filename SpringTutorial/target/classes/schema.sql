CREATE TABLE IF NOT EXISTS Content (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    category text,
    desc text,
    username text,
    email text,
    price DECIMAL(10,2),
    image VARCHAR(255),
    primary key (id)
);