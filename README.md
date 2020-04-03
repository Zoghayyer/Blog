# Blog App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements:

You need your node version to be >= v10. Preferably `v10.15.3`

You need your npm version to be >= 6.4.1. Preferably `6.4.1`

## Getting Started:

First, install the project's dependencies using npm

```bash
$ npm install
```
Provided that the dependencies have installed without any errors you can now run the project:

second, Start the Webpack development server
```bash
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Candidate information:

1. Full name: Ahmed Zoghayyer
2. Email: azzoghayyer@gmail.com
3. A​ ​list​ ​of​ ​which​ ​browsers​ ​you​ ​have​ ​tested​ ​(minimum​ ​of​ ​one)
    1. Chrome, Firefox, and Safari
4. A​ ​list​ ​of​ ​any​ ​libraries​ ​you​ ​used,​ ​and​ ​why
    1. I used the React library for building the blog app, and Redux for state management
        1. Reasons why I used React:
            1. It allows me to be more productive.
            2. It updates DOM elements in O(n) which is a plus for performance whereas only using vanilla JS will require O(n^3).
            3. It's component based so it allows you to split the application into small component which are easy to test, read, and maintain.
        2. Reasons why I used Redux(state management library):
            1. When you're building a huge application, it becomes extremely hard to manage the state only using React’s internal state. How can you share state between different components(yes, there is React context, but it still can’t replace Redux) ? Also, components can become very huge and complex which means they become harder to maintain, text, and read.
            2. Redux data flow is very easy to follow(dispatch an action -> reducer updates the state -> components re-renders)
            3. It provides the redux dev tool which is really helpful for debugging.
