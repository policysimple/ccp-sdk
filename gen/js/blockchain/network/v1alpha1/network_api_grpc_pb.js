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

function serialize_blockchain_network_v1alpha1_CreateOrganizationRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateOrganizationRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_CreateOrganizationResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateOrganizationResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_blockchain_network_v1alpha1_SendInvitationRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.SendInvitationRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.SendInvitationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_SendInvitationRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.SendInvitationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_SendInvitationResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.SendInvitationResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.SendInvitationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_SendInvitationResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.SendInvitationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  createOrganization: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.CreateOrganizationRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.CreateOrganizationResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_CreateOrganizationRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_CreateOrganizationRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_CreateOrganizationResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_CreateOrganizationResponse,
  },
  sendInvitation: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/SendInvitation',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.SendInvitationRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.SendInvitationResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_SendInvitationRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_SendInvitationRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_SendInvitationResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_SendInvitationResponse,
  },
};

exports.BlockchainAPIServiceClient = grpc.makeGenericClientConstructor(BlockchainAPIServiceService);
