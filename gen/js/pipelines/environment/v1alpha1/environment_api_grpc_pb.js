// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pipelines_environment_v1alpha1_environment_api_pb = require('../../../pipelines/environment/v1alpha1/environment_api_pb.js');
var pipelines_environment_v1alpha1_environment_pb = require('../../../pipelines/environment/v1alpha1/environment_pb.js');

function serialize_pipelines_environment_v1alpha1_CreateEnvironmentRequest(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.CreateEnvironmentRequest)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.CreateEnvironmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_CreateEnvironmentRequest(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.CreateEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_CreateEnvironmentResponse(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.CreateEnvironmentResponse)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.CreateEnvironmentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_CreateEnvironmentResponse(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.CreateEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EnvinromentAPIServiceService = exports.EnvinromentAPIServiceService = {
  createEnvironment: {
    path: '/pipelines.environment.v1alpha1.EnvinromentAPIService/CreateEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_environment_v1alpha1_environment_api_pb.CreateEnvironmentRequest,
    responseType: pipelines_environment_v1alpha1_environment_api_pb.CreateEnvironmentResponse,
    requestSerialize: serialize_pipelines_environment_v1alpha1_CreateEnvironmentRequest,
    requestDeserialize: deserialize_pipelines_environment_v1alpha1_CreateEnvironmentRequest,
    responseSerialize: serialize_pipelines_environment_v1alpha1_CreateEnvironmentResponse,
    responseDeserialize: deserialize_pipelines_environment_v1alpha1_CreateEnvironmentResponse,
  },
};

exports.EnvinromentAPIServiceClient = grpc.makeGenericClientConstructor(EnvinromentAPIServiceService);
