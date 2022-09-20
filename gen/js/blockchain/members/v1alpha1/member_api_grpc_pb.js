// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var blockchain_members_v1alpha1_member_api_pb = require('../../../blockchain/members/v1alpha1/member_api_pb.js');
var blockchain_members_v1alpha1_member_pb = require('../../../blockchain/members/v1alpha1/member_pb.js');

function serialize_blockchain_members_v1alpha1_CreateInvitationRequest(arg) {
  if (!(arg instanceof blockchain_members_v1alpha1_member_api_pb.CreateInvitationRequest)) {
    throw new Error('Expected argument of type blockchain.members.v1alpha1.CreateInvitationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_members_v1alpha1_CreateInvitationRequest(buffer_arg) {
  return blockchain_members_v1alpha1_member_api_pb.CreateInvitationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_members_v1alpha1_CreateInvitationResponse(arg) {
  if (!(arg instanceof blockchain_members_v1alpha1_member_api_pb.CreateInvitationResponse)) {
    throw new Error('Expected argument of type blockchain.members.v1alpha1.CreateInvitationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_members_v1alpha1_CreateInvitationResponse(buffer_arg) {
  return blockchain_members_v1alpha1_member_api_pb.CreateInvitationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_members_v1alpha1_CreateOrganizationRequest(arg) {
  if (!(arg instanceof blockchain_members_v1alpha1_member_api_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type blockchain.members.v1alpha1.CreateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_members_v1alpha1_CreateOrganizationRequest(buffer_arg) {
  return blockchain_members_v1alpha1_member_api_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockchain_members_v1alpha1_CreateOrganizationResponse(arg) {
  if (!(arg instanceof blockchain_members_v1alpha1_member_api_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type blockchain.members.v1alpha1.CreateOrganizationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_blockchain_members_v1alpha1_CreateOrganizationResponse(buffer_arg) {
  return blockchain_members_v1alpha1_member_api_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlockchainInvitationAPIServiceService = exports.BlockchainInvitationAPIServiceService = {
  createOrganization: {
    path: '/blockchain.members.v1alpha1.BlockchainInvitationAPIService/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_members_v1alpha1_member_api_pb.CreateOrganizationRequest,
    responseType: blockchain_members_v1alpha1_member_api_pb.CreateOrganizationResponse,
    requestSerialize: serialize_blockchain_members_v1alpha1_CreateOrganizationRequest,
    requestDeserialize: deserialize_blockchain_members_v1alpha1_CreateOrganizationRequest,
    responseSerialize: serialize_blockchain_members_v1alpha1_CreateOrganizationResponse,
    responseDeserialize: deserialize_blockchain_members_v1alpha1_CreateOrganizationResponse,
  },
  createInvitation: {
    path: '/blockchain.members.v1alpha1.BlockchainInvitationAPIService/CreateInvitation',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_members_v1alpha1_member_api_pb.CreateInvitationRequest,
    responseType: blockchain_members_v1alpha1_member_api_pb.CreateInvitationResponse,
    requestSerialize: serialize_blockchain_members_v1alpha1_CreateInvitationRequest,
    requestDeserialize: deserialize_blockchain_members_v1alpha1_CreateInvitationRequest,
    responseSerialize: serialize_blockchain_members_v1alpha1_CreateInvitationResponse,
    responseDeserialize: deserialize_blockchain_members_v1alpha1_CreateInvitationResponse,
  },
};

exports.BlockchainInvitationAPIServiceClient = grpc.makeGenericClientConstructor(BlockchainInvitationAPIServiceService);
