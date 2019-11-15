- [Parent Directory](../)

# React JS
Educational materials from [React Docs](https://reactjs.org/docs/)

## Notes
React is a JavaScript front-end UI framework that helps make interactive, reusable, and dynamic UIs.

### Setup
React can be added to a website very quickly.
- Simple Setup
    1. Create HTML Container for component
    2. Create a react component
    3. Add HTML script tags for react, react-dom, and custom component before closing body.
        - development builds for debugging, production builds for performance
    4. Render your component in the selected container using `ReactDOM.render(React.createElement(component), container);` (put in component file).
- Using JSX
    - Include babel in a script tag with `type=text/babel` (Not good for production)
    - Set up JSX Preprocessor to automatically convert scripts
        - Use Node.JS
        - initialize npm with `npm init -y`
        - download tools to compile JSX with `npm install babel-cli@6 babel-preset-react-app@3`
    - Running JSP Preprocessor
        - Create src folder
        - run `npx babel --watch src --out-dir dist --presets react-app/prod`


### File Structure
https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145

```
my-app
├── build           # Distributable
├── node_modules    # Modules
├── public          # Static Assets
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src             # Dynamic Files
│   │                   Targeted by WebKit
│   ├── assets      # Project Dependencies: 
│   │   │               SCSS, Images, Languages
│   │   └──images
│   │      └── logo.svg
│   ├── components
│   │   └── App
│   │       ├── ComponentName
│   │       │   ├── ChildComponent      # Tightly coupled child
│   │       │   │   ├── ChildComponent.js
│   │       │   │   └── index.js
│   │       │   ├── ComponentName.js    # The actual component
│   │       │   ├── ComponentName.scss  # SCSS, or other files
│   │       │   ├── ComponentName.test  # Unit Tests
│   │       │   └── index.js            # Export Default
│   │       ├── App.css
│   │       ├── App.js
│   │       ├── App.test.js
│   │       └── index.js    # `export { default } from './App';`
│   ├── routes      # How React manages multiple pages and URLs
│   ├── utils       # Global Helper Functions (packages, helpers)
│   ├── index.css   # Global CSS Stylesheet
│   ├── index.js    # import React, App, etc, and render.
│   └── service-worker.js   # ????
├── .gitignore
├── package.json
└── README.md
```


## Test Code
- [Simple Setup](simple-setup.html)




## Tutorial

