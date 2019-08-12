# Introduction to CSS
- [Parent Directory](../)

## Notes
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

## Coursework
- [CSS Selector Scavenger Hunt](./selectorsExercise.html)
