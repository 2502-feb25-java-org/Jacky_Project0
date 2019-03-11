--create database challenge2
CREATE TABLE Products (
  id integer NOT NULL,
  name varchar(100) NOT NULL,
  price integer NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (name)
);

CREATE TABLE Customers (
  id integer NOT NULL,
  FirstName varchar(100) NOT NULL,
  LastName varchar(100) NOT NULL,
  CardNumber bigint NOT NULL,
  PRIMARY KEY (id),
);

CREATE TABLE Orders (
  id integer NOT NULL,
  product_id integer NOT NULL,
  customer_id integer NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE,
  FOREIGN KEY (customer_id) REFERENCES Customers(id) ON DELETE CASCADE
);

INSERT INTO Products VALUES (1, 'IPad', $1000)
INSERT INTO Products VALUES (2, 'IPhone', $200)
INSERT INTO Products VALUES (3, 'IMac', $1000)
GO
select * From Products
/*UPDATE Products
SET price=$200
WHERE name='IPhone';*/
INSERT INTO Customers VALUES (1, 'Tina', 'Smith', 4539958335766086)
INSERT INTO Customers VALUES (2, 'Tim', 'Adrain', 4539415809571690)
INSERT INTO Customers VALUES (3, 'Keith', 'Howd', 5171901267044882)
select * from Customers

INSERT INTO Orders VALUES (23728321, 2,2)
INSERT INTO Orders VALUES (23122391, 2,1)
INSERT INTO Orders VALUES (23812374, 3,3)
select * from Orders
--select *  from Orders where (FirstName+' '+LastName) as fullname = 'Tina Smith'
select * from Orders where customer_id = (select customer_id from Customers where FirstName='Tina' and LastName='Smith')
select(select COUNT(product_id) from Orders where product_id = 2)*200
UPDATE Products
SET price=$250
WHERE name='IPhone';