# Node.js-Expess-MongoDB-CRUD_API

## Project Description :
This project is a sample project that illustrates how Node.js powered apis are being consumed 
The backend server exposes the following apis (list them) and they are consumed using a form interface

## Get started:

To get started:
*  clone the repo to your local machine use the ``` git clone https://github.com/Utibe-Ima/CRUD---API.git ``` command or download the zip file to your local machine
*  install all project dependencies by navigating to the root of the project directory ../CRUD---API and run the command ``` npm install ```
*  start the server with the ``` npm start ``` command

---

## APIs
* Adding a new User (POST api): The Form to create a new User is using the ``` /register ``` api. It gets the details (name, email and role) the user supplies and sends it to the database.
* Editing User Data (PATCH api): The Form to edit an already existing user is using the ``` /edit/:id ```api. It gets the details the user supplies and replaces the already existing detail.
* Deleting a User (DELETE api): The Button to delete an already existing user is using the ```/delete/:id ``` api. It fetches the details of the user which is to be deleted and removes it from the database.
* Viewing all Users (GET api): The ``` / ``` api is responsible for retrieving and displaying all registered users


## Resources

* Node.Js
* Epress.Js
* MongoDB
* Mongoose
* Postman

## License
[MIT](https://choosealicense.com/licenses/mit/)
