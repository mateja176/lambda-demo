#!/bin/bash

aws iam attach-role-policy \
  --role-name $name \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole |
  jq
