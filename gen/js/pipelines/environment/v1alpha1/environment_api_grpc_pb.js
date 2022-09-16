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

function serialize_pipelines_environment_v1alpha1_DeleteEnvironmentRequest(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.DeleteEnvironmentRequest)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.DeleteEnvironmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_DeleteEnvironmentRequest(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.DeleteEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_DeleteEnvironmentResponse(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.DeleteEnvironmentResponse)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.DeleteEnvironmentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_DeleteEnvironmentResponse(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.DeleteEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.GetByNameEnvironmentRequest)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.GetByNameEnvironmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.GetByNameEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.GetByNameEnvironmentResponse)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.GetByNameEnvironmentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.GetByNameEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_GetOneEnvironmentRequest(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.GetOneEnvironmentRequest)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.GetOneEnvironmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_GetOneEnvironmentRequest(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.GetOneEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_GetOneEnvironmentResponse(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.GetOneEnvironmentResponse)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.GetOneEnvironmentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_GetOneEnvironmentResponse(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.GetOneEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_ListEnvironmentRequest(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.ListEnvironmentRequest)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.ListEnvironmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_ListEnvironmentRequest(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.ListEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_ListEnvironmentResponse(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.ListEnvironmentResponse)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.ListEnvironmentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_ListEnvironmentResponse(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.ListEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_UpdateEnvironmentRequest(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.UpdateEnvironmentRequest)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.UpdateEnvironmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_UpdateEnvironmentRequest(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.UpdateEnvironmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_environment_v1alpha1_UpdateEnvironmentResponse(arg) {
  if (!(arg instanceof pipelines_environment_v1alpha1_environment_api_pb.UpdateEnvironmentResponse)) {
    throw new Error('Expected argument of type pipelines.environment.v1alpha1.UpdateEnvironmentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_environment_v1alpha1_UpdateEnvironmentResponse(buffer_arg) {
  return pipelines_environment_v1alpha1_environment_api_pb.UpdateEnvironmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EnvironmentAPIServiceService = exports.EnvironmentAPIServiceService = {
  createEnvironment: {
    path: '/pipelines.environment.v1alpha1.EnvironmentAPIService/CreateEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_environment_v1alpha1_environment_api_pb.CreateEnvironmentRequest,
    responseType: pipelines_environment_v1alpha1_environment_api_pb.CreateEnvironmentResponse,
    requestSerialize: serialize_pipelines_environment_v1alpha1_CreateEnvironmentRequest,
    requestDeserialize: deserialize_pipelines_environment_v1alpha1_CreateEnvironmentRequest,
    responseSerialize: serialize_pipelines_environment_v1alpha1_CreateEnvironmentResponse,
    responseDeserialize: deserialize_pipelines_environment_v1alpha1_CreateEnvironmentResponse,
  },
  getOneEnvironment: {
    path: '/pipelines.environment.v1alpha1.EnvironmentAPIService/GetOneEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_environment_v1alpha1_environment_api_pb.GetOneEnvironmentRequest,
    responseType: pipelines_environment_v1alpha1_environment_api_pb.GetOneEnvironmentResponse,
    requestSerialize: serialize_pipelines_environment_v1alpha1_GetOneEnvironmentRequest,
    requestDeserialize: deserialize_pipelines_environment_v1alpha1_GetOneEnvironmentRequest,
    responseSerialize: serialize_pipelines_environment_v1alpha1_GetOneEnvironmentResponse,
    responseDeserialize: deserialize_pipelines_environment_v1alpha1_GetOneEnvironmentResponse,
  },
  updateEnvironment: {
    path: '/pipelines.environment.v1alpha1.EnvironmentAPIService/UpdateEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_environment_v1alpha1_environment_api_pb.UpdateEnvironmentRequest,
    responseType: pipelines_environment_v1alpha1_environment_api_pb.UpdateEnvironmentResponse,
    requestSerialize: serialize_pipelines_environment_v1alpha1_UpdateEnvironmentRequest,
    requestDeserialize: deserialize_pipelines_environment_v1alpha1_UpdateEnvironmentRequest,
    responseSerialize: serialize_pipelines_environment_v1alpha1_UpdateEnvironmentResponse,
    responseDeserialize: deserialize_pipelines_environment_v1alpha1_UpdateEnvironmentResponse,
  },
  listEnvironment: {
    path: '/pipelines.environment.v1alpha1.EnvironmentAPIService/ListEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_environment_v1alpha1_environment_api_pb.ListEnvironmentRequest,
    responseType: pipelines_environment_v1alpha1_environment_api_pb.ListEnvironmentResponse,
    requestSerialize: serialize_pipelines_environment_v1alpha1_ListEnvironmentRequest,
    requestDeserialize: deserialize_pipelines_environment_v1alpha1_ListEnvironmentRequest,
    responseSerialize: serialize_pipelines_environment_v1alpha1_ListEnvironmentResponse,
    responseDeserialize: deserialize_pipelines_environment_v1alpha1_ListEnvironmentResponse,
  },
  deleteEnvironment: {
    path: '/pipelines.environment.v1alpha1.EnvironmentAPIService/DeleteEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_environment_v1alpha1_environment_api_pb.DeleteEnvironmentRequest,
    responseType: pipelines_environment_v1alpha1_environment_api_pb.DeleteEnvironmentResponse,
    requestSerialize: serialize_pipelines_environment_v1alpha1_DeleteEnvironmentRequest,
    requestDeserialize: deserialize_pipelines_environment_v1alpha1_DeleteEnvironmentRequest,
    responseSerialize: serialize_pipelines_environment_v1alpha1_DeleteEnvironmentResponse,
    responseDeserialize: deserialize_pipelines_environment_v1alpha1_DeleteEnvironmentResponse,
  },
  getByNameEnvironment: {
    path: '/pipelines.environment.v1alpha1.EnvironmentAPIService/GetByNameEnvironment',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_environment_v1alpha1_environment_api_pb.GetByNameEnvironmentRequest,
    responseType: pipelines_environment_v1alpha1_environment_api_pb.GetByNameEnvironmentResponse,
    requestSerialize: serialize_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest,
    requestDeserialize: deserialize_pipelines_environment_v1alpha1_GetByNameEnvironmentRequest,
    responseSerialize: serialize_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse,
    responseDeserialize: deserialize_pipelines_environment_v1alpha1_GetByNameEnvironmentResponse,
  },
};

exports.EnvironmentAPIServiceClient = grpc.makeGenericClientConstructor(EnvironmentAPIServiceService);
