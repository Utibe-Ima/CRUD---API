# Node.js-Expess-MongoDB-CRUD_API

## Project Description :
This project is focused on CRUD which enables a user interact with the web application by Creating, Edittiing and delete items in the database

## Get started:

To get started:
*  clone the repo to your local machine use the ``` git clone https://github.com/Utibe-Ima/CRUD---API.git ``` command or download the zip file to your local machine
*  install all project dependencies with ``` npm install ``` command
*  start the server with the ``` npm start ``` command

---

## APIs
* Adding a new User: The Form the create a new User is using the ``` /register ``` api. It gets the information the user supplies and sends it into the database
* Editing User Data: The Form responsible for this action is using the ``` /edit/:id ``` api. It receives the information the User wishes to update and replaces it with the already existing one in the database
* Deleting a User: The button responsible for this action is using the ``` /delete/:id ``` api. It finds the id of the selected user and deletes the user's data from the database
* Viewing all Users: The index ``` / ``` api is responsible for retrieving and displaying all users found in the database 

## Resources

* Node.Js
* Epress.Js
* MongoDB
* Mongoose
* Postman

## License
[MIT](https://choosealicense.com/licenses/mit/)
