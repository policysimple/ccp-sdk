// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_tokens_tokens_pb = require('../../../accounts/v1alpha1/tokens/tokens_pb.js');

function serialize_accounts_v1alpha1_tokens_v1_CreateTokenCCPRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.CreateTokenCCPRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.CreateTokenCCPRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_CreateTokenCCPRequest(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.CreateTokenCCPRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_CreateTokenCCPResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.CreateTokenCCPResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.CreateTokenCCPResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_CreateTokenCCPResponse(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.CreateTokenCCPResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_EnableOrDisableMFARequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.EnableOrDisableMFARequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.EnableOrDisableMFARequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_EnableOrDisableMFARequest(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.EnableOrDisableMFARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_EnableOrDisableMFAResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.EnableOrDisableMFAResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.EnableOrDisableMFAResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_EnableOrDisableMFAResponse(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.EnableOrDisableMFAResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_GetOneTokenCCPRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.GetOneTokenCCPRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.GetOneTokenCCPRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_GetOneTokenCCPRequest(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.GetOneTokenCCPRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_GetOneTokenCCPResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.GetOneTokenCCPResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.GetOneTokenCCPResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_GetOneTokenCCPResponse(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.GetOneTokenCCPResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_LogsRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.LogsRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.LogsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_LogsRequest(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.LogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_LogsResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.LogsResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.LogsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_LogsResponse(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.LogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_MFARequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.MFARequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.MFARequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_MFARequest(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.MFARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_MFAResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.MFAResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.MFAResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_MFAResponse(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.MFAResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_SaveLogsRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.SaveLogsRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.SaveLogsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_SaveLogsRequest(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.SaveLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_tokens_v1_SaveLogsResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_tokens_tokens_pb.SaveLogsResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.tokens.v1.SaveLogsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_tokens_v1_SaveLogsResponse(buffer_arg) {
  return accounts_v1alpha1_tokens_tokens_pb.SaveLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TokenServiceService = exports.TokenServiceService = {
  // TOKEN CCP
  createTokenCCP: {
    path: '/accounts.v1alpha1.tokens.v1.TokenService/CreateTokenCCP',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_tokens_tokens_pb.CreateTokenCCPRequest,
    responseType: accounts_v1alpha1_tokens_tokens_pb.CreateTokenCCPResponse,
    requestSerialize: serialize_accounts_v1alpha1_tokens_v1_CreateTokenCCPRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_tokens_v1_CreateTokenCCPRequest,
    responseSerialize: serialize_accounts_v1alpha1_tokens_v1_CreateTokenCCPResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_tokens_v1_CreateTokenCCPResponse,
  },
  getOneTokenCCP: {
    path: '/accounts.v1alpha1.tokens.v1.TokenService/GetOneTokenCCP',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_tokens_tokens_pb.GetOneTokenCCPRequest,
    responseType: accounts_v1alpha1_tokens_tokens_pb.GetOneTokenCCPResponse,
    requestSerialize: serialize_accounts_v1alpha1_tokens_v1_GetOneTokenCCPRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_tokens_v1_GetOneTokenCCPRequest,
    responseSerialize: serialize_accounts_v1alpha1_tokens_v1_GetOneTokenCCPResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_tokens_v1_GetOneTokenCCPResponse,
  },
  // Get Users Email filter
  // LOGS REDIS
  logs: {
    path: '/accounts.v1alpha1.tokens.v1.TokenService/Logs',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_tokens_tokens_pb.LogsRequest,
    responseType: accounts_v1alpha1_tokens_tokens_pb.LogsResponse,
    requestSerialize: serialize_accounts_v1alpha1_tokens_v1_LogsRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_tokens_v1_LogsRequest,
    responseSerialize: serialize_accounts_v1alpha1_tokens_v1_LogsResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_tokens_v1_LogsResponse,
  },
  saveLogs: {
    path: '/accounts.v1alpha1.tokens.v1.TokenService/SaveLogs',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_tokens_tokens_pb.SaveLogsRequest,
    responseType: accounts_v1alpha1_tokens_tokens_pb.SaveLogsResponse,
    requestSerialize: serialize_accounts_v1alpha1_tokens_v1_SaveLogsRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_tokens_v1_SaveLogsRequest,
    responseSerialize: serialize_accounts_v1alpha1_tokens_v1_SaveLogsResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_tokens_v1_SaveLogsResponse,
  },
  // DOBLE AUTHETICATION
  mFA: {
    path: '/accounts.v1alpha1.tokens.v1.TokenService/MFA',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_tokens_tokens_pb.MFARequest,
    responseType: accounts_v1alpha1_tokens_tokens_pb.MFAResponse,
    requestSerialize: serialize_accounts_v1alpha1_tokens_v1_MFARequest,
    requestDeserialize: deserialize_accounts_v1alpha1_tokens_v1_MFARequest,
    responseSerialize: serialize_accounts_v1alpha1_tokens_v1_MFAResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_tokens_v1_MFAResponse,
  },
  enableOrDisableMFA: {
    path: '/accounts.v1alpha1.tokens.v1.TokenService/EnableOrDisableMFA',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_tokens_tokens_pb.EnableOrDisableMFARequest,
    responseType: accounts_v1alpha1_tokens_tokens_pb.EnableOrDisableMFAResponse,
    requestSerialize: serialize_accounts_v1alpha1_tokens_v1_EnableOrDisableMFARequest,
    requestDeserialize: deserialize_accounts_v1alpha1_tokens_v1_EnableOrDisableMFARequest,
    responseSerialize: serialize_accounts_v1alpha1_tokens_v1_EnableOrDisableMFAResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_tokens_v1_EnableOrDisableMFAResponse,
  },
};

exports.TokenServiceClient = grpc.makeGenericClientConstructor(TokenServiceService);
