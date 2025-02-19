-- create user blahaj if it doesn't exist
CREATE USER IF NOT EXISTS 'blahaj'@'localhost' IDENTIFIED BY '';

-- create database blahaj-api if it doesn't exist
CREATE DATABASE IF NOT EXISTS `blahaj-api`;

-- grant all privileges on blahaj-api to blahaj
GRANT ALL PRIVILEGES ON `blahaj-api`.* TO 'blahaj'@'localhost';

-- use blahaj-api
USE `blahaj-api`;

-- create table images
CREATE TABLE `images` (
  `url` text NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- grant all privileges on blahaj-api to blahaj
GRANT ALL PRIVILEGES ON `blahaj-api`.* TO 'blahaj'@'localhost';
