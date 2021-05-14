# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN NODE_ENV=production npm install --silent

# add app
COPY . ./

# compile app
RUN npm run build

# start app
CMD ["npm", "run", "serve"]