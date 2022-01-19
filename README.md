## API Docs
## API 1
it is a post request it used to insert candidate in the db
curl of the request 
curl --location --request POST 'http://localhost:3000/insert-candidate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name" : "hello",
    "email" : "cchgv.com"

}'



## API 2 
it is a post request used to insert marks in the test_score table
curl of the request :
curl --location --request POST 'http://localhost:3000/insert-score' \
--header 'Content-Type: application/json' \
--data-raw '{
    "candidate_id" : 1122,
    "first_round" : 552,
    "second_round" : 782

}'

## API 3
it is an get request used to get average of each round and candidate scoring highest mark 
curl of the request
curl --location --request GET 'http://localhost:3000/get'

## img of table
![image info](./candidatetable.png)
![image info](./test_score.png)
