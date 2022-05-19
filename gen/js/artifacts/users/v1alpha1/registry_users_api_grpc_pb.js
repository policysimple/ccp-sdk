// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var artifacts_users_v1alpha1_registry_users_api_pb = require('../../../artifacts/users/v1alpha1/registry_users_api_pb.js');
var artifacts_users_v1alpha1_registry_users_pb = require('../../../artifacts/users/v1alpha1/registry_users_pb.js');

function serialize_artifacts_users_v1alpha1_CreateUserRegistryRequest(arg) {
  if (!(arg instanceof artifacts_users_v1alpha1_registry_users_api_pb.CreateUserRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.users.v1alpha1.CreateUserRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_users_v1alpha1_CreateUserRegistryRequest(buffer_arg) {
  return artifacts_users_v1alpha1_registry_users_api_pb.CreateUserRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_users_v1alpha1_CreateUserRegistryResponse(arg) {
  if (!(arg instanceof artifacts_users_v1alpha1_registry_users_api_pb.CreateUserRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.users.v1alpha1.CreateUserRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_users_v1alpha1_CreateUserRegistryResponse(buffer_arg) {
  return artifacts_users_v1alpha1_registry_users_api_pb.CreateUserRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_users_v1alpha1_DeleteUserRegistryRequest(arg) {
  if (!(arg instanceof artifacts_users_v1alpha1_registry_users_api_pb.DeleteUserRegistryRequest)) {
    throw new Error('Expected argument of type artifacts.users.v1alpha1.DeleteUserRegistryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_users_v1alpha1_DeleteUserRegistryRequest(buffer_arg) {
  return artifacts_users_v1alpha1_registry_users_api_pb.DeleteUserRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_artifacts_users_v1alpha1_DeleteUserRegistryResponse(arg) {
  if (!(arg instanceof artifacts_users_v1alpha1_registry_users_api_pb.DeleteUserRegistryResponse)) {
    throw new Error('Expected argument of type artifacts.users.v1alpha1.DeleteUserRegistryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_artifacts_users_v1alpha1_DeleteUserRegistryResponse(buffer_arg) {
  return artifacts_users_v1alpha1_registry_users_api_pb.DeleteUserRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RegistryUsersAPIServiceService = exports.RegistryUsersAPIServiceService = {
  createUserRegistry: {
    path: '/artifacts.users.v1alpha1.RegistryUsersAPIService/CreateUserRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_users_v1alpha1_registry_users_api_pb.CreateUserRegistryRequest,
    responseType: artifacts_users_v1alpha1_registry_users_api_pb.CreateUserRegistryResponse,
    requestSerialize: serialize_artifacts_users_v1alpha1_CreateUserRegistryRequest,
    requestDeserialize: deserialize_artifacts_users_v1alpha1_CreateUserRegistryRequest,
    responseSerialize: serialize_artifacts_users_v1alpha1_CreateUserRegistryResponse,
    responseDeserialize: deserialize_artifacts_users_v1alpha1_CreateUserRegistryResponse,
  },
  deleteUserRegistry: {
    path: '/artifacts.users.v1alpha1.RegistryUsersAPIService/DeleteUserRegistry',
    requestStream: false,
    responseStream: false,
    requestType: artifacts_users_v1alpha1_registry_users_api_pb.DeleteUserRegistryRequest,
    responseType: artifacts_users_v1alpha1_registry_users_api_pb.DeleteUserRegistryResponse,
    requestSerialize: serialize_artifacts_users_v1alpha1_DeleteUserRegistryRequest,
    requestDeserialize: deserialize_artifacts_users_v1alpha1_DeleteUserRegistryRequest,
    responseSerialize: serialize_artifacts_users_v1alpha1_DeleteUserRegistryResponse,
    responseDeserialize: deserialize_artifacts_users_v1alpha1_DeleteUserRegistryResponse,
  },
};

exports.RegistryUsersAPIServiceClient = grpc.makeGenericClientConstructor(RegistryUsersAPIServiceService);
