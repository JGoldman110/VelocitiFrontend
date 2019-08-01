FROM node:10.15.3
EXPOSE 4200

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@8.2.0

COPY ./ /app

CMD ["ng", "serve", "--host=0.0.0.0", "--port=4200", "--disableHostCheck"]
