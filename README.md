# bt-react-test-newsapi v1.2.0
React Test set by Adrian Boyle and Greg Hall for the upcoming Grade D Front End Development role. Utilizes [NewsAPI](https://newsapi.org/).

# Setup / Launch Instructions
To launch the BT NewsAPI App, clone this repo to your machine and open **two** terminal windows.

> In the first, navigate to `bt-react-test/frontend` and run `npm install && npm start`

> In the second, navigate to `bt-react-test/backend` and run `npm install && node index.js`

The app will then become available at http://localhost:3000/.

If you have ran the `npm install` commands and you're developing a fork of this app, to launch in 'dev mode', open **three** terminal windows and run the following.

> In the first, navigate to `bt-react-test/frontend` and run `npm start`

> In the second, navigate to `bt-react-test/backend` and run `node index.js`

> In the third, navigate to `bt-react-test/frontend` and run `npm run scss`

# Tech Stack
This version of the BT NewsAPI App uses **NewsAPI** as the primary service.
The environment is built off of **yarn**, combined with **Babel** in order to serve the backend proxy server.
The UI is coded in **React**, using **TypeScript**. All code is written as per **ES6 JavaScript** by base. The styles are _**temporarily**_ coded in **CSS** (Planned to migrate to **SCSS** shortly). Backend proxy server code written in **Node** + **JavaScript**.

# Justification for the Tech Stack
Justification is that this setup largely emulates what we use on a basic level in production at EE. It's partly because I'm already proficient with it, but also to show my ability to replicate this setup on a more individual scale.

# Considerations and Current Bugs
Please view the Issues tab for the current bug list. Bugs will be listed as _**BUG-100**_ for the first issue, incrementing (Second issue would be _**BUG-101**_ and so forth).
Also please note that this application is version controlled via the Major-Minor-Patch version control system, and will eventually be converted to BEM (Block-Element-Modifier) class names for the SCSS conversion. The initial version first commited is _**v1.0.0**_. You can find the changelog at the bottom of this README.

# Contact Details
If you find anything wrong with this App, or just want to send a nice compliment, email me at _**joseph.gribble@ee.co.uk**_.

# Tested on...
- Google Chrome (Version 89.0.4389.82 (Official Build) (x86_64)), MacOS Catalina (10.15.7)
- Mozilla Firefox (87.0 (64-bit)), MacOS Catalina (10.15.7)
- Safari (Version 14.0.1 (15610.2.11.51.10, 15610)), MacOS Catalina (10.15.7)

Issues with IE are known. For progress on a fix, please see [BUG-113](https://github.com/JosephBanham/bt-react-test/issues/18)

# Changelog
- v1.2.0 - Implementation of working search and unification of SearchButton and SearchBar files; also minor page redesign - New Minor version as a result.
- v1.1.2 - Limited the maximum number of characters pulled from an article to be 150.
- v1.1.1 - URL click fix.
- v1.1.0 - SCSS Conversion - New Minor version as a result.
- v1.0.0 - Initial Commit.
