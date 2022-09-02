// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var blockchain_network_v1alpha1_network_api_pb = require('../../../blockchain/network/v1alpha1/network_api_pb.js');
var blockchain_network_v1alpha1_network_pb = require('../../../blockchain/network/v1alpha1/network_pb.js');

function serialize_blockchain_network_v1alpha1_CreateNetworkRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateNetworkRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateNetworkRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateNetworkRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_CreateNetworkResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateNetworkResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateNetworkResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateNetworkResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateNetworkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlockchainAPIServiceService = exports.BlockchainAPIServiceService = {
  createNetwork: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/CreateNetwork',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.CreateNetworkRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.CreateNetworkResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_CreateNetworkRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_CreateNetworkRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_CreateNetworkResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_CreateNetworkResponse,
  },
};

exports.BlockchainAPIServiceClient = grpc.makeGenericClientConstructor(BlockchainAPIServiceService);
