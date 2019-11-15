# jQuery Intro
- [Parent Directory](../)

## Notes
jQuery is a frontend javaScript library that assists in selecting, styling, and manipulating DOM elements.

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


## Coursework
- [color game project](./color-game-project.html)
