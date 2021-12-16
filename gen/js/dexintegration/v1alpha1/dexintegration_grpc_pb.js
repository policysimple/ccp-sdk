// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dexintegration_v1alpha1_dexintegration_pb = require('../../dexintegration/v1alpha1/dexintegration_pb.js');

function serialize_dexintegration_v1alpha1_GetListUserDexRequest(arg) {
  if (!(arg instanceof dexintegration_v1alpha1_dexintegration_pb.GetListUserDexRequest)) {
    throw new Error('Expected argument of type dexintegration.v1alpha1.GetListUserDexRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dexintegration_v1alpha1_GetListUserDexRequest(buffer_arg) {
  return dexintegration_v1alpha1_dexintegration_pb.GetListUserDexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dexintegration_v1alpha1_GetListUserDexResponse(arg) {
  if (!(arg instanceof dexintegration_v1alpha1_dexintegration_pb.GetListUserDexResponse)) {
    throw new Error('Expected argument of type dexintegration.v1alpha1.GetListUserDexResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dexintegration_v1alpha1_GetListUserDexResponse(buffer_arg) {
  return dexintegration_v1alpha1_dexintegration_pb.GetListUserDexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DexIntegrationServiceService = exports.DexIntegrationServiceService = {
  // Get Users Dex
  getListUserDex: {
    path: '/dexintegration.v1alpha1.DexIntegrationService/GetListUserDex',
    requestStream: false,
    responseStream: false,
    requestType: dexintegration_v1alpha1_dexintegration_pb.GetListUserDexRequest,
    responseType: dexintegration_v1alpha1_dexintegration_pb.GetListUserDexResponse,
    requestSerialize: serialize_dexintegration_v1alpha1_GetListUserDexRequest,
    requestDeserialize: deserialize_dexintegration_v1alpha1_GetListUserDexRequest,
    responseSerialize: serialize_dexintegration_v1alpha1_GetListUserDexResponse,
    responseDeserialize: deserialize_dexintegration_v1alpha1_GetListUserDexResponse,
  },
};

exports.DexIntegrationServiceClient = grpc.makeGenericClientConstructor(DexIntegrationServiceService);
