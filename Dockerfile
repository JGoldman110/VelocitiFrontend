#FROM node:10.15.3 AS builder
#WORKDIR /frontend
#COPY ./ /frontend
#RUN npm install
#RUN ng serve

#RUN npm run build -- --output-path=./dist/out

FROM nginx:alpine
WORKDIR /frontend

COPY ./dist /frontend
#/usr/share/nginx/html/
