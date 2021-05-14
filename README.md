# BE JS Codebase JonSoftware

This codebase created to help my when creating the client application, this codebase contains usefull example like code structure, dockerfile, lint etc.

# How to install
## Development mode
- npm install or yarn 
## Production mode
- NODE_ENV=production npm install or NODE_ENV=production yarn
## Run migration/seed
This repo using sequilize as db orm, so you can use all of the features sequlize in this repo, type ```npm run s --- <sequlize-cli command>``` or using npx ```npx sequlize-cli <command>``` ex: create migration: ```npm run s --- migration:create name-migration```

# How to run in Development Mode
- npm start
- npm run db:migrate // run latest migration (if any)
- npm run db:seed // run latest seed (if any)

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