FROM ubuntu:16.04

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt install -y nodejs
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm","start"]