// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_invitations_invitations_pb = require('../../../accounts/v1alpha1/invitations/invitations_pb.js');

function serialize_accounts_v1alpha1_invitations_v1_AgreeInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.AgreeInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.AgreeInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_AgreeInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.AgreeInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_AgreeInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.AgreeInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.AgreeInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_AgreeInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.AgreeInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_DeleteInvitationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.DeleteInvitationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.DeleteInvitationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_DeleteInvitationRequest(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.DeleteInvitationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_DeleteInvitationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.DeleteInvitationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.DeleteInvitationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_DeleteInvitationResponse(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.DeleteInvitationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_GetInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.GetInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.GetInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_GetInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.GetInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_GetInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.GetInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.GetInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_GetInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.GetInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_ListInvitationSendRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.ListInvitationSendRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.ListInvitationSendRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_ListInvitationSendRequest(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.ListInvitationSendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_ListInvitationSendResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.ListInvitationSendResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.ListInvitationSendResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_ListInvitationSendResponse(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.ListInvitationSendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_ReactivateInvitationRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.ReactivateInvitationRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.ReactivateInvitationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_ReactivateInvitationRequest(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.ReactivateInvitationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_ReactivateInvitationResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.ReactivateInvitationResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.ReactivateInvitationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_ReactivateInvitationResponse(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.ReactivateInvitationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_SendInvitationUserRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.SendInvitationUserRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.SendInvitationUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_SendInvitationUserRequest(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.SendInvitationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_invitations_v1_SendInvitationUserResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_invitations_invitations_pb.SendInvitationUserResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.invitations.v1.SendInvitationUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_invitations_v1_SendInvitationUserResponse(buffer_arg) {
  return accounts_v1alpha1_invitations_invitations_pb.SendInvitationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InvitationServiceService = exports.InvitationServiceService = {
  // invitation
  sendInvitationUser: {
    path: '/accounts.v1alpha1.invitations.v1.InvitationService/SendInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_invitations_invitations_pb.SendInvitationUserRequest,
    responseType: accounts_v1alpha1_invitations_invitations_pb.SendInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_invitations_v1_SendInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_invitations_v1_SendInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_invitations_v1_SendInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_invitations_v1_SendInvitationUserResponse,
  },
  getInvitationUser: {
    path: '/accounts.v1alpha1.invitations.v1.InvitationService/GetInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_invitations_invitations_pb.GetInvitationUserRequest,
    responseType: accounts_v1alpha1_invitations_invitations_pb.GetInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_invitations_v1_GetInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_invitations_v1_GetInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_invitations_v1_GetInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_invitations_v1_GetInvitationUserResponse,
  },
  agreeInvitationUser: {
    path: '/accounts.v1alpha1.invitations.v1.InvitationService/AgreeInvitationUser',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_invitations_invitations_pb.AgreeInvitationUserRequest,
    responseType: accounts_v1alpha1_invitations_invitations_pb.AgreeInvitationUserResponse,
    requestSerialize: serialize_accounts_v1alpha1_invitations_v1_AgreeInvitationUserRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_invitations_v1_AgreeInvitationUserRequest,
    responseSerialize: serialize_accounts_v1alpha1_invitations_v1_AgreeInvitationUserResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_invitations_v1_AgreeInvitationUserResponse,
  },
  listInvitationSend: {
    path: '/accounts.v1alpha1.invitations.v1.InvitationService/ListInvitationSend',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_invitations_invitations_pb.ListInvitationSendRequest,
    responseType: accounts_v1alpha1_invitations_invitations_pb.ListInvitationSendResponse,
    requestSerialize: serialize_accounts_v1alpha1_invitations_v1_ListInvitationSendRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_invitations_v1_ListInvitationSendRequest,
    responseSerialize: serialize_accounts_v1alpha1_invitations_v1_ListInvitationSendResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_invitations_v1_ListInvitationSendResponse,
  },
  deleteInvitation: {
    path: '/accounts.v1alpha1.invitations.v1.InvitationService/DeleteInvitation',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_invitations_invitations_pb.DeleteInvitationRequest,
    responseType: accounts_v1alpha1_invitations_invitations_pb.DeleteInvitationResponse,
    requestSerialize: serialize_accounts_v1alpha1_invitations_v1_DeleteInvitationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_invitations_v1_DeleteInvitationRequest,
    responseSerialize: serialize_accounts_v1alpha1_invitations_v1_DeleteInvitationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_invitations_v1_DeleteInvitationResponse,
  },
  reactivateInvitation: {
    path: '/accounts.v1alpha1.invitations.v1.InvitationService/ReactivateInvitation',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_invitations_invitations_pb.ReactivateInvitationRequest,
    responseType: accounts_v1alpha1_invitations_invitations_pb.ReactivateInvitationResponse,
    requestSerialize: serialize_accounts_v1alpha1_invitations_v1_ReactivateInvitationRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_invitations_v1_ReactivateInvitationRequest,
    responseSerialize: serialize_accounts_v1alpha1_invitations_v1_ReactivateInvitationResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_invitations_v1_ReactivateInvitationResponse,
  },
};

exports.InvitationServiceClient = grpc.makeGenericClientConstructor(InvitationServiceService);
