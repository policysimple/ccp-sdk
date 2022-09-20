// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var blockchain_network_v1alpha1_network_api_pb = require('../../../blockchain/network/v1alpha1/network_api_pb.js');
var blockchain_network_v1alpha1_network_pb = require('../../../blockchain/network/v1alpha1/network_pb.js');

function serialize_blockchain_network_v1alpha1_AddPeerToOrganizationRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.AddPeerToOrganizationRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.AddPeerToOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_AddPeerToOrganizationRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.AddPeerToOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_AddPeerToOrganizationResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.AddPeerToOrganizationResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.AddPeerToOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_AddPeerToOrganizationResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.AddPeerToOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_CreateChannelRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateChannelRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateChannelRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_CreateChannelResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateChannelResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateChannelResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateChannelResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_CreateNetworkDefaultRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateNetworkDefaultRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateNetworkDefaultRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateNetworkDefaultRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateNetworkDefaultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_CreateNetworkDefaultResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateNetworkDefaultResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateNetworkDefaultResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateNetworkDefaultResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateNetworkDefaultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_blockchain_network_v1alpha1_GetBlockchainsRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetBlockchainsRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetBlockchainsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetBlockchainsRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetBlockchainsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetBlockchainsResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetBlockchainsResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetBlockchainsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetBlockchainsResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetBlockchainsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  addPeerToOrganization: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/AddPeerToOrganization',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.AddPeerToOrganizationRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.AddPeerToOrganizationResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_AddPeerToOrganizationRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_AddPeerToOrganizationRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_AddPeerToOrganizationResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_AddPeerToOrganizationResponse,
  },
  createChannel: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/CreateChannel',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.CreateChannelRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.CreateChannelResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_CreateChannelRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_CreateChannelRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_CreateChannelResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_CreateChannelResponse,
  },
  getBlockchains: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchains',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.GetBlockchainsRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.GetBlockchainsResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_GetBlockchainsRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_GetBlockchainsRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_GetBlockchainsResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_GetBlockchainsResponse,
  },
  createNetworkDefault: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/CreateNetworkDefault',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.CreateNetworkDefaultRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.CreateNetworkDefaultResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_CreateNetworkDefaultRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_CreateNetworkDefaultRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_CreateNetworkDefaultResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_CreateNetworkDefaultResponse,
  },
};

exports.BlockchainAPIServiceClient = grpc.makeGenericClientConstructor(BlockchainAPIServiceService);
