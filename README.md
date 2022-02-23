# MERN crud
A simple crud application used to demonstarate crud operations in a MERN app.  
[View Demo](https://mern-crud-aayush.herokuapp.com/)

Note:
- The frontend part of the project uses Vitejs as the front end build tool.
- The frontend part of the project was bootstrapped using the command `npm init vite`

## Table of Contents
* [Features](#features)
* [Tools and Technologies](#tools-and-technologies)
* [Dependencies](#dependencies)
* [Dev-dependencies](#dev-dependencies)
* [Prerequisites](#prerequisites)
* [Installation and setup](#installation-and-setup)
* [Backend API](#backend-api)
* [npm scripts](#npm-scripts)
* [Useful Links](#useful-links)
* [Contact](#contact)


## Features
- List of all users can be fetched.
- New user can be added
- A user's details can be edited
- A user can be deleted.


## Tools and Technologies
- HTML
- CSS
- Material UI
- Javascript
- Node.js
- Express.js
- React
- Mongodb
- Vitejs


## Dependencies
- @material-ui/core
- axios
- react
- react-dom
- react-router-dom
- cors
- dotenv
- express
- mongoose


## Dev-dependencies
- @vitejs/plugin-react
- vite
- nodemon
- concurrently


## Prerequisites
- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)


## Installation and Setup
1. Download the source code in the desired location on your system.
2. Open the code in your code editor.
3. Go to terminal and type the following command and hit enter:
    ```sh
    npm run install-all
    ```
    This will install all the dependencies and dev-dependencies required at root, at frontend and at backend in your project.

4. Create a file named ".env" inside the backend folder and enter the following credentials:
    ```js
    MONGO_URI=your-mongo-uri
    ```

5. Go to terminal and type the following command and hit enter:
    ```sh
    npm run dev
    ```
    This will start both backend and frontend.

6. Open browser and go to url: http://localhost:3000. You can see the app running now.


## Backend API
<pre>
- GET     /api/users      [fetch all the users from the db]
- GET     /api/user/:id   [fetch a user by id from the db]
- POST    /api/users      [add a user into the db]
- PUT     /api/users/:id  [update a user by id in the db]
- DELETE  /api/users/:id  [delete a user by id from the db]
</pre>


## npm scripts
At root:
- `npm run dev`: Starts both backend and frontend
- `npm run dev-server`: Starts only backend
- `npm run dev-client`: Starts only frontend
- `npm run install-all`: Installs all dependencies and dev-dependencies required at root, at frontend and at backend.

Inside frontend folder:
- `npm run dev`: Starts frontend
- `npm run build`: build frontend for production
- `npm run preview`: locally preview production build

Inside backend folder:
- `npm run dev`: Starts backend using nodemon.
- `npm start`: Starts backend without nodemon.

## Useful Links
- Demo: https://mern-crud-aayush.herokuapp.com/
- Github Repo: https://github.com/aayush301/MERN-crud
- Nodejs download: https://nodejs.org/
- VS Code download: https://code.visualstudio.com/
- Tutorials: https://www.w3schools.com/
- Reactjs docs: https://reactjs.org/docs/getting-started.html
- Vitejs docs: https://vitejs.dev/guide/
- npmjs docs: https://docs.npmjs.com/
- Expressjs docs: https://expressjs.com/
- Mongoosejs docs: https://mongoosejs.com/docs/index.html
- Mongodb atlas: https://www.mongodb.com/cloud/atlas/register
- Mongodb docs: https://docs.mongodb.com/manual/introduction/
- Github docs: https://docs.github.com/en/get-started/quickstart/hello-world
- Git cheatsheet: https://education.github.com/git-cheat-sheet-education.pdf
- VS Code keyboard shortcuts: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf


## Contact
- Email: aayush5521186@gmail.com
- Linkedin: https://www.linkedin.com/in/aayush12/
