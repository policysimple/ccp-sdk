// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pipelines_instance_v1alpha1_instance_api_pb = require('../../../pipelines/instance/v1alpha1/instance_api_pb.js');
var pipelines_instance_v1alpha1_instance_pb = require('../../../pipelines/instance/v1alpha1/instance_pb.js');

function serialize_pipelines_instance_v1alpha1_CreateInstanceRequest(arg) {
  if (!(arg instanceof pipelines_instance_v1alpha1_instance_api_pb.CreateInstanceRequest)) {
    throw new Error('Expected argument of type pipelines.instance.v1alpha1.CreateInstanceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_instance_v1alpha1_CreateInstanceRequest(buffer_arg) {
  return pipelines_instance_v1alpha1_instance_api_pb.CreateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_instance_v1alpha1_CreateInstanceResponse(arg) {
  if (!(arg instanceof pipelines_instance_v1alpha1_instance_api_pb.CreateInstanceResponse)) {
    throw new Error('Expected argument of type pipelines.instance.v1alpha1.CreateInstanceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_instance_v1alpha1_CreateInstanceResponse(buffer_arg) {
  return pipelines_instance_v1alpha1_instance_api_pb.CreateInstanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InstanceAPIServiceService = exports.InstanceAPIServiceService = {
  createInstance: {
    path: '/pipelines.instance.v1alpha1.InstanceAPIService/CreateInstance',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_instance_v1alpha1_instance_api_pb.CreateInstanceRequest,
    responseType: pipelines_instance_v1alpha1_instance_api_pb.CreateInstanceResponse,
    requestSerialize: serialize_pipelines_instance_v1alpha1_CreateInstanceRequest,
    requestDeserialize: deserialize_pipelines_instance_v1alpha1_CreateInstanceRequest,
    responseSerialize: serialize_pipelines_instance_v1alpha1_CreateInstanceResponse,
    responseDeserialize: deserialize_pipelines_instance_v1alpha1_CreateInstanceResponse,
  },
};

exports.InstanceAPIServiceClient = grpc.makeGenericClientConstructor(InstanceAPIServiceService);
