// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_v1alpha1_apikeys_apikeys_pb = require('../../../accounts/v1alpha1/apikeys/apikeys_pb.js');

function serialize_accounts_v1alpha1_apikeys_v1_CreateApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.CreateApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.CreateApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_CreateApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.CreateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_CreateApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.CreateApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.CreateApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_CreateApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.CreateApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_DeleteApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.DeleteApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.DeleteApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_DeleteApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.DeleteApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_DeleteApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.DeleteApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.DeleteApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_DeleteApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.DeleteApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_GetOneApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.GetOneApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.GetOneApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_GetOneApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.GetOneApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_GetOneApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.GetOneApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.GetOneApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_GetOneApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.GetOneApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_ListApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.ListApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.ListApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_ListApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.ListApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_ListApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.ListApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.ListApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_ListApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.ListApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_UpdateApiKeyRequest(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.UpdateApiKeyRequest)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.UpdateApiKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_UpdateApiKeyRequest(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.UpdateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_v1alpha1_apikeys_v1_UpdateApiKeyResponse(arg) {
  if (!(arg instanceof accounts_v1alpha1_apikeys_apikeys_pb.UpdateApiKeyResponse)) {
    throw new Error('Expected argument of type accounts.v1alpha1.apikeys.v1.UpdateApiKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_v1alpha1_apikeys_v1_UpdateApiKeyResponse(buffer_arg) {
  return accounts_v1alpha1_apikeys_apikeys_pb.UpdateApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiKeyServiceService = exports.ApiKeyServiceService = {
  createApiKey: {
    path: '/accounts.v1alpha1.apikeys.v1.ApiKeyService/CreateApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_apikeys_apikeys_pb.CreateApiKeyRequest,
    responseType: accounts_v1alpha1_apikeys_apikeys_pb.CreateApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_apikeys_v1_CreateApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_CreateApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_apikeys_v1_CreateApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_CreateApiKeyResponse,
  },
  getOneApiKey: {
    path: '/accounts.v1alpha1.apikeys.v1.ApiKeyService/GetOneApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_apikeys_apikeys_pb.GetOneApiKeyRequest,
    responseType: accounts_v1alpha1_apikeys_apikeys_pb.GetOneApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_apikeys_v1_GetOneApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_GetOneApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_apikeys_v1_GetOneApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_GetOneApiKeyResponse,
  },
  listApiKey: {
    path: '/accounts.v1alpha1.apikeys.v1.ApiKeyService/ListApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_apikeys_apikeys_pb.ListApiKeyRequest,
    responseType: accounts_v1alpha1_apikeys_apikeys_pb.ListApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_apikeys_v1_ListApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_ListApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_apikeys_v1_ListApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_ListApiKeyResponse,
  },
  updateApiKey: {
    path: '/accounts.v1alpha1.apikeys.v1.ApiKeyService/UpdateApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_apikeys_apikeys_pb.UpdateApiKeyRequest,
    responseType: accounts_v1alpha1_apikeys_apikeys_pb.UpdateApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_apikeys_v1_UpdateApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_UpdateApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_apikeys_v1_UpdateApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_UpdateApiKeyResponse,
  },
  deleteApiKey: {
    path: '/accounts.v1alpha1.apikeys.v1.ApiKeyService/DeleteApiKey',
    requestStream: false,
    responseStream: false,
    requestType: accounts_v1alpha1_apikeys_apikeys_pb.DeleteApiKeyRequest,
    responseType: accounts_v1alpha1_apikeys_apikeys_pb.DeleteApiKeyResponse,
    requestSerialize: serialize_accounts_v1alpha1_apikeys_v1_DeleteApiKeyRequest,
    requestDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_DeleteApiKeyRequest,
    responseSerialize: serialize_accounts_v1alpha1_apikeys_v1_DeleteApiKeyResponse,
    responseDeserialize: deserialize_accounts_v1alpha1_apikeys_v1_DeleteApiKeyResponse,
  },
};

exports.ApiKeyServiceClient = grpc.makeGenericClientConstructor(ApiKeyServiceService);
