FROM node:16-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm ci

RUN npm run build

COPY  . .

EXPOSE 3000
