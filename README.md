# FE React Codebase JonSoftware

This codebase created to help my when creating the client application, this codebase contains usefull example like code structure, dockerfile, lint etc.

# How to install
## Development mode
- npm install or yarn 
## Production mode
- NODE_ENV=production npm install or NODE_ENV=production yarn

# How to run in Development Mode
- npm start

# How to run app in Production Mode
## Using "serve"
- npm run serve
- notes: the default port is 3000, you change it index.js
## Using docker
- first, you need to build docker image
- docker build -t be-js-test . 
- docker run -p 3000:3000 be-js-test

## TODO
- proper request validation
- errorCode contract between be and fe
- separete bussiness layer
- ..