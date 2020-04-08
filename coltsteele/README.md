- [Parent Directory](../)

# Colt Steele's Web Development Bootcamp on Udemy Notes

## Syllabus

1.  [x] [Course Intro](./Web-Developer-Bootcamp-Course-Outline.pdf)
2.  [x] [Intro to Front End](#02-Introduction-to-Front-End)
3.  [x] [Intro to HTML](#03-Introduction-to-HTML)
    - [Lists](./coursework/03-lists.html)
    - [Recreate Page](.coursework/03-recreate.html)
4.  [x] [Intermediate HTML](#04-Intermediate-HTML)
    - [Form](./coursework/04-form.html)
    - [Pokemon Tables](./coursework/04-pokemon.html)
5.  [x] [Intro to CSS](#Introduction-to-CSS)
    - [Selector Scavenger Hunt](./coursework/05-selectorsExercise.html)
6.  [ ] [Intermediate CSS](#06-Intermediate-CSS)
7.  [ ] [Bootstrap](#07-Bootstrap)
8.  [ ] [Bootstrap 4](#08-Bootstrap-4)
9.  [ ] [Bootstrap, Flexbox Layout](#09-Layout)
10. [ ] [JavaScript Basics](#10-JavaScript-Basics)
11. [ ] [JavaScript Control Flow](#11-JavaScript-Control-Flow)
    - [For Loops](./coursework/11-for-loops.html)
    - [While Loops](./coursework/11-while-loops.html)
12. [ ] [JavaScript Functions](#12-JavaScript-Functions)
    - [Functions](./coursework/12-functions.html)
13. [ ] [JavaScript Arrays](#13-JavaScript-Arrays)
    - [Arrays](./coursework/13-arrays.html)
14. [ ] [JavaScript Objects](#14-JavaScript-Objects)
    - [MovieDB](./coursework/14-moviedb.html)
15. [ ] [DOM Manipulation](#15-JavaScript-DOM)
    - [DOM Selectors](./coursework/15-dom-selectors.html)
16. [ ] [JavaScript Events](#16-JavaScript-Events)
    - [Color Changer](./coursework/16-colors.html)
    - [Score](./coursework/16-score.html)
17. [x] [Color Game Project](#17-Color-Game-Project)
    - [Color Game](./coursework/17-colors.html)
18. [x] [Intro to jQuery](#18-jQuery-Intro)
19. [ ] [Advanced jQuery](#19-jQuery-Advanced)
20. [ ] [Todo List Projects]()
21. [ ] [Patatap Clone]()
22. [ ] [Backend Basics]()
23. [ ] [The Command Line]()
24. [ ] [Intro to NodeJS]()
25. [ ] [Intro to Server Side Frameworks]()
26. [ ] [Intermediate Express]()
27. [ ] [Working with APIs]()
28. [ ] [YelpCamp Basics]()
29. [ ] [Databases]()
30. [ ] [YelpCamp Data Persistence]()
31. [ ] [RESTful Routing]()
32. [ ] [Data Associations]()
33. [ ] [YelpCamp Comments]()
34. [ ] [Authentication]()
35. [ ] [YelpCamp Authentication]()
36. [ ] [YelpCamp Cleaning Up]()
37. [ ] [YelpCamp Update and Destroy]()
38. [ ] [YelpCamp UI Improvements]()
39. [ ] [Git and Github]()
40. [ ] [Deploying]()
41. [ ] [JavaScript: The Tricky Stuff]()


## 02 Introduction to Front End

- Tools Required
    - Text Editor
        - VSCode, Atom, Sublime
    - Web Browser
        - Chrome, Safari, FireFox
        - Lets you view web code
        - Has developer tools
- How the Internet Works
    - Computers connected to internet send *requests* to Internet Service Provider; ISP translates domain name to IP address in order to request web page from correct server. 
    - Server sends *response*; split packets back to client through physical wiring. 
    - Server figures out what information to send back, combination of HTML CSS and JS.
- Viewing Code
    - Right click, and use Developer Tools or View Page Source to view code.
- Types of Code
    - Front End: What you see in your browser.
        - HTML, CSS, JS
            - HTML: HyperText Markup Language
                - Structure of page, describes content.
            - CSS: Cascading Style Sheets
                - Defines style of html elements, content.
            - JS: JavaScript
                - Defines behavior of page.
        - Used to make static pages
    - Back End: Logic done by server; Everything else. 
        - Used to make dynamic pages.


## 03 Introduction to HTML

- Basics
    - HTML Encodes structure into a document, rather than plaintext.
    - Originally used for scientific documents.
    - Allows hyperlinking to other resources.
- Syntax
    - `<tagName>some content</tagName>`
    - `<selfClosingTag />` 
    - ```xml
      <parentTag attribute="value">
          <childTag>content</childTag>
      </parentTag>
      ```
    - `<!-- comment -->`
- Boilerplate
    - ```html
        <!DOCTYPE html>
        <html>
        <head>
        <!-- Metadata here -->
        <meta name="" content="" />
        <link href="" rel="" type="" />
        <title>page title</title>
        </head>
        <body>
            <!-- Content here -->
        </body>
        </html>
        ```
- Common elements
    - block level, take up page width
        - html, root element, contains all document
        - head, contains metadata
        - body, contains content
        - h1 - h6, document headings
        - p, paragraph
        - ol, ul, li, lists and items
        - div, groups stuff together
    - inline, describe text; should not contain block levels
        - a, anchor (link)
        - img src
        - strong, bold
        - em, italic
        - span, groups text together
    - other
        - meta
        - link
        - title
        - script
        - comments
- attributes
    - src, for `img`s & `script`s; url
    - href, for `link`s and `a`s
- best practices
    - use descriptive tags, eg. not `<b>` for bold


## 04 Intermediate HTML

- HTML Tables
    - `table` element contains a table
    - `tr` describes a table row with one or more `td` items.
    - `td` is a single table cell
    - `th` is a table header.
    - `thead` can contain `tr`'s with `th`'s
    - `tbody` can contain regular `tr`'s
- HTML Forms
    - `form` element contains a form
        - attributes: action, method
    - `input`, allows user input, many types
        - text
        - dropdowns
        - checkboxes, radios
        - submit
        - more types
    - `label`, labels input field
    - validation


## Introduction to CSS

- Intro CSS
    - role
        - styles html
    - general rule
        - ```css
          selector {
            property: value;
            property: value;
          }
          ```
- Incorporate CSS in HTML
    - use `<style type="text/css"></style>` to use internal css
    - use `<link rel="stylesheet" href="style.css" type="text/css" >` to connect external stylesheet
- Select elements by tag, class, id
    - element selector: selects all elements with tagname
    - class selector: selects all elements with class name
    - id selector: selects element with id.
- complex selectors 
    - *, selects all elements.
    - descendant selectors, `p a`, any `a` element that is descendant of `p`.
    - child selector, `p > a`, any `a` that is a direct child of `p`.
    - adjacent selector, `p + a`, any `a` that is next to `p`.
    - attribute selectors, `a[href=""]`, any `a` with `href` attribute empty.
    - nth of type, `p:nth-of-type(3)`, selects the 3rd `p` element in a list.
- Style selected elements
    - many properties to style html
    - common properties
        - color: {hex value, keyword, or rgba value}
- Specificity, overriding
    - CSS Rules with higher specificity override those with lower specificity, and rules with same or greater specificity will override rules that come earlier in the stylesheet.
    - Specificity order: *, tag, class, id, inline, !important
- Chrome dev tools
    - allows ispection of elements, sources, css, etc.


## 06 Intermediate CSS

- font properties
    - font-family
    - font-size
    - font-weight
    - line-height
    - text-align
    - text-decoration
- box model


## 07 Bootstrap


## 08 Bootstrap 4


## 09 Layout


## 10 JavaScript Basics


## 11 JavaScript Control Flow


## 12 JavaScript Functions


## 13 JavaScript Arrays


## 14 JavaScript Objects


## 15 JavaScript DOM


## 16 JavaScript Events

- Allows interactivity
    - Event listeners can be attached to a particular element (`document.querySelctor().addEventListener(*type*, *callback*)`).



## 17 Color Game Project

[See the project here](./coursework/17-colors.html)


## 18 jQuery Intro

jQuery is a frontend javaScript library that assists in selecting, styling, and manipulating DOM elements.
- Makes it very easy to iterate over a list of elements.

### Including

Include script src in HTML Document
- https://code.jquery.com/

### Selecting

jQuery selects dom elements with the $() function.
- Acts like document.querySelectorAll();
- Takes a CSS Selector string as argument

### Manipulating

`$()` has several common methods to manipulate HTML
- css()
    - .css() method takes property-value pairs, or an object with styles added, and applies styles to **all elements** returned by $() selection.
        - camelCased CSS properties, rather than kebab-case
- val()
- text()
    - Can get textcontent, or set its textcontent from selected elements
- attr()
    - Get the value of attributes, or set attributes for selected elements (pass in pair or object)
- html()
    - Can get innerHTML, or set its innerHTML from selected elements
- addClass()
- removeClass()
- toggleClass()


## 19 jQuery Advanced

### jQuery Events

jQuery lists have methods to simplify JavaScript Events

```JavaScript
$('.selector').*event*(/*function to run on click*/);
```

Also use `$('this')` instead of `this` in callback functions.

If callback is passed an event arg, can be used to listen for specific key

```JavaScript
$('input').keypress(function(event) {
    console.log(event.which);
    // Returns char key code
});
```

### jQuery Event Types

jQuery has lots of events on documentation
- `click()`
- `keypress((e)=>{})`
- `on(*event*, [child] (e)=>{})`
    - click, dblclick, dragstart, etc.
    - Can be used to add event listeners to yet unexisting elements by selecting the parent and using the child argument

### jQuery Effects

Animations on stuff

```JavaScript
$("button").on("click", function() {
    $("this").fadeOut(duration, callback);
});
```

Animations
- fadeIn, fadeOut, fadeToggle
- slideUp, slideDown, slideToggle
- etc


## 20 Todo List App

[View the project here](./coursework/20-todo-list-app/todo.html)


## 21 Patatap Clone

<!-- [View the project here](./coursework/21-patatap/patatap.html) -->
SKIPPED


## 22 Backend Basics

Servers decide what content to send to clients over the internet.

You ask for a web page, and you get one back.

Types of sites
- Static Sites
    - Same files are sent every time (HTML, CSS, JS)
- Dynamic Sites
    - Compiled on server side, before sending back as response

Stack: the languages and technologies that an app uses (front + back ends)
- Front End: HTML, CSS, JavaScript, sent to client
- Back End: does business logic, processing, etc.

Full Stack developers write code on all parts of the stack: front and back ends


### HTTP In Depth (Postman)
Postman can be used to send customizable HTTP requests without worrying about rendering in the browser.
- Useful for determining if an API is working


## 23 Command Line
Lets you interact directly with the computer by telling it what to do with commands
- Can do more than a GUI
- Faster, once you know it well
- Sharp learning curve


## 24 Intro to Node
Node is a JavaScript engine for a backend server, which can integrate with the NPM collection of libraries.
- Large community, actively developed
- Easy to learn after JavaScript, same language

### Using Node
Node is run in the console by running command `node`
- Can call a JavaScript file to run
- Lets you execute JavaScript code as well as backend libraries

### [Node Package Manager](https://docs.npmjs.com/cli/install)
Lets you use pre-written code libraries, or packages, super easily. (No CDN, automatic dependency management)

to use NPM, run `npm install` in command line from project directory, then in js file type `const pkg = require('pkg');`

### package.json
Used by NPM to keep track of module dependencies, and to easily be able to install them. Lets you send a "shopping list" instead of shipping all the ingredients. 

Using NPM 
1. `npm init` initializes package.json by asking questions
2. `npm install` installs packages to node_modules

Types of Dependencies:
- Dependencies: Required by running code (React, Express)
    - `npm install --save` or `npm i -S` (Default)
- Dev Dependencies: used in workflow but not running code (preprocessors, compilers)
    - `npm install --save-dev` or `npm i -D`

### Automatic Server Restart (Nodemon)
Normally, you have to run `node app.js` every time you make a change in order to see it.

Nodemon automatically detects changes and can run scripts when files are changed.

1. `npm i -g nodemon` installs nodemon globally, lets you run as command
2. add `npm nodemon app.js` to npm scripts
3. run npm scripts


## 25 Express Framework
Frameworks provide a baseline way of doing things in code. You must write code that conforms to the specifications of the framework. 

> You can call a Library, but a Framework calls you.

Express Framework is a server framework which receives requests and returns a response


### Routing
**Routes**: runs one bit of code vs another depending on request

```javascript
// client requests / root page
app.get('/', function(request, response){
    res.send(); // what to send to client
});
//app.get(*, function(req,res)) {} lets you catch-all (404)
```

Routing Parameters: lets you use URL to create DRY code instead of creating an app.get() for every single item
`app.get('/r/:subredditName/comments/:id/:title/', func..)`
Gets passed back to server via `req.params{subredditName: soccer}`


## 26 Intermediate Express
Instead of rendering single lines, or typing entire HTML documents into a `res.send` function, you can use `res.render` to return an entire file (HTML or EJS). 

Render searches for a file by default in the `views` directory, where you can put all the served files an partials


EJS (Embedded JavaScript) is a templating language that expands JS and HTML.

To use JavaScript in an EJS file, use syntaxes: 
- `<%= //JavaScript %>` for evaluation (5 + 5, obj.prop)
- `<% //JavaScript %>` for logic or multiline JS (can't be evaluated, returns part that is not in <% %> tags
- `<%- include('partials/file') %>` include a partial file
    - `<%- %>` can also be used to eval code like HTML

To pass variables into a template, use the render method's second parameter to pass an object.
`res.render('home.ejs', {user: req.ip});`

### Including files
Most assets like images, css, and js files go in a separate directory. Can be served by using `app.use(express.static('public'));` in app.js. Still must link files. Should reference them in root, since `public` directory 'explodes' in root.

**Partials** are incomplete, but reusable sections of a page like navbars and footers. Goes in `views`
`<%- include('partials/navbar') %>`


### Post Requests
Most routing is done with app.get, but you can also run code when a post request is made, like from a form

1. Create a route `app.post('/route', (...) => {...})`, which will receive post requests
2. Create a form that points to that route
3. Form values are returned to server in `req.body` which must be parsed by NPM Package `body-parser`


## 27 Working with API's
**Application Programming Interfaces**
API's allow you to connect with other applications instead of doing everything from scratch.
- Web API's: communicate over HTTP/HTTPS
- IFTTT (IF This Then That): Connect API's together
- [**ProgrammableWeb**](https://www.programmableweb.com/): repository of public APIs
- [JSON Placeholder](https://jsonplaceholder.typicode.com/): lets you generate placeholder data for mocking up an application


### Transferring Data
API's send data over HTTP using either XML or JSON or some other technologies


### API Requests with Node
You can make a request using a browser's URL bar, or using builtin libraries in languages.

To request using Node, use request or axios

> Request is deprecated! Use Axios instead.

```javascript
// first install with npm
const request = require('request');

request('https://url.tld', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
})


// or use axios
const axios = require('axios'); // npm install axios
axios({
    method: 'get',
    url: '/url',
})
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        // always executed after the request
    });
```

After getting JSON data from API, must be converted from JSON string into object format.
`const data = JSON.parse(body);`

You can then 'drill down' and get a particular piece of information from the data.
`const info = data["list"]["towns"];`


## 28 YelpCamp 1
Add GET and POST routes, EJS pages, submission form, etc.


## 29 Intro to Databases
Collection of information / data
- Databases let servers have persistent data that remains even after restarting
- Has an interface that you can use to access data
- Create, Read, Update, Delete

### SQL (Relational) Database
Tabular, flat databases that work by creating relationships to other tables (Entity Relationship Diagram)
- Each database has **tables** (*entities*)
- Each table has **rows** (*records / entries*) which represent an instance of the entity. 
- Tables also have **columns** (*attributes / fields*)
- At the intersection of each *record and field*, is a **value or cell**

Relationships are specified in their own "join" table, using a primary key from each table.

Cannot easily add fields; would have to do for each user.
Patterns have to be defined ahead of time

### NoSQL (Non-Relational) Database
Patterns do not have to be strictly adhered to; more flexible. Easier to update
Formatted as BSON: Similar to JSON
- No Primary Keys, flat tables, or relationships
- things can be nested together, instead of relationships


### MongoDB
Most popular NoSQL software
- Uses JSON instead of tables
- Can implement JavaScript 

**Collection** == Table (should be plural and lowercase)
**Document** == Row / Record / Object
**Fields** == Column / Field / Attribute

![Concepts in SQL vs NoSQL](https://cdn-media-1.freecodecamp.org/images/oxeGaPqbZ2pmmZx3WcDo8CXIL4J09PbecBWW)


#### Commands
```javascript
help // shows commands
mongo // runs mongo shell (write commands)
mongod // runs mongo daemon (basically server; accepts commands)
`mongod --dbpath="C:/Program Files/MongoDB/Server/4.2/data"` // run as administrator



show dbs // show existing dbs
use *db* // sets working db, or create new empty db 
db // Shows working db

show collections // show
db.createCollection(name, options)
db.*collection*.*method*() // methods can be chained
// === collection methods ===
db.*collection*.insertMany([
    *document*,
    {key: 'value', key: 'value'}
])
.insert([{key: 'value'}]) // insert one or more documents
.find() // select *
.findOne({key: 'value'}) // find({}).limit(1)
.find({key: 'value'}) // find matching documents
    // Find Operators: $ {key: {$gt | $gte | $lt | $lte} }
    .pretty() // pretty print output
    .limit(*n*) // limits number of results
    .sort({id: *1 | -1*}) // sort by id attribute,
    .forEach((doc) => {}) // run code for each result 
        print() // like console.log
    .map((doc) => {}) // return something from each entry
.count() // returns number of results
.update({find}, {new data}, {options}) // find and replace
    //  Options: "upsert" creates if does not exist yet
    //  new data: an object, or an operator
        //  $set: {} does not replace (adds)
        //  $inc: {} increments fields
        //  $rename: {} key to new key
.remove({key: 'value'})

```

#### Mongoose
Object Data Mapper; Helps to interact with MongoDB from within Node; like jQuery for DOM. Creates Schema for applications.

`npm install mongoose`

```javascript
const mongoose = require('mongoose');

//               protocol://url/database
mongoose.connect('mongodb://localhost/testing')

// Creates outline for entity
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    personality: String
});

// Creates instance (document, object) from schema
// (collection, schema)
// this creates a model with methods!
const Customer = mongoose.model("customers", customerSchema);

Customer.find({}, (err, item) => {
    if (err) {
        console.log("===ERROR===\n" + err);
    } else {
        console.log("Items!\n" + item);
    }
});

// New Customer and Save customer both at once
Customer.create({
    name: "Julian",
    age: 20,
    personality: "Giving",
    isTrending: false // this will get thrown out since not in schema
}, function(err, item) {
    if (err) {
        console.log("===ERROR===\n" + err);
    } else {
        console.log("Added to Database:\n" + item);
    }
});
```


## 30 YelpCamp + MongoDB
Improve styling, add and integrate MongoDB


## 31 RESTful Routing
A pattern for defining routes; maps HTTP requests to CRUD

REST: REpresentational State Transfer

### RESTful Routes
Patterns for an app that interacts with server
- **Index**: GET all items `GET /index` index can be dogs etc
- **New**: GET form to create new item `GET /index/new`
- **Create**: POST new item to db `/POST /index/`
- **Show**: GET a single item `GET /index/:id`
- **Edit**: GET form to edit item `GET /index/:id/edit`
- **Update**: PUT new value `PUT /index/:id`
- **Destroy**: DELETE specific item `DELETE /index/:id`

These can connect to:
- Create (POST)
- Read (GET)
- Update (PUT)
- Delete (DELETE)


You will also have nested routes, like creating a comment on a post (associated data)


## 32 Data Associations
Relationships between collections in database
Example:
- Users
- Posts
- Comments


### Types of Relationships
- One to One
    - One Employee, One Title
- One to Many
    - One user, many uploads
- Many to Many
    - Many students, many courses
    - Many Books, many authors


### Associations in Mongoose
Can be made with either embedding or referencing

#### Embedded Data
When creating the schema for one model, make the schema of the other model one of the attributes.

```javascript
// Configure Schemas
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] // One User to Many Posts
});

// Then initialize containing model
const User = mongoose.model('users', userSchema);
const newUser = new User({
    name: 'Heck',
    email: 'heck@heck.com',
    posts: [
        {
            title: 'Heck a bit harder',
            content: 'it\'s good exercise'
        }
    ],
});
// Add to contained model
newUser.posts.push({
    title: 'Hecking to the Heck',
    content: 'You should heck as much as you can'
});
```

#### Referenced Data (Object References)
Instead of embedding the entire schema, you can use references to a mongodb document's id
```javascript
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            // References an object's ID
            type: mongoose.Schema.Types.ObjectId,
            // collection (same as model's string)
            ref: 'posts'
        }
    ]
});

```
Then, you push instances of the post to user's posts array.

After that, when you want to use the referenced object, you do `Model.findById(id).populate('collections').exec((err, item) => {})`.

### module.exports
You can split up files into multiple parts by using `export` and `require`. 

You can export an object, almost like a return value from a file using `module.exports = {};`.


## 33 Refactoring YelpCamp
- Modularizing code (module.exports, require)
- Adding models for users, comments
- "Add Comment" functionality, routes
- Styling show page to be FANCY


## 34 Authentication
Authentication is how a user proves who they are on the web (passwords, accounts)

### Sessions
Provides State to HTTP; saves whether the user is still logged in.

### Libraries
- passport (Authentication Library)
- passport-local (Username / Password)
- passport-local-mongoose (Integration with Mongo)
- express-session (Save "logged in" state)


#### Passport.js
Authentication library for Node.js, already built with support for MANY types of authentication
- Google, Facebook, Twitter
- Fitbit, Steam, Azure
- Local (Username / Password)


## 35 Yelpcamp 4 | Authentication
- Add users, authentication
- register, login, logout routes and pages
- authorization (only logged users in can comment)
- navbar logic
- refactor, split files


## 36 Yelpcamp 5 | Data Association
- associate comments with users
- associate campgrounds with users


## 37 Authorization
Once you know who someone is, you can find out what they are allowed to do.

### Yelpcamp 6 | Authorization
- edit campgrounds & comments + routes
- authorization for editing / deleting campgruonds & comments
- Refactoring middleware

## 38 Yelpcamp 7 | UI Improvements


## 39 Git, Github

### Git
Version Control System
- Lets you work with different versions and 'checkpoints'
- Lets you save different branches, merge changes
- Good for collaboration

### Github
Online platform that uses git to **share** and **version** code.
- You can save and clone repositories over the internet for free.


### Git Commands
Main commands you will use
- Initialize Git Repository (tell git which files to monitor) `cd ./ ; git init`
- Add selected files to staging area `git add [files]`
- Add staged files to commit `git commit -m "commit message"`
- `git log`
- `git checkout`



## 40 Deployment
Having the app constantly running on a server and available anywhere
- Good to separate development from production (debugging, adding features)
- Can host on own computer, or use cloud hosting services

### Cloud Deployment Tools
Companies that will let you rent server space for apps
- DigitalOcean, NodeJitsu, Modulus, LiNode, OpenShift
- Amazon Web Services, Microsoft Azure, Google Cloud 
- Heroku (FREE, many languages)


### Heroku
Free hosting platform with many language choices, good for NodeJS
1. Create account with Heroku
2. Download Heroku CLI, run `heroku login`
> package.json should have npm start script with `node app.js`
3. Create Git repository & add files
4. Create heroku app, `heroku create`
    - Creates git remote
5. Commit & Push changes to heroku
    - `git push heroku master`
6. View error messages `heroku logs`
> OR you can connect a github repo to heroku



## 41 Advanced JavaScript
JavaScript has some tricky concepts, outlined below

### `this` keyword
Context-dependent value with implications for OOP
- Reserved keyword (cannot be used as var name)
- Determined by *execution context*: how function is called
- Four rules: global, object/implicit, explicit, new

#### Global Context
When `this` is in a function, or is not in an object
- In browser, refers to `window` object
- Has global variables: `this.var = 5;`
- contains other objects, like `console`, `document`, etc.


#### Object / Implicit Context
When `this` is in an object or method, `this` refers to closest parent object.
- An object method with `this` evaluates to the object itself
- `this` in an event refers to the the HTML Element


#### Explicit Binding Context
You can explicitly set the value of `this` to use in a function.
- Use `call`, `apply`, or `bind`
- Call: thisArg, parameters, invokes immediately
- Apply: thisArg, parameter array, invokes immediately
    - same as apply, but with arguments array
- Bind: thisArg, parameters, returns new function with new value for `this` (used in setTimeout, react, etc.)
    - Should use Bind in a setTimeout, because function is called later in global context

| Method | Parameters | Invokes?  |
|--------|------------|-----------|
| Call   | this,1,2,3 | Yes       |
| Apply  | this,[1, 2]| Yes       |
| Bind   | this,1,2,3 | No, later |

`obj.method.apply(thisObj, [arg1, arg2]);`

`const boundMethod = obj.method.bind(this, arg1);`

`boundMethod(arg2);`

`setTimeout(() => {...}.bind(this), 1000)`

#### `new` Context
When creating an object with the `new` keyword, `this` refers to created object.
- Can be used in constructors
- This is why constructors must have `new` keyword

```javascript
function Person(name) {
    this.name = name;
}
```

#### "use strict";
Subset of JavaScript with stricter rules, designed to prevent bugs and be more secure.
- Prevents global variables
- Adds new keywords that cannot be used as varnames
- `this` in a function is `undefined`, instead of global


### Object Oriented Programming
Programming paradigm based on the idea of objects
- Objects are constructed from classes, and are instances of a class
- Classes are made to be abstract, modular, reusable.

#### New Keyword
Keyword used to create objects
1. Creates an empty object
2. Sets `this` in function to be the empty object & populates fields
3. Adds implicit `return this` to the end of constructor
4. Adds property called `__proto__`, linking to constructor prototype

#### Constructor Functions
A class has a function that creates an instance of an object, each with similar properties
- Constructors are capitalized
- Properties are attached to `this`, which refers to the created object when using `new`.
- Does not return anything unless using `new`, which then returns an object from `new constructor()`

```javascript
function House(beds, baths, sqft) {
    this.beds = beds;
    this.baths = baths;
    this.sqft = sqft;
    return this;
}
const myHouse = new House(2, 2, 1000);
```

#### Extending a Constructor (Pre-ES6)
You can apply/call a base constructor inside another constructor to extend a class and make the subclass inherit its parent's properties
- Great for avoiding code duplication

```javascript
function Person(name) {
    this.name;
}
function SmallPerson(name, height) {
    Person.call(this, name); // extends Person constructor
    this.height = height;
}
function WeirdPerson(name, personality) {
    Person.apply(this, arguments);
    this.personality = personality;
}
```

#### Prototypes
Objects share methods and properties through the prototype chain.
- Constructors have a property object called `.prototype` 
- `.prototype` has a property called `.constructor` which points back to constructor
- `.prototype` has methods and properties accessible from ANY instance of the constructor (inherited)
- Each object created from Constructor inherits `.prototype` and its `.__proto__`.
- Like passing by reference instead of value; the prototype is one object that all descended objects refer to
- `person.__proto__ === Person.prototype`
- Every object inherits a prototype from another object
    - The Object prototype inherits from null
    - JavaScript primitives like numbers and strings inherit from Object
    - This is the prototype chain
    - JavaScript searches up the chain to see if an object or its ancestors has a method


### ES6 Object Oriented Programming
ES6 adds new syntax to JavaScript's OOP functionality

https://www.sitepoint.com/javascript-private-class-fields/


### Closures
A nested function, where the inner function depends on values from the outer function
- Can call inner function immediately, or save and run later
- Good for creating private variables

```javascript
function adder(a) {
    return function(b) {
        return a + b;
    }
}
adder(5)(10); // 15; runs both funcs at once


function classRoom() {
    const instructors = ['colt', 'elie'];
    return {
        getInstructors: function() {
            return instructors;
        },
        addInstructor: function(newInstructor) {
            instructors.push(newInstructor);
            return instructors;
        }
    }
}
const c1 = classRoom();
c1.getInstructors(); // returns array
```


## To Do:
- Learn Handlebars.js instead of EJS
    - https://medium.com/@waelyasmina/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65
    - https://www.youtube.com/watch?v=1srD3Mdvf50&ab_channel=Academind
- Learn Pug templating language









## Resources

- Course
    - [The Web Developer Bootcamp](https://www.udemy.com/the-web-developer-bootcamp/learn/)
    - [Course Curriculum](./01-course-intro/Web-Developer-Bootcamp-Course-Outline.pdf)
    - [Course Outline](./The-Web-Developer-Bootcamp-Outline-[BA]-2018-05-29.pdf)
- Documentation
    - [Mozilla Developer Network](https://developer.mozilla.org/en-US/)


