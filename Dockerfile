FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install express ejs 

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]