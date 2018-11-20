#!/bin/bash

aws --endpoint-url="http://localhost:4569" \
  dynamodb \
  create-table \
  --table-name 'users' \
  --attribute-definitions '[{"AttributeName": "idPrefix", "AttributeType": "S"}, {"AttributeName": "id", "AttributeType": "S"}, {"AttributeName": "login", "AttributeType": "S"}, {"AttributeName": "email", "AttributeType": "S"}]' \
  --key-schema '[{"AttributeName": "idPrefix", "KeyType": "HASH"}, {"AttributeName": "id", "KeyType": "RANGE"}]' \
  --global-secondary-indexes '[{"IndexName": "gsi1", "KeySchema": [{"AttributeName": "login", "KeyType": "HASH"}], "Projection": {"ProjectionType": "KEYS_ONLY"}, "ProvisionedThroughput": {"ReadCapacityUnits":5, "WriteCapacityUnits":5}}, {"IndexName": "gsi2", "KeySchema": [{"AttributeName": "email", "KeyType": "HASH"}], "Projection": {"ProjectionType": "KEYS_ONLY"}, "ProvisionedThroughput": {"ReadCapacityUnits":5, "WriteCapacityUnits":5}}]' \
  --provisioned-throughput 'ReadCapacityUnits=5,WriteCapacityUnits=5'
