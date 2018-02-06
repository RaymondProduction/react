FROM node:8-slim

COPY package.json .

RUN npm install

COPY . .

CMD npm start