// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pipelines_runtime_v1alpha1_runtime_api_pb = require('../../../pipelines/runtime/v1alpha1/runtime_api_pb.js');
var pipelines_runtime_v1alpha1_runtime_pb = require('../../../pipelines/runtime/v1alpha1/runtime_pb.js');

function serialize_pipelines_runtime_v1alpha1_CreateRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.CreateRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_CreateRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_CreateRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.CreateRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_CreateRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_DeleteRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.DeleteRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_DeleteRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_DeleteRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.DeleteRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_DeleteRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_UpdateRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.UpdateRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_UpdateRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_UpdateRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.UpdateRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_UpdateRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RuntimeAPIServiceService = exports.RuntimeAPIServiceService = {
  createRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/CreateRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.CreateRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_CreateRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_CreateRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_CreateRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_CreateRuntimeResponse,
  },
  updateRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.UpdateRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_UpdateRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_UpdateRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_UpdateRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_UpdateRuntimeResponse,
  },
  deleteRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/DeleteRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.DeleteRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_DeleteRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_DeleteRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_DeleteRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_DeleteRuntimeResponse,
  },
};

exports.RuntimeAPIServiceClient = grpc.makeGenericClientConstructor(RuntimeAPIServiceService);
