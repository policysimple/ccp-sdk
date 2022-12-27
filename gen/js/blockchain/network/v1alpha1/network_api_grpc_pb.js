// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var blockchain_network_v1alpha1_network_api_pb = require('../../../blockchain/network/v1alpha1/network_api_pb.js');
var blockchain_network_v1alpha1_network_pb = require('../../../blockchain/network/v1alpha1/network_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_blockchain_network_v1alpha1_AddOrdererByNetworkIdRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.AddOrdererByNetworkIdRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.AddOrdererByNetworkIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_AddOrdererByNetworkIdRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.AddOrdererByNetworkIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_AddOrdererByNetworkIdResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.AddOrdererByNetworkIdResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.AddOrdererByNetworkIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_AddOrdererByNetworkIdResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.AddOrdererByNetworkIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_AddPeerToCorporationRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.AddPeerToCorporationRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.AddPeerToCorporationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_AddPeerToCorporationRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.AddPeerToCorporationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_AddPeerToCorporationResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.AddPeerToCorporationResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.AddPeerToCorporationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_AddPeerToCorporationResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.AddPeerToCorporationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_blockchain_network_v1alpha1_CreateCorporationRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateCorporationRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateCorporationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateCorporationRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateCorporationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_CreateCorporationResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.CreateCorporationResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.CreateCorporationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_CreateCorporationResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.CreateCorporationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_blockchain_network_v1alpha1_GetBlockchainByIdRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetBlockchainByIdRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetBlockchainByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetBlockchainByIdRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetBlockchainByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetBlockchainByIdResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetBlockchainByIdResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetBlockchainByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetBlockchainByIdResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetBlockchainByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetBlockchainsByUserIdRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetBlockchainsByUserIdRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetBlockchainsByUserIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetBlockchainsByUserIdRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetBlockchainsByUserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetBlockchainsByUserIdResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetBlockchainsByUserIdResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetBlockchainsByUserIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetBlockchainsByUserIdResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetBlockchainsByUserIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_blockchain_network_v1alpha1_GetCorporationsByBlockchainIdRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetCorporationsByBlockchainIdRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetCorporationsByBlockchainIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetCorporationsByBlockchainIdRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetCorporationsByBlockchainIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetCorporationsByBlockchainIdResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetCorporationsByBlockchainIdResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetCorporationsByBlockchainIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetCorporationsByBlockchainIdResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetCorporationsByBlockchainIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetOrdererByNetworkIdRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetOrdererByNetworkIdRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetOrdererByNetworkIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetOrdererByNetworkIdRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetOrdererByNetworkIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetOrdererByNetworkIdResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetOrdererByNetworkIdResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetOrdererByNetworkIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetOrdererByNetworkIdResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetOrdererByNetworkIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetPeersByCorporationIdRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetPeersByCorporationIdRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetPeersByCorporationIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetPeersByCorporationIdRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetPeersByCorporationIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetPeersByCorporationIdResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetPeersByCorporationIdResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetPeersByCorporationIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetPeersByCorporationIdResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetPeersByCorporationIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  addPeerToCorporation: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/AddPeerToCorporation',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.AddPeerToCorporationRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.AddPeerToCorporationResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_AddPeerToCorporationRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_AddPeerToCorporationRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_AddPeerToCorporationResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_AddPeerToCorporationResponse,
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
  getBlockchainsByUserId: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchainsByUserId',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.GetBlockchainsByUserIdRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.GetBlockchainsByUserIdResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_GetBlockchainsByUserIdRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_GetBlockchainsByUserIdRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_GetBlockchainsByUserIdResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_GetBlockchainsByUserIdResponse,
  },
  getBlockchainById: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/GetBlockchainById',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.GetBlockchainByIdRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.GetBlockchainByIdResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_GetBlockchainByIdRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_GetBlockchainByIdRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_GetBlockchainByIdResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_GetBlockchainByIdResponse,
  },
  getCorporationsByBlockchainId: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/GetCorporationsByBlockchainId',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.GetCorporationsByBlockchainIdRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.GetCorporationsByBlockchainIdResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_GetCorporationsByBlockchainIdRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_GetCorporationsByBlockchainIdRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_GetCorporationsByBlockchainIdResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_GetCorporationsByBlockchainIdResponse,
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
  createCorporation: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/CreateCorporation',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.CreateCorporationRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.CreateCorporationResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_CreateCorporationRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_CreateCorporationRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_CreateCorporationResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_CreateCorporationResponse,
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
  getPeersByCorporationId: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/GetPeersByCorporationId',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.GetPeersByCorporationIdRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.GetPeersByCorporationIdResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_GetPeersByCorporationIdRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_GetPeersByCorporationIdRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_GetPeersByCorporationIdResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_GetPeersByCorporationIdResponse,
  },
  getOrdererByNetworkId: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/GetOrdererByNetworkId',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.GetOrdererByNetworkIdRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.GetOrdererByNetworkIdResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_GetOrdererByNetworkIdRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_GetOrdererByNetworkIdRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_GetOrdererByNetworkIdResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_GetOrdererByNetworkIdResponse,
  },
  addOrdererByNetworkId: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/AddOrdererByNetworkId',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.AddOrdererByNetworkIdRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.AddOrdererByNetworkIdResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_AddOrdererByNetworkIdRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_AddOrdererByNetworkIdRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_AddOrdererByNetworkIdResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_AddOrdererByNetworkIdResponse,
  },
};

exports.BlockchainAPIServiceClient = grpc.makeGenericClientConstructor(BlockchainAPIServiceService);
