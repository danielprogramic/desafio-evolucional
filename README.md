# desafio-evolucional

Structured boilerplate in the Angular Material project.


## Features
* Live reload
* Organised folder structure
* Minified CSS, HTML and JS build files
* Minified images.
* SASS support
* Responsive layout
* Mobile ready
* [Material Design Icons](https://material.io/icons/) icons
* Support for Unit & E2E Testing
* Unit Test reporting
* [ESLint](http://eslint.org/) code analysis tool.
* [Jasmine](http://jasmine.github.io/2.3/introduction.html) testing framework
* [Karma](http://karma-runner.github.io/0.13/index.html) test runner
* [Protractor](https://angular.github.io/protractor/#/)  end-to-end test framework

## Live Demo
[Check out the live demo](http://www.danielprogramic.com.br/desafio-evolucional/)

## Quick Usage
* `npm start` : Creates a development build folder called `public` and serves it on: [`http://localhost:3000/`](http://localhost:3000/)
* `npm start --production` : Creates a production ready folder called `production` and serves it on: [`http://localhost:4000/`](http://localhost:4000/)
* `npm test` : Runs code checks, unit tests and E2E tests.
* `npm run unit` : Runs unit tests only.
* `npm run e2e` : Runs E2E tests only. 
* `npm run eslint` : Runs an ESLint code check only.
* `npm run coverage` : Creates and serves the unit test coverage reports on: [`http://localhost:5000/`](http://localhost:5000/)
* `npm run build` : Creates the `public` build folder but doesn't serve it.
* `npm run build --production` : Creates the `production` build folder but doesn't serve it.

## Project Structure
This project follows a **"Folders-by-Feature"** structure very similar to [John Papa's Styleguide](https://github.com/johnpapa/angular-styleguide#application-structure). From the screenshot below you can see that there are 6 separate features, a folder for each one.
Each feature is treated as a mini Angular app. This structure allows us developers to easily locate code and identify what each file represents at a glance.
By retaining this structure the project is much more manageable as it grows.

![alt text](http://www.danielprogramic.com.br/desafio-evolucional/assets/images/9jYKIoi.png "Folders-by-Feature structure")

* The `app` folder contains the following individual features:
    * `parte2`: Contains the parte2 page related files.
    * `layout`: The high level layout container which stitches it all together.
    * `shared`: Contains all shared services, directives, styles etc. used across the entire app.
    * `sidenav`: Contains the sidenav related files.
    * `parte1`: Contains the parte1 page related files.
    * `toolbar`: Contains the toolbar related files.

* The `assets` folder contains all globally used images.

## STRUCTURE
- parte1.view.html | markup html with binding angular.
- parte1.service.js | Control part 1
- parte1.module.js | module that calls all the files on the screen.
- parte1.style.scss | app with saas for motor css
- parte1.modal.view.html | screen markup modal for pie char
- parte1.controller.spec.js | Not used
- parte1.controller.e2e.js | Not used"# desafio-evolucional" 
