aws lambda invoke \
  --function-name $name \
  out \
  --log-type Tail \
  --query 'LogResult' \
  --output text
