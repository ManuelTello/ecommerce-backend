#syntax=docker/dockerfile:1

FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install 

EXPOSE 8080

COPY . . 

CMD ["npm","start"]