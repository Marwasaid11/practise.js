FROM alpine
WORKDIR /app
COPY . /app
RUN apk add --update nodejs
RUN apk add --update npm
RUN npm install express
CMD node practise.js