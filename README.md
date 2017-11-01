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
14. Now you can run your dev server, but first we need to install it ```npm install -D webpack-dev-server```. And make sure that our npm scripts for start is correct. 
```js
"start": "webpack-dev-server --open"
```

15. Create a fetch request, wrapped in function. and handle the resolve or reject from the fetch call. Console.log out the payload in json so we know that it's working, or failing. :-(
```const movieURL = "https://api.themoviedb.org/3/genre/27/movies?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&include_adult=false&sort_by=created_at.asc"``` 

16. Now we want to loop over the results of each movie and create a div element, append an image element to it with the poster url, and finally append that create element to the class div 'movies' that is also our bootstrap row. 

17. Sweet!!! Images!!! but why are then off set ? :-( Here we want to leverage column resets [Bootstrap Docs](https://getbootstrap.com/docs/3.3/css/) by applying a column reset at responsive breakpoints, we get them to align correctly. Double Sweet. 

18. Ok. I think we've had it for the day. 

19. Now we've got our movies up, and showing thumbnail and title as a class caption. Rad. Looks good in md-col, but what about xsm, sm, and lg. So let's fix that!

20. Adding in release data and description, and a call to action button for details

21. We added col for xs, sm, and lg. This includes clearfix for 2 col layout aka sm/xs. 

