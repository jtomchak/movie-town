# Movie Town

1. Go to github and create a new repo. **DO NOT** click any additional details!
2. Follow the directions provided on github to create the project locally, add remote and push your first commit.
3. **IF YOU DO NOT GET THE INSTRUCTIONS** you clicked extra stuff!!! _it gets the hose again_
3. We want to set up a new project here so we'll run ```npm init -y``` inside the project 
4. Create a blank HTML5 scaffald index.html in folder 'dist' and app.js in folder 'src'
5. Add a single script tag to your index.html 
```<script src="./app.bundle.js"></script>```


5. ```npm install jquery bootstrap babel-core babel-loader babel-preset-es2015 sass-loader node-sass webpack css-loader style-loader -D```
6. Copy the webpack.config.js from slack or the repo into the root of our application. Pretty please. 
7. You'll need this added to your web pack:
```js
devServer: {
    contentBase: "./dist"
  },
  ```
8. And your scripts in your package.json needs to have the following: 
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open"
  },
  ```
  9. Add a ```.gitignore``` and add the following lines
```
/node_modules
/dist
```
10. Probably gonna need ```npm install -D file-loader``` for bootstrap fonts loaded from file...maybe
11. update our webpack with file-loader module
```
{
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: "file-loader"
      }
```
12. add a style.scss to your src folder with the following
```
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";

$halloween-background-color: #f07c05;
$text-color: #faf7f7;

body {
  background: $halloween-background-color;
  color: $text-color;
}
```
13. Add nav and navbar stuff to index.html
```HTML
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#nav1">Halloween Wobble Site</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active navShows">
          <a href="#nav1">Meow Shows</a>
        </li>
        <li class="active navSurprise">
          <a href="#nav2">Surprise</a>
        </li>
      </ul>
    </div>
  </nav>
```


