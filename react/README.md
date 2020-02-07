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

```JSX
<ComponentName prop="value" onEvent={eventHandler} />
```

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
- Created in component's return, as an attribute

### State
State is an internal representation of a component's data.
- Only Class components can have state.
    - Function components are "stateless"
- Data "flows down", and can be passed into children

#### Setting State
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

componentDidUpdate(prevProps) {
    // When component changes
    // Comparing props to prevent infinite loop
    if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID);
    }
}

componentWillUnmount() {
    // When (if) component is to be destroyed

}
```

### Handling Events
React Events are similar to DOM events
- Syntactic differences:
    - camelCase rather than lowercase
    - pass function as event handler, rather than string
- functional differences
    - cannot use `return false` to prevent default; must call `e.preventDefault()`.
    - do not need to call `addEventListener`.


```html
<!-- HTML -->
<button onclick="handlerName()"></button>
```
```JSX
// JSX
<button onClick={handlerName}></button>
```


```JSX
function ActionLink() { // Stateless Component
    function handleClick(e) {
        // e is synthetic event, created on click
        // can use e for preventing default
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

// Or, stateful component
class Toggle extends React.Component {
    constructor(props) {
        // Obligatory super call
        super(props);
        // Initial State
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        // Must bind event handlers to `this`
    }

    handleClick() { // Synthetic Events are optional
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
```

#### Pass Arguments to Event Handlers
If you want to pass an argument to an event handler, use arrow functions or binding in the returned object.

```JSX
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// Or
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```


### Conditional Rendering
Using distinct UI depending on state of application. 


```JSX
// Stateless Component
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <LogoutButton onClick={props.onClick} />;
    } else {
        return <LoginButton onClick={props.onClick} />;
    }
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
```JSX
// Stateful Component
class LoginControl extends React.Component {
    constructor(props) {
        // Obligatory super call
        super(props);
        // Setting initial state
        this.state = {isLoggedIn: false};
        // Binding event handlers to this object
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                { button }
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
```

There are also inline conditionals

```JSX
<h1>Hello!</h1>
{ unreadMessages.length > 0 &&
    // Execute this if unread > 0
    <h2>
        You have {unreadMessages.length} unread messages.
    </h2>
}
```

As well as Ternary Expressions

```JSX
<div>
    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
</div>
```
#### Preventing Render

To not render an element, return null.

```JSX
if (!props.warn) {
    // componentDidUpdate will still be called
    return null;
}

return (
    <div className="warning">
        Warning!
    </div>
);
```

### Lists & Keys

To make multiple elements, make an array that is a `.map()` of data array.

- When creating a list of elements, use a unique key prop.
    - identifies the element for seeing what is changed, added, or removed.
    - Use a string that is unique among siblings. Use ID's.
    - Keys should be specified inside the `map`.

```JSX
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>, // puts 5 list items in ul
    document.getElementById('root')
);
```

```JSX
const todoItems = todos.map((todo, index) =>
// Only do this if items have no stable IDs
// Can break on re-ordering
// Instead use todo.id
<li key={index}>
    {todo.text}
</li>
);
```

There is also a UUID Library in case there are no clear ID's
```npm
npm i uuid
```
```JSX
const uuid = require('uuid/v4');
...
//inside array.map()
<li key={uuid()}>{item}</li>
```


### Forms
Forms keep some internal state

- Can have a JavaScript function that handles form submission (Controlled Components)

#### Controlled Components
HTML Elements (input, textarea, select) maintain their own state, but React can be made the "single source of truth"

- Every update must set state
- All accept a `value` attribute with react updating it
- Can be very tedious because it requires an event handler for every single way a component can change.

Form:

```JSX
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        // bind your handlers
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // event.target selects element that triggered event
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        // setting value to this.state.value makes react the source of truth
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
```


Textarea:
```JSX
    // constructor
        this.state = {
            value: 'Initial Text Value',
        }
    handleChange(e) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <textarea value={this.state.value} onChange={this.handleChange} />
        )
    }
```

Select:
```JSX
    // constructor
        // set default value
        this.state = {value: 'coconut'};
    handleChange(e) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="food">Food</option>
                <option value="food">Food</option>
                <option value="coconut">Coconut</option>
                <option value="food">Food</option>
            </select>
        )
    }

```


### Lifting State
Sometimes, a parent should store the state of several child components (when they need to share data). This is called Lifting State.
- Frequently done during refactoring

Put parent component in control of a piece of state, while passing its value down as props.

```JSX
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }


    render() {
        // Pass data down as props
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}
```

### Thinking in React

1. Break UI into Component Hierarchy
    - Draw boxes around every component and subcomponent
    - Split into units of functionality
    - Make raw HTML version
2. Build Static Version in React
    - has UI but not interactive
    - has props, but not state
    - components only have `render()` methods
3. Minimal but complete representation of UI state
    - add state, triggers to change state
    - ask questions about data: if yes, then state not needed
        1. passed in as prop?
        2. is it constant over time?
        3. can it be computed with other states or props?
4. Identify where state should live
    - find every component that has state
    - find the common owner of state
    - create state owner component if must be shared
5. Add Inverse Data Flow
    - child components should be able to affect parent components (raise state)

Tips:
- DRY: Don't Repeat Yourself




## Test Code
- [Simple Setup](00-setup/simple-setup.html)
- [React Sandbox](react-sandbox/build/index.html)
- [React Tutorial](react-tutorial/)
- [Create React App Test](createreactapp-test/build/index.html)
- [Gatsby Test](gatsby-test/)


## Tutorial

