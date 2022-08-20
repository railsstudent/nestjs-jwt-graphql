FROM node:16-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci

COPY  . .

EXPOSE 3000
