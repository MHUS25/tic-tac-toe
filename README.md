[![Build Status](https://travis-ci.org/MHUS25/tic-tac-toe.svg?branch=master)](https://travis-ci.org/MHUS25/tic-tac-toe)
## Tic Tac Toe

[App in production](http://tic-tac-toe-mhus25.surge.sh/)

An interactive two player game of tic-tac-toe built with ReactJS.

## Technologies

* ReactJS, HTML & CSS
* Testing: Jest & Enzyme
* CI: Travis CI
* Deployed to: Surge.sh

## Motivations for this project

* To familiarise with ReactJS
* Write unit tests using Jest & Enzyme


## Features

* Two player game ('X' & 'O')
* Turns alternate until a player wins or the board is filled
* Indicates when a player has won the game and prevents further moves on board after a win
* Indicates when a game ends in a draw
* Stores a game’s history
* Can view and return to previous versions of game's board

## Approach

Three Components: `Game`, `Board` & `Square`

## Getting started

### To set up the project

1. clone repo to your local machine `git clone https://github.com/MHUS25/tic-tac-toe.git`
2. Run the command `npm install`

## Usage

1. Start server `npm start`
2. Visit `http://localhost:3000` in your browser

## Running tests

`npm test`


## Some next steps:

* To extend the application, highlight the three squares that caused a win
* Refactor & extract some logic out of `Game` Component

## Acknowledgements

https://reactjs.org/tutorial/tutorial.html

https://itnext.io/learning-to-write-react-tests-on-example-of-react-tic-tac-toe-app-acf7ae2b94b8
