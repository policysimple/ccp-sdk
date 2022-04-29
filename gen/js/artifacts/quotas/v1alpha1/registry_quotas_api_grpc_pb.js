// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var artifacts_quotas_v1alpha1_registry_quotas_api_pb = require('../../../artifacts/quotas/v1alpha1/registry_quotas_api_pb.js');
var artifacts_quotas_v1alpha1_registry_quotas_pb = require('../../../artifacts/quotas/v1alpha1/registry_quotas_pb.js');

function serialize_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest(arg) {
  if (!(arg instanceof artifacts_quotas_v1alpha1_registry_quotas_api_pb.ListQuotasRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.quotas.v1alpha1.ListQuotasRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest(buffer_arg) {
  return artifacts_quotas_v1alpha1_registry_quotas_api_pb.ListQuotasRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse(arg) {
  if (!(arg instanceof artifacts_quotas_v1alpha1_registry_quotas_api_pb.ListQuotasRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.quotas.v1alpha1.ListQuotasRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse(buffer_arg) {
  return artifacts_quotas_v1alpha1_registry_quotas_api_pb.ListQuotasRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest(arg) {
  if (!(arg instanceof artifacts_quotas_v1alpha1_registry_quotas_api_pb.UpdateQuotaRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.quotas.v1alpha1.UpdateQuotaRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest(buffer_arg) {
  return artifacts_quotas_v1alpha1_registry_quotas_api_pb.UpdateQuotaRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse(arg) {
  if (!(arg instanceof artifacts_quotas_v1alpha1_registry_quotas_api_pb.UpdateQuotaRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.quotas.v1alpha1.UpdateQuotaRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse(buffer_arg) {
  return artifacts_quotas_v1alpha1_registry_quotas_api_pb.UpdateQuotaRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RegistryQuotasAPIServiceService = exports.RegistryQuotasAPIServiceService = {
  listQuotasRegistry: {
    path: '/artifacts.quotas.v1alpha1.RegistryQuotasAPIService/ListQuotasRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_quotas_v1alpha1_registry_quotas_api_pb.ListQuotasRegistryRequest,
    responseType: artifacts_quotas_v1alpha1_registry_quotas_api_pb.ListQuotasRegistryResponse,
    requestSerialize: serialize_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest,
    requestDeserialize: deserialize_artifacts_quotas_v1alpha1_ListQuotasRegistryRequest,
    responseSerialize: serialize_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse,
    responseDeserialize: deserialize_artifacts_quotas_v1alpha1_ListQuotasRegistryResponse,
  },
  updateQuotaRegistry: {
    path: '/artifacts.quotas.v1alpha1.RegistryQuotasAPIService/UpdateQuotaRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_quotas_v1alpha1_registry_quotas_api_pb.UpdateQuotaRegistryRequest,
    responseType: artifacts_quotas_v1alpha1_registry_quotas_api_pb.UpdateQuotaRegistryResponse,
    requestSerialize: serialize_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest,
    requestDeserialize: deserialize_artifacts_quotas_v1alpha1_UpdateQuotaRegistryRequest,
    responseSerialize: serialize_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse,
    responseDeserialize: deserialize_artifacts_quotas_v1alpha1_UpdateQuotaRegistryResponse,
  },
};

exports.RegistryQuotasAPIServiceClient = grpc.makeGenericClientConstructor(RegistryQuotasAPIServiceService);
