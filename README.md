# webpack_tutorial

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

