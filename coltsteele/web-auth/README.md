# Web Authentication
Based on a lecture on [YouTube](https://www.youtube.com/watch?v=i7of02icPyQ&feature=youtu.be&ab_channel=TheNodejsMeetup).


## Notes

### Authentication Process
- HTML Forms cannot authenticate alone
- Must submit details to server with POST
- Server looks up user details in database
- Session cookie saves whether you are logged in
    - Cookie saved in browser, sent to server each time
    - Cookies are strings of text, can be set or get
- Passwords can't just be stored as plaintext in database
    - Passwords gotta be hashed (encrypted)
    - bcrypt, scrypt, argon2 are good hashing algorithms
    - compare submitted text to hashed password
- Middlewares (app.use) runs before every request
- CSRF Cross Site Request Forgery Tokens: prevent XSS
    - Saved in a cookie in browser
    - `npm i csurf`
- SSL Secure Sockets Layer (HTTPS)
    - If you don't use SSL, your information is stolen
- HTTP Headers
    - `npm i helmet`
- Libraries
    - Passport, Node-Login, Aqua, Okta


