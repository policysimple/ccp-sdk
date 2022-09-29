// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var blockchain_thepower_v1alpha1_thepower_api_pb = require('../../../blockchain/thepower/v1alpha1/thepower_api_pb.js');
var blockchain_thepower_v1alpha1_thepower_pb = require('../../../blockchain/thepower/v1alpha1/thepower_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

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

function serialize_blockchain_thepower_v1alpha1_GetTpChainByIdRequest(arg) {
  if (!(arg instanceof blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainByIdRequest)) {
    throw new Error('Expected argument of type blockchain.thepower.v1alpha1.GetTpChainByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_thepower_v1alpha1_GetTpChainByIdRequest(buffer_arg) {
  return blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_thepower_v1alpha1_GetTpChainByIdResponse(arg) {
  if (!(arg instanceof blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainByIdResponse)) {
    throw new Error('Expected argument of type blockchain.thepower.v1alpha1.GetTpChainByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_thepower_v1alpha1_GetTpChainByIdResponse(buffer_arg) {
  return blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_thepower_v1alpha1_GetTpChainsByUserIdRequest(arg) {
  if (!(arg instanceof blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainsByUserIdRequest)) {
    throw new Error('Expected argument of type blockchain.thepower.v1alpha1.GetTpChainsByUserIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_thepower_v1alpha1_GetTpChainsByUserIdRequest(buffer_arg) {
  return blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainsByUserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_thepower_v1alpha1_GetTpChainsByUserIdResponse(arg) {
  if (!(arg instanceof blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainsByUserIdResponse)) {
    throw new Error('Expected argument of type blockchain.thepower.v1alpha1.GetTpChainsByUserIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_thepower_v1alpha1_GetTpChainsByUserIdResponse(buffer_arg) {
  return blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainsByUserIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // rpc GetTpChains (google.protobuf.Empty) returns (GetTpChainsResponse);
  getTpChainsByUserId: {
    path: '/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChainsByUserId',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainsByUserIdRequest,
    responseType: blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainsByUserIdResponse,
    requestSerialize: serialize_blockchain_thepower_v1alpha1_GetTpChainsByUserIdRequest,
    requestDeserialize: deserialize_blockchain_thepower_v1alpha1_GetTpChainsByUserIdRequest,
    responseSerialize: serialize_blockchain_thepower_v1alpha1_GetTpChainsByUserIdResponse,
    responseDeserialize: deserialize_blockchain_thepower_v1alpha1_GetTpChainsByUserIdResponse,
  },
  getTpChainById: {
    path: '/blockchain.thepower.v1alpha1.BlockchainThePowerService/GetTpChainById',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainByIdRequest,
    responseType: blockchain_thepower_v1alpha1_thepower_api_pb.GetTpChainByIdResponse,
    requestSerialize: serialize_blockchain_thepower_v1alpha1_GetTpChainByIdRequest,
    requestDeserialize: deserialize_blockchain_thepower_v1alpha1_GetTpChainByIdRequest,
    responseSerialize: serialize_blockchain_thepower_v1alpha1_GetTpChainByIdResponse,
    responseDeserialize: deserialize_blockchain_thepower_v1alpha1_GetTpChainByIdResponse,
  },
};

exports.BlockchainThePowerServiceClient = grpc.makeGenericClientConstructor(BlockchainThePowerServiceService);
