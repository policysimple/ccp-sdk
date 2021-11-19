# Docker commands
NAME_IMAGE=proto-compiler
NAME_CONTAINER=proto-compiler
DIR_LOCAL='C:\Users\madel\Documents\Cuemby\github.com\cuemby\ccp-sdk'
docker build --tag $NAME_IMAGE .

docker rm -fv $NAME_CONTAINER

docker run -dti --name $NAME_CONTAINER -v $DIR_LOCAL:/temp/buf-gen $NAME_IMAGE


docker exec -ti $NAME_CONTAINER bash