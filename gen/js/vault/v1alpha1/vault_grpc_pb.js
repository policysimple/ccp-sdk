// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var vault_v1alpha1_vault_pb = require('../../vault/v1alpha1/vault_pb.js');

function serialize_vault_v1alpha1_DeleteSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_pb.DeleteSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.DeleteSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_DeleteSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_pb.DeleteSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_DeleteSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_pb.DeleteSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.DeleteSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_DeleteSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_pb.DeleteSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_ReadSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_pb.ReadSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.ReadSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_ReadSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_pb.ReadSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_ReadSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_pb.ReadSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.ReadSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_ReadSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_pb.ReadSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_WriteSecretRequest(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_pb.WriteSecretRequest)) {
    throw new Error('Expected argument of type vault.v1alpha1.WriteSecretRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_WriteSecretRequest(buffer_arg) {
  return vault_v1alpha1_vault_pb.WriteSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_v1alpha1_WriteSecretResponse(arg) {
  if (!(arg instanceof vault_v1alpha1_vault_pb.WriteSecretResponse)) {
    throw new Error('Expected argument of type vault.v1alpha1.WriteSecretResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vault_v1alpha1_WriteSecretResponse(buffer_arg) {
  return vault_v1alpha1_vault_pb.WriteSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var VaultServiceService = exports.VaultServiceService = {
  // /CRUD
  writeSecret: {
    path: '/vault.v1alpha1.VaultService/WriteSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_pb.WriteSecretRequest,
    responseType: vault_v1alpha1_vault_pb.WriteSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_WriteSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_WriteSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_WriteSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_WriteSecretResponse,
  },
  readSecret: {
    path: '/vault.v1alpha1.VaultService/ReadSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_pb.ReadSecretRequest,
    responseType: vault_v1alpha1_vault_pb.ReadSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_ReadSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_ReadSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_ReadSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_ReadSecretResponse,
  },
  deleteSecret: {
    path: '/vault.v1alpha1.VaultService/DeleteSecret',
    requestStream: false,
    responseStream: false,
    requestType: vault_v1alpha1_vault_pb.DeleteSecretRequest,
    responseType: vault_v1alpha1_vault_pb.DeleteSecretResponse,
    requestSerialize: serialize_vault_v1alpha1_DeleteSecretRequest,
    requestDeserialize: deserialize_vault_v1alpha1_DeleteSecretRequest,
    responseSerialize: serialize_vault_v1alpha1_DeleteSecretResponse,
    responseDeserialize: deserialize_vault_v1alpha1_DeleteSecretResponse,
  },
};

exports.VaultServiceClient = grpc.makeGenericClientConstructor(VaultServiceService);
