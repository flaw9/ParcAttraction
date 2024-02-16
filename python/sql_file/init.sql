DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);

DROP TABLE IF EXISTS avis;

CREATE TABLE avis (
    avis_id int auto_increment,
    primary key (avis_id),
    foreign key(attraction_id),
    texte varchar(255) not null,
    note int not null,
    nom varchar(255),
    prenom varchar(255) 
);