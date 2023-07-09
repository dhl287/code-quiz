# Password-Generator-Random

## Description

This challenge required me to generate a random password between 8 to 128 characters using uppercase, lowercase, number, and symbol characters. A starter code was provided, but many functions and if/else statements were added to generate the random password based on the criteria listed above. 

## Installation

My responsibility was to satisfy the acceptance criteria, create a new repository on GitHub, commit and push any changes to the repository, and deploy to GitHub Pages to view the website live. The HTML code is available on index.html, the CSS code is available on style.css, and JavaScript code is available on script.js in the password-generator-random folder.

## Usage

Based on the code in the HTML and CSS, the web page was set up with a "Generate Password" button and a box where the generated password would appear. The JavaScript code added allows the user to click "Generate Password". The user will be presented with a variety of prompts. 

![image](https://github.com/dhl287/password-generator-random/assets/133473429/75fb1478-7d54-43fa-9ca7-8420292fba4d)

The first prompt asks how many characters the user would like to have in the password. If the user a character that is not a number (like a letter or symbol), or adds a number that is less than 8 characters or over 128 characters, a new prompt will inform the user to add a number between 8 to 128 characters, and the console log will log "Not enough characters". The user is able to click "Generate Password" again (and as many more times necessary) to enter a number that fulfills the necessary criteria for the password. 

![image](https://github.com/dhl287/password-generator-random/assets/133473429/8543fd9b-3c3d-41bd-9261-776374063a7a)
![image](https://github.com/dhl287/password-generator-random/assets/133473429/366c0fef-cffc-4d06-8eb8-9c8b5ec14d23)
![image](https://github.com/dhl287/password-generator-random/assets/133473429/36095c2d-a0cf-4c61-98e4-b2db826f5482)

The lists of prompts after entering a number that fulfills the necessary criteria for the password will ask whether the user would like to add uppercase, lowercase, number, and/or symbol characters. Based on the user's choices, a random password will be generated, and the console log will log "The system will generate the password."

![image](https://github.com/dhl287/password-generator-random/assets/133473429/a9d07bc1-f5e0-438b-8600-cbe13b236b2c)
![image](https://github.com/dhl287/password-generator-random/assets/133473429/6ecc3a04-b2a4-4118-a9a8-be4cf0205a5e)

The challenge has been deployed after ensuring all criteria was met. 

## Credits

I would like to credit the following sources for study materials in adding the JavaScript code: 

* [mdn web docs_parseInt()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
* [mdn web docs_Array.prototype.concat()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [Homework Startup Guide] (https://www.youtube.com/watch?v=x4HUaiazDes&ab_channel=PaulKeldsen-WebDevelopment)
* [Random Password Generator in JavaScript - Reference] (https://www.youtube.com/watch?v=v2jfGo7ztm8&ab_channel=DanielVega)

## License

There is no license associate with Donna Lee - Portfolio.

