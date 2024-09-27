FROM node:20.11.0 as client-builder

WORKDIR /client-container
COPY . .
RUN npm install

CMD npm install && npm run dev