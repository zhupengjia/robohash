FROM node:14-alpine3.13

WORKDIR /usr/src/app

COPY index.js .
COPY robohash.js .
COPY package.json .
COPY natsort.js .
COPY index.js .
ADD backgrounds backgrounds
ADD sets sets
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]
