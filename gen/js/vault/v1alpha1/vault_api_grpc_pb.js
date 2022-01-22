// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var vault_v1alpha1_vault_api_pb = require('../../vault/v1alpha1/vault_api_pb.js');

function serialize_vault_v1alpha1_CreateSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.CreateSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.CreateSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_CreateSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.CreateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_CreateSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.CreateSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.CreateSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_CreateSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.CreateSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_DeleteSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.DeleteSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.DeleteSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_DeleteSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.DeleteSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_DeleteSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.DeleteSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.DeleteSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_DeleteSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.DeleteSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_GetSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.GetSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.GetSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_GetSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.GetSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_ListSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.ListSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.ListSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_ListSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.ListSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_ListSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.ListSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.ListSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_ListSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.ListSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_UpdateSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.UpdateSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.UpdateSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_UpdateSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.UpdateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_UpdateSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_api_pb.UpdateSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.UpdateSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_UpdateSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_api_pb.UpdateSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ======= Metadata =======
// Key                Value
// ---                -----
// created_time       2022-01-21T16:44:14.254178235Z
// custom_metadata    <nil>
// deletion_time      n/a
// destroyed          false
// version            1
//
// ====== Data ======
// Key         Value
// ---         -----
// password    static-password
// username    static-user
//
var VaultAPIServiceService = exports.VaultAPIServiceService = {
  createSecret: {
    path: '/vault.v1alpha1.VaultAPIService/CreateSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.CreateSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.CreateSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_CreateSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_CreateSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_CreateSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_CreateSecretResponse,
  },
  updateSecret: {
    path: '/vault.v1alpha1.VaultAPIService/UpdateSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.UpdateSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.UpdateSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_UpdateSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_UpdateSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_UpdateSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_UpdateSecretResponse,
  },
  deleteSecret: {
    path: '/vault.v1alpha1.VaultAPIService/DeleteSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.DeleteSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.DeleteSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_DeleteSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_DeleteSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_DeleteSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_DeleteSecretResponse,
  },
  getSecret: {
    path: '/vault.v1alpha1.VaultAPIService/GetSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.GetSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.GetSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_GetSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_GetSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_GetSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_GetSecretResponse,
  },
  listSecret: {
    path: '/vault.v1alpha1.VaultAPIService/ListSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_api_pb.ListSecretRequest,
    responseType: vault_v1alpha1_vault_api_pb.ListSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_ListSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_ListSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_ListSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_ListSecretResponse,
  },
};

exports.VaultAPIServiceClient = grpc.makeGenericClientConstructor(VaultAPIServiceService);
