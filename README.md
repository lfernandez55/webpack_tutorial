# webpack_tutorial

# This tag builds on tag 3 below.  It builds an app from webpack up.

## The final output is almost the same as what is in the repo named 

    https://github.com/lfernandez55/express-hosting-react-barebones

### To run this:

    npm install

Then open up two terminals

    npm run build

This will listen for changes in react files and compile stuff into the public folder.    

    npm run server  go to localhost:8080.  
    
Changes you make to react and server code will automatically render. No need to restart server.   

If you did want to use npm start you would need to add an index.html file to the public folder
and hook it back up to the bundle.  Right now, the main html page is served thru the express 
layout page which is pointing to the bundle in the public folder.  So there's no real reason
to use "npm start"


### To get from tag 3 below, to this barebones I did a number of things. 

Check the diff to make sure you find everything. But here's most of them:

-installed express and nodemon and ejs
-npm install --save-dev @babel/preset-env
-added .babelrc file
-npm install @babel/node
-added "server": "nodemon server.js --exec babel-node" in package.json
-in webpack took out  HtmlWebpackPlugin cuz this remakes public/index.html which i don't want to do
-add watch to webpack
  





# Tag 3 Below


This repo is what is created when following these instructions:

    https://thedeployguy.com/2020-06-07-getting-to-know-webpack/

## Notes: 

In the instructions the author says that one should make a url to

    main.bundle.js 
    
In this repo it's just 

    bundle.js 

The --save-dev in "npm install webpack --save-dev" modifies the package.json entry so that
instead of:

    "dependencies": {
        "webpack": "^5.27.1"
    }

you have:

    "devDependencies": {
        "webpack": "^5.27.1"
    }

In https://thedeployguy.com/2020-06-14-adding-typescript-to-web/ the author says to add:

    "start": "webpack-dev-server --open",

to package.json. Instead, add:

    "start": "webpack serve"

In this video I also didn't add typescript features.

In https://thedeployguy.com/2020-06-14-adding-typescript-to-web/ I also had to add another plugin:

      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
        new MiniCssExtractPlugin()
      ]

## To run:

To run this type:

    npm install

then:

    npx serve public

then go to:

    localhost:5000

