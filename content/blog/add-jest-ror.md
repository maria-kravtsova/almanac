---
layout: post
title: "Jest with React On Rails"
date: 2019-04-07 14:00:00
categories: react
comments: yes
---

Usually when I have to install a new tool my steps are:

1. Find the official setup documentation.
2. Follow them.
3. If I encounter the errors - google them, use the most recent solutions I find on SO or Github. 
4. Enjoy the tool.

When I tried to follow these steps for setting up Jest on my React app, which is baked through React on Rails I ended up wasting 2 days of my life. Well, and maybe 1 day of my co-worker and all my friend's lives. I ended up downgrading version, upgrading versions. I was in crunch mode, and the decision was made that JS tests shouldn't hold up this project. 

A few weeks later it was time to try again. This time I was determined to actually understand the babel tools that you are supposedly needed (every search result says you need a different tool and config 🤦‍♀️)

So here were I was starting at:

Rails 5 app, Webpacker 3.5, React On Rails 11, React 16.5 and a partridge in a pear tree...

I found this useful list of things I will need to understand from [Adeel Imran](https://medium.freecodecamp.org/how-to-set-up-jest-enzyme-like-a-boss-8455a2bc6d56) and I started there:

`@babel/core` Since generally we use webpack to compile our react code. Babel is a major dependency that helps tell webpack how to compile the code. This is a peer dependency for using Jest as well.

`@babel/polyfil` Jest requires a thing called `regenerator-runtime`, @babel/polyfill comes built-in with it and some other cool features.

`@babel/preset-env` & `@babel/preset-react` Is for features like ES6 and React, so while writing unit tests `Jest` knows about **ES6** syntax and **JSX.**

`babel-core` This is mostly a dependency for `Jest`, as we need `babel-core` for Jest to work.

`babel-jest` Will help Babel understand the code we write in `Jest`

`enzyme` This is an assertion library that makes it easier to assert, manipulate, and traverse your React Components’ output.

`enzyme-adapter-react-16` An adapter/middle-ware to help Jest connect with `enzyme`

`jest` Jest is the test library on which we will run our tests.

I googled and research each of those, but did not install anything yet, because some things seem extra. Also I needed the app to still run! Packages I ended up installing (note I believe in snapshot tests, so I needed enzyme):

    "babel-jest": "^23.6.0",
    "jest": "^23.5.0",
    "enzyme": "^3.9.0",
    "enzyme-adapter-react-16": "^1.11.2",
    "jest-enzyme": "^7.0.2",
    "regenerator-runtime": "^0.13.2",

Jest config:

    "jest": {
        "roots": [
          "app/javascript"
        ],
        "moduleDirectories": [
          "node_modules",
          "app/javascript/packs"
        ],
        "setupTestFrameworkScriptFile": "./node_modules/jest-enzyme/lib/index.js",
        "moduleNameMapper": {
          "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/javascript/__mocks__/fileMock.js",
          "\\.(css|less)$": "<rootDir>/app/javascript/__mocks__/styleMock.js"
        }
    }

.babelrc note this only changes test environment:

    "env": {
        "test": {
          "presets": [["env"], "react"],
          "plugins": [
            "syntax-dynamic-import",
            "transform-object-rest-spread",
            [
              "transform-class-properties",
              {
                "spec": true
              }
            ]
          ]
        }
      }

Hopefully you find this useful.