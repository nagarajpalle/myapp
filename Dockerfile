FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN apk --no-cache add curl

RUN npm install

COPY . .

RUN npm run build

USER root

EXPOSE 3000

CMD ["npm","start"]

