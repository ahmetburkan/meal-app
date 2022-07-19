# The Meal App
After a long day of work you don't want to choose what you want to eat. So i build this app to do it for you. you can choose between country, area, ingredient and even a random meal.

The repo: https://github.com/ahmetburkan/meal-app

This project was created  with [Lando](https://docs.lando.dev/) and [Create React App](https://github.com/facebook/create-react-app).
![image](https://github.com/ahmetburkan/meal-app/blob/master/image.png?raw=true)

---
## Table of contents

- [Table of contents](#table-of-contents)
- [Requirements](#requirements)
- [Used in project](#used-in-project)
- [Lando](#lando)
- [Node](#node)

---
## Requirements
To start developing you'll need the following:

- We are going to use [Git](https://git-scm.com/).
- Codebase is hosted on [Github](https://github.com/).
- Choose an [IDE](https://www.codecademy.com/article/what-is-an-ide) to you liking for developing. I used the IDE [PhpStorm](https://www.jetbrains.com/phpstorm/).
- To start the app you need [node](https://nodejs.org/en/) 14 installed. Or like me you will use a container fromm [Lando](https://docs.lando.dev/).

---
## Used in project


- For the meal data: \
https://www.themealdb.com/api.php

- For authentication: \
https://github.com/hogeschoolnovi/novi-educational-backend-documentation

---
## Lando
For lando you need to prepend every command with 'lando'. 
See the examples.

Run this command in the project directory to start the container:

`lando start`

Run this command in the project directory to start the React App:\
This command install then run the app in the development mode.

`lando npm install` and `lando npm start`

Open the network address that ends with :3000 to view it in your browser. You can see this in the terminal where you executed the command.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`lando npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`lando npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---
## Node
Run this command in the project directory to start the React App:\
This command install then run the app in the development mode.

`npm install` and `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

--------------
**sidenote:** this has been made dummy proof, not digitally illiterate proof!