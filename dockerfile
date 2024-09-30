FROM node:18

RUN apt-get update && apt-get install -y python3 python3-pip

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prefix app/backend

RUN npm run build --prefix app/frontend

EXPOSE 3000

CMD npm run app
