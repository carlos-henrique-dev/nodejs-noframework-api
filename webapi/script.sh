echo -e '\n requesting all heroes'
curl localhost:3000/heroes

echo -e '\n\n requesting XuxaDaSilva'
curl localhost:3000/heroes/1

echo -e '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes

echo -e '\n\n creating Chapolin'
CREATE=$(curl --silent -X POST \
    --data-binary '{"name":"Chapolin", "age":100, "power":"Strength"}' \
    localhost:3000/heroes)

echo $CREATE

ID=$(echo $CREATE | jq .id)

echo '\n\n requesting chapolin'
curl localhost:3000/heroes/$ID
