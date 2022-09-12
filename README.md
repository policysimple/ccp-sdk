# ccp-sdk

Proto files and proto builds for connect to ccp service with grpc clients.

## dir

- gen : compiled clients and messages.
- proto: proto dir struct and proto files

## services 

### Autoscaling
Managment autoscalings into the cluster.

### Metrics
Get metrics for application deployed.

### Logs
Read logs for applicantion deployed.


## depedencies

For install the depedencies, you can use brew. Is compatible with mac and linux. https://brew.sh/index_es

- buf  : https://docs.buf.build/installation
- grpc : `brew install grpc`
- protobuf: `brew install protobuf`

## linter
run into the terminal:
```
buf lint
```


## compile protos

Some languajes required extra dependencies and binaries. you can build the protos with docker:

- In a terminal into the project root folder run:
```
docker run --rm -v `pwd`:/temp/buf-gen netsaj/buf-generate
```

- Check the `gen` folder, your protos will be compiled there.


**Note1:** Docker image repository : https://github.com/netsaj/buf-generate

**Note2:** If you have all dependencies you can build running in your terminal `buf generate`

