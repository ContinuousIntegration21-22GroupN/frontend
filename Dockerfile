FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

# Add before src files to avoid rebuilds if package*.json's dont change.
COPY package*.json .
RUN npm ci --omit=dev

COPY . .

EXPOSE 8080

CMD ["npm", "start"]