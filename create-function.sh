#!/bin/bash

aws lambda create-function \
  --function-name $name \
  --zip-file file://$file \
  --handler $name.handler \
  --runtime nodejs16.x \
  --role arn:aws:iam::123456789012:role/$role_name
