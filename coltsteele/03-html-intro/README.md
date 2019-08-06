# Introduction to HTML
- [Parent Directory](../)

## Notes
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
    

## Coursework
- [lists](./lists.html)
- [recreate](./recreate.html)
