// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var blockchain_thepower_v1alpha1_thepower_api_pb = require('../../../blockchain/thepower/v1alpha1/thepower_api_pb.js');
var blockchain_thepower_v1alpha1_thepower_pb = require('../../../blockchain/thepower/v1alpha1/thepower_pb.js');

function serialize_blockchain_thepower_v1alpha1_CreateTpChainRequest(arg) {
  if (!(arg instanceof blockchain_thepower_v1alpha1_thepower_api_pb.CreateTpChainRequest)) {
    throw new Error('Expected argument of type blockchain.thepower.v1alpha1.CreateTpChainRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_thepower_v1alpha1_CreateTpChainRequest(buffer_arg) {
  return blockchain_thepower_v1alpha1_thepower_api_pb.CreateTpChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_thepower_v1alpha1_CreateTpChainResponse(arg) {
  if (!(arg instanceof blockchain_thepower_v1alpha1_thepower_api_pb.CreateTpChainResponse)) {
    throw new Error('Expected argument of type blockchain.thepower.v1alpha1.CreateTpChainResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_thepower_v1alpha1_CreateTpChainResponse(buffer_arg) {
  return blockchain_thepower_v1alpha1_thepower_api_pb.CreateTpChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlockchainThePowerServiceService = exports.BlockchainThePowerServiceService = {
  createTpChain: {
    path: '/blockchain.thepower.v1alpha1.BlockchainThePowerService/CreateTpChain',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_thepower_v1alpha1_thepower_api_pb.CreateTpChainRequest,
    responseType: blockchain_thepower_v1alpha1_thepower_api_pb.CreateTpChainResponse,
    requestSerialize: serialize_blockchain_thepower_v1alpha1_CreateTpChainRequest,
    requestDeserialize: deserialize_blockchain_thepower_v1alpha1_CreateTpChainRequest,
    responseSerialize: serialize_blockchain_thepower_v1alpha1_CreateTpChainResponse,
    responseDeserialize: deserialize_blockchain_thepower_v1alpha1_CreateTpChainResponse,
  },
};

exports.BlockchainThePowerServiceClient = grpc.makeGenericClientConstructor(BlockchainThePowerServiceService);
