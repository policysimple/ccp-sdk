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

function serialize_pipelines_runtime_v1alpha1_GetRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.GetRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_GetRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_GetRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.GetRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_GetRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_ListRuntimesRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.ListRuntimesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_ListRuntimesRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_ListRuntimesResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.ListRuntimesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_ListRuntimesResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeRequest(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeRequest)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeRequest(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeResponse(arg) {
  if (!(arg instanceof pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeResponse)) {
    throw new Error('Expected argument of type pipelines.runtime.v1alpha1.UpdateResponseMessageRuntimeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeResponse(buffer_arg) {
  return pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  getRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/GetRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.GetRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_GetRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_GetRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_GetRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_GetRuntimeResponse,
  },
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
  updateResponseMessageRuntime: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/UpdateResponseMessageRuntime',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.UpdateResponseMessageRuntimeResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_UpdateResponseMessageRuntimeResponse,
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
  listRuntimes: {
    path: '/pipelines.runtime.v1alpha1.RuntimeAPIService/ListRuntimes',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesRequest,
    responseType: pipelines_runtime_v1alpha1_runtime_api_pb.ListRuntimesResponse,
    requestSerialize: serialize_pipelines_runtime_v1alpha1_ListRuntimesRequest,
    requestDeserialize: deserialize_pipelines_runtime_v1alpha1_ListRuntimesRequest,
    responseSerialize: serialize_pipelines_runtime_v1alpha1_ListRuntimesResponse,
    responseDeserialize: deserialize_pipelines_runtime_v1alpha1_ListRuntimesResponse,
  },
};

exports.RuntimeAPIServiceClient = grpc.makeGenericClientConstructor(RuntimeAPIServiceService);
