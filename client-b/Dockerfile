FROM node:20-slim
    
WORKDIR /app

COPY . .

RUN rm -rf package-lock.json node_modules && npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
