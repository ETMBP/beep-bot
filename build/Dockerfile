FROM node:23-alpine

RUN mkdir -p /app

WORKDIR /app
COPY ../package*.json ./
RUN chown node:node -R ./
USER node
RUN npm install
RUN mkdir src
COPY --chown=node:node -R ../src ./
CMD ["npm", "run", "start"]