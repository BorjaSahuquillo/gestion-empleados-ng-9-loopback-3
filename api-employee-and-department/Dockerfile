FROM node:12-alpine3.14

USER node

ENV NODE_ENV=development

ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000

VOLUME [ "/app" ]

WORKDIR /app

CMD ["npm", "start"]
