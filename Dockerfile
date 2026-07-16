FROM node:24-alpine

RUN mkdir -p /app

WORKDIR /app
COPY ./src/package*.json ./
RUN chown node:node -R ./
USER node
RUN npm install
RUN npm update
RUN mkdir src
COPY --chown=node:node ./src ./
CMD ["npm", "run", "start"]