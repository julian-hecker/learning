# Web Development Workflows






## Webpack
Asset bundler and task runner
- manages dependencies for frontend javascript code
- can minify, gzip, optimize code, images
- can run scripts, watch files, reload, etc


### Configuring Webpack
Webpack config is notoriously hard but very rewarding

1. get packages `npm i -D webpack webpack-cli`
2. Create `webpack.config.js` file in root
3. Create following file
```javascript
module.exports = {
    entry: './index.js',    // points to 'main' file
    output: {               
        filename: 'bundle.js',
        path: ''            // where to put output file
    },
    mode: 'development',    // prevent internal screaming
    watch: true,            // don't need to run a lot
}
```
4. add to `"scripts"` in `package.json`:
    - `"dev": "webpack"`
5. request bundled script from html
6. Add more configuration in `webpack.config.js`


### Webpack & CSS Workflow (PostCSS)
Compiling preprocessors, autoprefixing, minifying, etc can all be done by Webpack and PostCSS

- Add an object called `modules`
- Add a property called `rules` which contains an array of objects
- each object has a key called `test` and a key called `use`; it will test for files that match the regex in test, and use the plugins specified in use.

```javascript

postCssVars = [
    require('autoprefixer')
];

{
    // prior config...
    module: {
        rules: [
            {
                test: /\.css$/i, // files that end in .css
                use: [
                    'style-loader', 
                    'css-loader',
                    {
                        loader: 'post-css',
                        options: {
                            plugins: postCssVars
                        }
                    }
                ]
            }
        ]
    }
}


```



### Configuring Webpack


