FROM node:18-alpine

WORKDIR /usr/src/fe

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "serve"]


