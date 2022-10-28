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

function serialize_blockchain_network_v1alpha1_GetOrganizationsByBlockchainIdRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetOrganizationsByBlockchainIdRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetOrganizationsByBlockchainIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetOrganizationsByBlockchainIdRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetOrganizationsByBlockchainIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetOrganizationsByBlockchainIdResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetOrganizationsByBlockchainIdResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetOrganizationsByBlockchainIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetOrganizationsByBlockchainIdResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetOrganizationsByBlockchainIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetPeersByOrganizationIdRequest(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetPeersByOrganizationIdRequest)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetPeersByOrganizationIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetPeersByOrganizationIdRequest(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetPeersByOrganizationIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_network_v1alpha1_GetPeersByOrganizationIdResponse(arg) {
  if (!(arg instanceof blockchain_network_v1alpha1_network_api_pb.GetPeersByOrganizationIdResponse)) {
    throw new Error('Expected argument of type blockchain.network.v1alpha1.GetPeersByOrganizationIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_network_v1alpha1_GetPeersByOrganizationIdResponse(buffer_arg) {
  return blockchain_network_v1alpha1_network_api_pb.GetPeersByOrganizationIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  getOrganizationsByBlockchainId: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/GetOrganizationsByBlockchainId',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.GetOrganizationsByBlockchainIdRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.GetOrganizationsByBlockchainIdResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_GetOrganizationsByBlockchainIdRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_GetOrganizationsByBlockchainIdRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_GetOrganizationsByBlockchainIdResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_GetOrganizationsByBlockchainIdResponse,
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
  getPeersByOrganizationId: {
    path: '/blockchain.network.v1alpha1.BlockchainAPIService/GetPeersByOrganizationId',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_network_v1alpha1_network_api_pb.GetPeersByOrganizationIdRequest,
    responseType: blockchain_network_v1alpha1_network_api_pb.GetPeersByOrganizationIdResponse,
    requestSerialize: serialize_blockchain_network_v1alpha1_GetPeersByOrganizationIdRequest,
    requestDeserialize: deserialize_blockchain_network_v1alpha1_GetPeersByOrganizationIdRequest,
    responseSerialize: serialize_blockchain_network_v1alpha1_GetPeersByOrganizationIdResponse,
    responseDeserialize: deserialize_blockchain_network_v1alpha1_GetPeersByOrganizationIdResponse,
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
