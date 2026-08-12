CREATE DATABASE SQLPractice;
GO

USE SQLPractice;
GO

CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName NVARCHAR(100),
    CategoryID INT,
    Price DECIMAL(10,2),
    CONSTRAINT pK_Products PRIMARY KEY (ProductID)
);

ALTER TABLE Products
ADD email NVARCHAR(100);


INSERT INTO Products
VALUES
(1,'Chai',1,18, 'iffat@gmail.com'),
(2,'Chang',1,19, NULL),
(3,'Aniseed Syrup',2,10, NULL),
(4,'Chef Anton',2,22, NULL),
(5,'Ikura',3,31, NULL),
(6,'Konbu',3,6, NULL);

select * from Products;

SELECT COUNT(*)
FROM Products;

SELECT TOP 3 *
FROM Products;

UPDATE Products
SET Price=100
WHERE ProductID=1;

DELETE
FROM Products
WHERE ProductID=6;

SELECT name
FROM sys.databases;

