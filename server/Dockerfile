FROM node:20
WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# CMD /wait-for-it.sh db:3306 -- npm start
