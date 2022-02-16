# Docker commands
NAME_IMAGE=znly/protoc
DIR_LOCAL='/Users/igorariza/Documents/Cuemby/github.com/cuemby/ccp-sdk'
docker build --tag $NAME_IMAGE .


docker run --rm -v $DIR_LOCAL:/temp/buf-gen $NAME_IMAGE

docker run --rm -v `pwd`:/temp/buf-gen netsaj/buf-generate

v1.0.0-dev55
