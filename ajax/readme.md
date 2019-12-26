# JSON and AJAX
Used together in pages that load live data from the internet.

Course from [LearnWebCode's JSON and AJAX Tutorial on Youtube](https://youtu.be/rJesac0_Ftw).

## JSON
**JavaScript Object Notation**

- Lightweight, efficient data transfer format
- Can model data like a JavaScript Object
    - Fields are strings that have values
    - Values must be Boolean, Number, String, and nested Objects and Arrays (BASON)

### Accessing JSON Data
Data in a JSON file must first be put in `JSON.parse()` which can be saved into a variable.

- Access items from JSON like a normal JavaScript Object
    - `data[i].preferences.foods[ii]`
- Different API's have different ways intended to use.


## AJAX
**Asynchronous Javascript And XML**

- Used for retrieving data on the fly, without a page reload.
- Can be used for getting data from the internet.
- Now can use JSON instead of XML


### Making AJAX Request
```JavaScript
// Create instance of XMLHttpRequest
const request = new XMLHttpRequest();
// where method is 'GET' or 'POST'
// and URL is a url string for a JSON or XML resource
request.open(method, url);
// Perform callback function when request loads
request.onload = function() {
    // Saves response JSON as readable object
    const data = JSON.parse(request.responseText);
}
// Sends the request
request.send();



```





