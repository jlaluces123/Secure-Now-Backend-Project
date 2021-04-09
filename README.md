# Secure-Now-Backend-Project

**Despite the time constraints, most of the codebase given is a skeleton of the features to be fleshed out completely**

I hope to discuss further about my implementation and discuss about approaches I could have taken!

---

## Task 1. ERD Diagram

![Screenshot of the ERD Diagram I came up with](https://perizazy.sirv.com/Secure%20Now%20Work/ERD_Diagram.png)

---

## Task 2. SQL Implementation

After having a tough time trying to speed through a diagram implementation, I unfortunately had to skip this task in order to make the time limits.

I do go into further detail down below when I discuss my thoughts and considerations.

---

## Task 3. Microservices | DB Connection | CRUD Operations

To get started run:

```
> yarn (to download all dependencies used)
> yarn dev (to run server)
```

## Database Connection

\
_At the top of the customers.js file inside the utils folder, I wrote a fake connection for a PostgreSQL implementation as well as a MySQL implementation_

Having not worked with MySQL I made sure to do a bit of research to try and come up with a pseudo-implementation of a MySQL connection.

For the purposes of showcasing an actual DB connection, I used a PostgreSQL implementation as well since I had more experience working with it.

![Screenshot of the PostgreSQL and MySQL Connections](https://perizazy.sirv.com/Secure%20Now%20Work/Postgres_MySQL_Connection.png)

---

## CRUD Operations

_To handle CRUD operations I threw all the database helper functions inside customer.js which is located inside the "utils" folder_

---

### Creating Users

For the purposes of fleshing out creating "Users", I created a name attribute that would be used to create a user inside the database.

![Screenshot of the Create User Helper Function](https://perizazy.sirv.com/Secure%20Now%20Work/Create_User.png)

---

### Reading Users By ID

![Screenshot of the Get User Helper Function](https://perizazy.sirv.com/Secure%20Now%20Work/Get_User_By_ID.png)

---

### Updating and Deleting Users

![Screenshot of Updating and Deleting User Helper Functions](https://perizazy.sirv.com/Secure%20Now%20Work/Update_And_Delete_User.png)

---

## Notes and Considerations

### 1. Addressing the requirements for the 3rd task

I fully understand I was expected to write the DB Connection / Backend in Python and Flask.

Given the time constraints in my current circumstance during the 24-hour period, I decided to code up a code-solution as best as I could using NodeJS and PostgreSQL (two languages I have had more experience with)

Had I had more time, I definitely would have learned how to implement a CRUD app via Python and Flask, Python being a programming language I only had the experience of using for small apps during my time learning.

---

### 2. ERD Diagram Task & SQL Implementation

I think the thing that tripped me up the most in planning out the Database for the prompt given was learning how to create and represent histories for things such as the circulation trip of a document, as well as the changes made to a document.

Given no time constraints, I definitely would have had to do more research into this topic. While I have planned out a database via diagram with two different startups, this task was quite the challenge!
