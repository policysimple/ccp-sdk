// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var performance_autoscaling_v1alpha1_autoscaling_api_pb = require('../../../performance/autoscaling/v1alpha1/autoscaling_api_pb.js');
var performance_autoscaling_v1alpha1_autoscaling_pb = require('../../../performance/autoscaling/v1alpha1/autoscaling_pb.js');

function serialize_performance_autoscaling_v1alpha1_CreateAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.CreateAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.CreateAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_CreateAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.CreateAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_CreateAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.CreateAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.CreateAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_CreateAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.CreateAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.DeleteAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.DeleteAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.DeleteAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.DeleteAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.DeleteAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.DeleteAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_GetAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.GetAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.GetAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_GetAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.GetAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_GetAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.GetAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.GetAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_GetAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.GetAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_ListAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.ListAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.ListAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_ListAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.ListAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_ListAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.ListAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.ListAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_ListAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.ListAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.UpdateAutoscalingRequest)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.UpdateAutoscalingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.UpdateAutoscalingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse(arg) {
  if (!(arg instanceof performance_autoscaling_v1alpha1_autoscaling_api_pb.UpdateAutoscalingResponse)) {
    throw new Error('Expected argument of type performance.autoscaling.v1alpha1.UpdateAutoscalingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse(buffer_arg) {
  return performance_autoscaling_v1alpha1_autoscaling_api_pb.UpdateAutoscalingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutoscalingAPIServiceService = exports.AutoscalingAPIServiceService = {
  createAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAPIService/CreateAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_api_pb.CreateAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_api_pb.CreateAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_CreateAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_CreateAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_CreateAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_CreateAutoscalingResponse,
  },
  updateAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAPIService/UpdateAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_api_pb.UpdateAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_api_pb.UpdateAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_UpdateAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_UpdateAutoscalingResponse,
  },
  deleteAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAPIService/DeleteAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_api_pb.DeleteAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_api_pb.DeleteAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_DeleteAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_DeleteAutoscalingResponse,
  },
  getAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAPIService/GetAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_api_pb.GetAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_api_pb.GetAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_GetAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_GetAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_GetAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_GetAutoscalingResponse,
  },
  listAutoscaling: {
    path: '/performance.autoscaling.v1alpha1.AutoscalingAPIService/ListAutoscaling',
    requestStream: false,
    responseStream: false,
    requestType: performance_autoscaling_v1alpha1_autoscaling_api_pb.ListAutoscalingRequest,
    responseType: performance_autoscaling_v1alpha1_autoscaling_api_pb.ListAutoscalingResponse,
    requestSerialize: serialize_performance_autoscaling_v1alpha1_ListAutoscalingRequest,
    requestDeserialize: deserialize_performance_autoscaling_v1alpha1_ListAutoscalingRequest,
    responseSerialize: serialize_performance_autoscaling_v1alpha1_ListAutoscalingResponse,
    responseDeserialize: deserialize_performance_autoscaling_v1alpha1_ListAutoscalingResponse,
  },
};

exports.AutoscalingAPIServiceClient = grpc.makeGenericClientConstructor(AutoscalingAPIServiceService);
