#!/bin/bash

npm config set cache /home/node/app/.npm-cache --global

cd /home/node/app

npm install

npm install grpc

npm run start:dev