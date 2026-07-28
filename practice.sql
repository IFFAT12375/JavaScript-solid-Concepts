CREATE DATABASE SQLPractice;
GO

USE SQLPractice;
GO

CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName NVARCHAR(100),
    CategoryID INT,
    Price DECIMAL(10,2)
);

INSERT INTO Products
VALUES
(1,'Chai',1,18),
(2,'Chang',1,19),
(3,'Aniseed Syrup',2,10),
(4,'Chef Anton',2,22),
(5,'Ikura',3,31),
(6,'Konbu',3,6);

select * from Products;

SELECT name
FROM sys.databases;