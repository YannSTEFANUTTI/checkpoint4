-- Active: 1674984408838@@127.0.0.1@3306@checkpoint4
CREATE TABLE
    user (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `surname` VARCHAR(100) NOT NULL,
        `password` VARCHAR(255) NOT NULL
    );

CREATE TABLE
    `city` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `city` VARCHAR(255) NOT NULL
    );

CREATE TABLE
    `restaurant` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `name` VARCHAR(255) NOT NULL,
        `image` VARCHAR(255) NOT NULL,
        `adresse` VARCHAR(255) NOT NULL,
        `resume` VARCHAR(255),
        `phone` INT,
        `note` INT,
        `city_id` INT NOT NULL,
        FOREIGN KEY (city_id) REFERENCES city(id)
    );