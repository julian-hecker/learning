# Colt Steele's Web Development Bootcamp on Udemy Notes
- [Parent Directory](../)


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
$('.selector').click(/*function to run on click*/);
```

## Resources
- Course
    - [The Web Developer Bootcamp](https://www.udemy.com/the-web-developer-bootcamp/learn/)
    - [Course Curriculum](./01-course-intro/Web-Developer-Bootcamp-Course-Outline.pdf)
    - [Course Outline](./The-Web-Developer-Bootcamp-Outline-[BA]-2018-05-29.pdf)
- Documentation
    - [Mozilla Developer Network](https://developer.mozilla.org/en-US/)


