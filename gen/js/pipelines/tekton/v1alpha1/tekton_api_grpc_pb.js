// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pipelines_tekton_v1alpha1_tekton_api_pb = require('../../../pipelines/tekton/v1alpha1/tekton_api_pb.js');
var pipelines_tekton_v1alpha1_tekton_pb = require('../../../pipelines/tekton/v1alpha1/tekton_pb.js');

function serialize_pipelines_tekton_v1alpha1_CreateTektonPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.CreateTektonPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_CreateTektonPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_CreateTektonPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.CreateTektonPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_CreateTektonPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.DeleteTektonPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.DeleteTektonPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetOneTektonPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetOneTektonPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetOneTektonPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetOneTektonPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetOneTektonPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.GetOneTektonPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.GetOneTektonPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.GetOneTektonPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListTektonPipelineRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonPipelineRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListTektonPipelineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListTektonPipelineRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonPipelineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListTektonPipelineResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonPipelineResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListTektonPipelineResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListTektonPipelineResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonPipelineResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListTektonTaskRequest(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskRequest)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListTektonTaskRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListTektonTaskRequest(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pipelines_tekton_v1alpha1_ListTektonTaskResponse(arg) {
  if (!(arg instanceof pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskResponse)) {
    throw new Error('Expected argument of type pipelines.tekton.v1alpha1.ListTektonTaskResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pipelines_tekton_v1alpha1_ListTektonTaskResponse(buffer_arg) {
  return pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TektonPipelineAPIServiceService = exports.TektonPipelineAPIServiceService = {
  createTektonPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/CreateTektonPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.CreateTektonPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_CreateTektonPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_CreateTektonPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_CreateTektonPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_CreateTektonPipelineResponse,
  },
  getOneTektonPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/GetOneTektonPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.GetOneTektonPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.GetOneTektonPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_GetOneTektonPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_GetOneTektonPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_GetOneTektonPipelineResponse,
  },
  listTektonPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListTektonPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_ListTektonPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_ListTektonPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_ListTektonPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_ListTektonPipelineResponse,
  },
  deleteTektonPipeline: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/DeleteTektonPipeline',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.DeleteTektonPipelineResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_DeleteTektonPipelineResponse,
  },
  listTektonTask: {
    path: '/pipelines.tekton.v1alpha1.TektonPipelineAPIService/ListTektonTask',
    requestStream: false,
    responseStream: false,
    requestType: pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskRequest,
    responseType: pipelines_tekton_v1alpha1_tekton_api_pb.ListTektonTaskResponse,
    requestSerialize: serialize_pipelines_tekton_v1alpha1_ListTektonTaskRequest,
    requestDeserialize: deserialize_pipelines_tekton_v1alpha1_ListTektonTaskRequest,
    responseSerialize: serialize_pipelines_tekton_v1alpha1_ListTektonTaskResponse,
    responseDeserialize: deserialize_pipelines_tekton_v1alpha1_ListTektonTaskResponse,
  },
};

exports.TektonPipelineAPIServiceClient = grpc.makeGenericClientConstructor(TektonPipelineAPIServiceService);
