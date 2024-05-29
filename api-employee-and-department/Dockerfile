FROM node:12-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

ENV NODE_ENV=development

ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000

#VOLUME [ "/app" ]
#
#WORKDIR /app

CMD ["npm", "start"]


