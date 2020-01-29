# Pig Dice

#### A program where two users can play Pig dice against each other. 1/29/20

#### By **Dana Luukko and Stephanie Podolak**

## Description

A program where two users can play Pig dice against each other.

* Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.



### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Roll Dice** | Click "Roll" button| integer value between 1-6 |
| **Case: Roll 1** | Click "Roll" and result is 1| Play ends. Play score = 0|
| **Player holds** | Click "Hold" | Play ends. Play score is added to total score.|
| **Case: Total score = 100** | Click "Roll Dice" button and value of play score results in total score = 100| Play ends. Game ends. Player wins.|
| **Roll Dice** | Click "Roll Dice" button| integer value between 1-6 |


## Setup/Installation Requirements

1. Clone this repository to your desktop. If using Git Bash you can do this by typing "git clone _________" into your command line while in desktop directory.
2. Navigate inside project directory by entering "cd pig-dice" in Git Bash.
3. Open index.html file in your browser of choice by entering "open index.html".

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery-3.4.1
* HTML
* CSS
* Bootstrap-4.4.1
* HTML

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Dana Luukko, Stephanie "Honey Pockets" Podolak}_**