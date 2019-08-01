FROM node:10.15.3

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@8.2.0

COPY ./ /app

CMD ["ng", "serve"]
