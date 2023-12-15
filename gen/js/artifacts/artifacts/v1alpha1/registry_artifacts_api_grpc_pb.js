// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var artifacts_artifacts_v1alpha1_registry_artifacts_api_pb = require('../../../artifacts/artifacts/v1alpha1/registry_artifacts_api_pb.js');
var artifacts_artifacts_v1alpha1_registry_artifacts_pb = require('../../../artifacts/artifacts/v1alpha1/registry_artifacts_pb.js');

function serialize_artifacts_artifacts_v1alpha1_AddLabelArtifactsRegistryRequest(arg) {
  if (!(arg instanceof artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.AddLabelArtifactsRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.artifacts.v1alpha1.AddLabelArtifactsRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_artifacts_v1alpha1_AddLabelArtifactsRegistryRequest(buffer_arg) {
  return artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.AddLabelArtifactsRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_artifacts_v1alpha1_AddLabelArtifactsRegistryResponse(arg) {
  if (!(arg instanceof artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.AddLabelArtifactsRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.artifacts.v1alpha1.AddLabelArtifactsRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_artifacts_v1alpha1_AddLabelArtifactsRegistryResponse(buffer_arg) {
  return artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.AddLabelArtifactsRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_artifacts_v1alpha1_CreateLabelArtifactsRegistryRequest(arg) {
  if (!(arg instanceof artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.CreateLabelArtifactsRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.artifacts.v1alpha1.CreateLabelArtifactsRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_artifacts_v1alpha1_CreateLabelArtifactsRegistryRequest(buffer_arg) {
  return artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.CreateLabelArtifactsRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_artifacts_v1alpha1_CreateLabelArtifactsRegistryResponse(arg) {
  if (!(arg instanceof artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.CreateLabelArtifactsRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.artifacts.v1alpha1.CreateLabelArtifactsRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_artifacts_v1alpha1_CreateLabelArtifactsRegistryResponse(buffer_arg) {
  return artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.CreateLabelArtifactsRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_artifacts_v1alpha1_ListArtifactsRegistryRequest(arg) {
  if (!(arg instanceof artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.ListArtifactsRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.artifacts.v1alpha1.ListArtifactsRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_artifacts_v1alpha1_ListArtifactsRegistryRequest(buffer_arg) {
  return artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.ListArtifactsRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_artifacts_v1alpha1_ListArtifactsRegistryResponse(arg) {
  if (!(arg instanceof artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.ListArtifactsRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.artifacts.v1alpha1.ListArtifactsRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_artifacts_v1alpha1_ListArtifactsRegistryResponse(buffer_arg) {
  return artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.ListArtifactsRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RegistryArtifactsAPIServiceService = exports.RegistryArtifactsAPIServiceService = {
  listArtifactsRegistry: {
    path: '/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/ListArtifactsRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.ListArtifactsRegistryRequest,
    responseType: artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.ListArtifactsRegistryResponse,
    requestSerialize: serialize_artifacts_artifacts_v1alpha1_ListArtifactsRegistryRequest,
    requestDeserialize: deserialize_artifacts_artifacts_v1alpha1_ListArtifactsRegistryRequest,
    responseSerialize: serialize_artifacts_artifacts_v1alpha1_ListArtifactsRegistryResponse,
    responseDeserialize: deserialize_artifacts_artifacts_v1alpha1_ListArtifactsRegistryResponse,
  },
  createLabelArtifactsRegistry: {
    path: '/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/CreateLabelArtifactsRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.CreateLabelArtifactsRegistryRequest,
    responseType: artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.CreateLabelArtifactsRegistryResponse,
    requestSerialize: serialize_artifacts_artifacts_v1alpha1_CreateLabelArtifactsRegistryRequest,
    requestDeserialize: deserialize_artifacts_artifacts_v1alpha1_CreateLabelArtifactsRegistryRequest,
    responseSerialize: serialize_artifacts_artifacts_v1alpha1_CreateLabelArtifactsRegistryResponse,
    responseDeserialize: deserialize_artifacts_artifacts_v1alpha1_CreateLabelArtifactsRegistryResponse,
  },
  addLabelArtifactsRegistry: {
    path: '/artifacts.artifacts.v1alpha1.RegistryArtifactsAPIService/AddLabelArtifactsRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.AddLabelArtifactsRegistryRequest,
    responseType: artifacts_artifacts_v1alpha1_registry_artifacts_api_pb.AddLabelArtifactsRegistryResponse,
    requestSerialize: serialize_artifacts_artifacts_v1alpha1_AddLabelArtifactsRegistryRequest,
    requestDeserialize: deserialize_artifacts_artifacts_v1alpha1_AddLabelArtifactsRegistryRequest,
    responseSerialize: serialize_artifacts_artifacts_v1alpha1_AddLabelArtifactsRegistryResponse,
    responseDeserialize: deserialize_artifacts_artifacts_v1alpha1_AddLabelArtifactsRegistryResponse,
  },
};

exports.RegistryArtifactsAPIServiceClient = grpc.makeGenericClientConstructor(RegistryArtifactsAPIServiceService);
