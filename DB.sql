CREATE TABLE IF NOT EXISTS Categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('Expense', 'Income'))
);

CREATE TABLE IF NOT EXISTS Transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER,
  amount REAL NOT NULL,
  tofrom TEXT,
  date INTEGER NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('Expense', 'Income')),
  FOREIGN KEY (category_id) REFERENCES Categories (id)
 );


INSERT INTO Categories (name, type) VALUES ('Utilities', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Electronics', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Dining Out', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Breakfast Supplies', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Household Items', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Christmas Gifts', 'Expense');
INSERT INTO Categories (name, type) VALUES ('New Year Party Supplies', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Thanksgiving Groceries', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Bonus', 'Income');
INSERT INTO Categories (name, type) VALUES ('Consulting Work', 'Income');
INSERT INTO Categories (name, type) VALUES ('Part-time Job', 'Income');
INSERT INTO Categories (name, type) VALUES ('Online Sales', 'Income');
INSERT INTO Categories (name, type) VALUES ('Freelance Writing', 'Income');
INSERT INTO Categories (name, type) VALUES ('End of Year Bonus', 'Income');
INSERT INTO Categories (name, type) VALUES ('Thanksgiving Freelance', 'Income');
INSERT INTO Categories (name, type) VALUES ('Undefined Category', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Undefined Category', 'Income');
Select * from Categories;

INSERT INTO Transactions (category_id, amount, tofrom, date, description, type) VALUES (1, 100.50, 'Blinkit', 1709814000, 'Weekly groceries', 'Expense');
INSERT INTO Transactions (category_id, amount, tofrom, date, description, type) VALUES (1, 75.25, 'Blinkit', 1709900400, 'More groceries', 'Expense');
INSERT INTO Transactions (category_id, amount, tofrom, date, description, type) VALUES (2, 1200,'Zomato',  1707740400, 'Monthly rent', 'Expense');
INSERT INTO Transactions (category_id, amount, tofrom, date, description, type) VALUES (1, 45.99,'Zomato', 1710082800, 'Snacks and drinks', 'Expense');

INSERT INTO Transactions (category_id, amount, tofrom, date, description, type) VALUES (3, 3000, 'Zomato' ,1709914800, 'Monthly salary', 'Income');
INSERT INTO Transactions (category_id, amount, tofrom,date, description, type) VALUES (4, 500, 'Zomato', 1710001200, 'Freelance project', 'Income');

Select * from Transactions;