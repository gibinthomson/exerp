# Dockerfile for Backend
FROM node:18-alpine

WORKDIR /usr/src/be

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "serve"]
