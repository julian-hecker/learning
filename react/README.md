- [Parent Directory](../)

# React JS
Educational materials from [React Docs](https://reactjs.org/docs/)

## Notes
React is a JavaScript front-end UI framework that helps make interactive, reusable, and dynamic UIs.

### Setup
React can be added to a website very quickly.
- Simple Setup
    1. Create HTML Container for component
    2. Add HTML script tags for react, react-dom, and custom component before closing body.
        - .development.js builds for debugging, .production.min.js builds for performance
    3. Create a react component
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
[Article by Charles Stover, Optimal File Structure for React](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145)
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
│   │   └── app
│   │       ├── componentName
│   │       │   ├── childComponent      # Tightly coupled child
│   │       │   │   ├── childComponent.js
│   │       │   │   └── index.js
│   │       │   ├── componentName.js    # The actual component
│   │       │   ├── componentName.scss  # SCSS, or other files
│   │       │   ├── componentName.test  # Unit Tests
│   │       │   └── index.js            # Export Default
│   │       ├── app.css
│   │       ├── app.js
│   │       ├── app.test.js
│   │       └── index.js    # `export { default } from './app';`
│   ├── routes      # How React manages multiple pages and URLs
│   ├── utils       # Global Helper Functions (packages, helpers)
│   ├── index.css   # Global CSS Stylesheet
│   ├── index.js    # import React, App, etc, and render.
│   └── service-worker.js   # ????
├── .gitignore
├── package.json
└── README.md
```

### Toolchains
There are some programs that help with react to:
- Scale to many files
- use node modules
- detect mistakes
- live-edit CSS, JS
- optimize production output

#### Recommended Toolchains
- Create React App: Learning or Single Page Apps
    - `npx create-react-app app-name`
    - creates file structure, scripts, and pipeline
- Next.js: Server-rendered site
- Gatsby: Static content site
    - super fast load times
    - creates static sites
- Others
    - Neutrino
    - nwb
    - Parcel
    - razzle

### Create React App
Simplest way to get started creating a react application.
- Run `npx create-react-app folderName`
- then `npm start`

Creates file structure, scripts, and build pipeline.

### JSX
JSX is a JavaScript extension that resembles HTML, and enables returning React Elements.
- Can be combined with JavaScript expressions like a templating language, using curly braces.
- Can be used inside control flow statements.
- Can assign attribute values (Slight difference; className, tabIndex)
- Can contain children, just like an HTML element with children
- Babel compiles JSX to `React.createElement();` function calls
- JSX represents JavaScript Objects which are made into HTML

### Rendering JSX Elements
JSX Elements/Components have to be rendered in document with `ReactDOM.render();` to appear on page.

> Elements are the smallest building blocks of React apps.

- Elements are immutable, and must be re-rendered to update.
    - Only the changed elements will be updated in DOM.
- Can represent DOM Tags or User-defined Components

### Components
Components allow UI to be split into independent, reusable pieces
- Components are functions that return a UI piece based on the props argument's values.
- Can also be expressed as Classes; evaluates to the same.
- Components are named in PascalCase, uppercase


#### Defining Components
Difference between function and class component: functions can't have state.
```JSX
function ComponentName(props) {
    return <p>Greetings, {props.property}</p>;
}

// OR

class ComponentName extends React.Component {
    render() {
        return <p>Greetings, {this.props.property}</p>;
    }
}
```

##### Convert Function to Class
1. ES6 Class (same name) extends React.Component
2. Add empty method, `render() { return () }`
3. Function body goes in return of render.
4. `props` becomes `this.props`
5. All done!

#### Rendering Components
Components can be saved as elements and included in other elements, then rendered as normal.
```JSX
const element = <ComponentName property="value"/>

ReactDOM.render(
    element,
    document.getElementById('root');
)
```

#### Extracting Components
Should split up components into smaller parts.
- Reusable components pays off

### Props
Props are immutable, read-only data
- Must not have value changed. (Use State to change)
- Passed along children

### State
Only Class components can have state.
1. Initial state is set by `constructor` function.
    - Components always call base constructor with `props` argument.
    - ```JSX
    constructor(props) {
        super(props);
        this.state = {...};
    }```
2. State object accessed with `this.state.property`.
3. State updated with `this.setState({ property: value});`
    - Do not use `this.state.prop = newvalue`
4. DOM will automatically update on state changes

#### Asynchronous State Updates
React batches several setState calls into a single update for better performance.
- If you are using state's value to update state, following syntax:
```JSX
this.setState((state, props) => ({
  stateProperty: state.stateProperty += 1;
}));
```

### Lifecycle Methods
Special methods to run when a component is created or destroyed.

```JSX
componentDidMount() {
    // When component is initialized

}

componentWillUnmount() {
    // When (if) component is to be destroyed

}
```






## Test Code
- [Simple Setup](00-setup/simple-setup.html)
- [React Sandbox](react-sandbox/build/index.html)
- [Create React App Test](createreactapp-test/build/index.html)
- [Gatsby Test](gatsby-test/)


## Tutorial

