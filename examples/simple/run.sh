#!/bin/sh

while ! nc -z 'localstack' '4569'
do
    echo "waiting for dynamodb"
    sleep 1
done
sleep 1

node /app/examples/simple/app.js
